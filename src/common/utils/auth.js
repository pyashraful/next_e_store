import jwt from "jsonwebtoken";
import User from "@model/user";

export async function isAuth(req, res, next) {
  // console.log(req.headers);
  const token = req.cookies.TRAX_ACCESS_TOKEN;

  if (token) {
    let user;
    try {
      const { id } = jwt.verify(token, "hello");
      user = await User.findById(id);
      if (!user) {
        throw new Error("Not real user");
      } else {
        req.user = user;
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
