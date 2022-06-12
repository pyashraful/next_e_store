import jwt from "jsonwebtoken";
import Cookie from "cookie";
import User from "../../../model/user";
import bcrypt from "bcrypt";
import dbConnect from "@utils/dbConnect.js";

export default async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const { name, email, password } = req.body;
  let user;
  await dbConnect();
  const newUser = new User({
    name: name,
    email: email,
    password: bcrypt.hashSync(password, salt),
    role: "user",
  });

  try {
    user = await newUser.save();
  } catch (error) {
    res.status(401);
    res.json({ error: "User already exists" });
    return;
  }

  const token = jwt.sign(
    {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      time: Date.now(),
    },
    "hello",
    { expiresIn: "8h" }
  );

  res.setHeader(
    "Set-Cookie",
    Cookie.serialize("TRAX_ACCESS_TOKEN", token, {
      httpOnly: true,
      maxAge: 8 * 60 * 60,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    })
  );

  res.send(user);
};
