import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import User from "../../model/user";
import dbConnect from "@utils/dbConnect.js";

export default async (req, res) => {
  const { email, password } = req.body;
  await dbConnect();
  let user = await User.findOne({ email });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
        time: Date.now(),
      },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    );
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("TRAX_ACCESS_TOKEN", token, {
        httponly: true,
        maxAge: 8 * 60 * 60,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      })
    );

    console.log("🚀 ~ file: login.js ~ line 11 ~ user", user);
    res.json(user);
  } else {
    res.status(401).json({ error: "Email or Password is wrong" });
  }
};
