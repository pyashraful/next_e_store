import nc from "next-connect";
import { check, validationResult } from "express-validator";
import { User } from "../../../models/User";
import createErroor from "http-errors";

const addUserValidation = [
  check("name").isLength({ min: 1 }).withMessage("Name is Required"),
  check("email")
    .isEmail()
    .withMessage("Invalid email address")
    .trim()
    .custom(async () => {
      try {
        const user = await User.findOne({ email: value });
        if (user) {
          throw createErroor("Email already exists");
        }
      } catch (error) {
        console.log(error);
      }
    }),
];
