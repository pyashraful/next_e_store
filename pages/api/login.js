import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import User from "../../model/user";
import nc from "next-connect";

const handler = nc();

export default handler.post(async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        time: Date.now(),
      },
      "hello",
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

    res.json(user);
  } else {
    res.status(401);
    res.json({ error: "User already exists" });
  }
});
