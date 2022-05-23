import jwt from "jsonwebtoken";
import User from "@model/user";

export function validateRoute(handler) {
  return async (req, res) => {
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
        }
      } catch (error) {
        console.log(error);
        res.status(401).send({ error: "Not authorizied" });
        return;
      }
      return handler(req, res, user);
    }
  };
}

export async function isAdmin(req, res, next) {
  if (req.user.role === "admin") {
    next();
  } else {
    res.status(401).send({ message: "User is not admin" });
  }
}
