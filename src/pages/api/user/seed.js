import User from "@model/user";
import dbConnect from "@utils/dbConnect.js";
import bcrypt from "bcrypt";

export default async (req, res) => {
  const salt = bcrypt.genSaltSync();

  await dbConnect();
  await User.deleteMany();
  await User.insertMany({
    name: "Md Ashraful Islam",
    email: "test@test.com",
    password: bcrypt.hashSync("password", salt),
    role: "admin",
    usertype: "platinum",
  });
  res.send({ massage: "seed successfully" });
};
