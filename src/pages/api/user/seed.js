import User from "@model/user";
import connectDB from "@utils/db.js";
// import bcrypt from "bcrypt";
import bcrypt from "bcrypt";

export default async (req, res) => {
  const salt = bcrypt.genSaltSync();

  await connectDB();
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
