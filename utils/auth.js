import jwt from "jsonwebtoken";
import User from "../models/user";

export async function isAuth(req, res, next) {
  const token = req.cokies.TRAX_ACCESS_TOKEN;

  if (token) {
    let user;
    try {
      const { id } = jwt.varify(token, "hello");
      user = await User.findById(id);
      if (!user) {
        throw new Error("Not real user");
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(401).send({ error: "Not authorizied" });
      return;
    }
  }
}

export async function isAdmin(req, res, next) {
  if (req.user.role === "admin") {
    next();
  } else {
    res.status(401).send({ message: "User is not admin" });
  }
}
