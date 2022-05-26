import jwt from "jsonwebtoken";
import User from "@model/user";

export const validateRoute = (handler) => {
  return async (req, res) => {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (token) {
      let user;
      try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        user = await User.findById(id);

        if (!user) {
          throw new Error("Not real user");
        }
      } catch (error) {
        res.status(401);
        res.json({ error: "Not Authorizied" });
        return;
      }

      return handler(req, res, user);
    }

    res.status(401);
    res.json({ error: "Not Authorizied" });
  };
};

export function validateAdminRoute(handler) {
  return validateRoute((req, res, user) => {
    if (user.role !== "admin") {
      res.status(403);
      res.json({ error: "Not Authorizied" });
      return;
    }

    return handler(req, res, user);
  });
}

export const validateToken = (token) => {
  const user = jwt.verify(token, process.env.JWT_SECRET);
  return user;
};

export async function isAdmin(req, res, next) {
  if (req.user.role === "admin") {
    next();
  } else {
    res.status(401).send({ message: "User is not admin" });
  }
}
