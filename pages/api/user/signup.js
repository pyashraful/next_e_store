import nc from "next-connect";
import { check, validationResult } from "express-validator";
import { User } from "../../../models/User";
import createErroor from "http-errors";
import bcrypt from "bcryptjs";

const handler = nc();

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

function addUserValidationHandler(req, res, next) {
  const errors = validationResult(req);
  const errorMap = errors.mapped();
  if (Object.keys(errorMap).length === 0) {
    next();
  }
  if (Object.keys(errorMap).length > 0) {
    res.status(422).json({
      errors: errorMap,
    });
  }
}
