import nc from "next-connect";
import { check, validationResult } from "express-validator";
import User from "../../../model/user";
import createErroor from "http-errors";
import bcrypt from "bcrypt";
import runMiddleware from "../../../utils/initMiddleware";

const handler = nc();

const addUserValidation = [
  check("name").isLength({ min: 1 }).withMessage("Name is Required"),
  check("email")
    .isEmail()
    .withMessage("Invalid email address")
    .trim()
    .custom(async (value) => {
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

async function addUser(req, res) {
  let newUser;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  newUser = new User({
    ...req.body,
    password: hashedPassword,
  });
  try {
    const result = await newUser.save();
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured!",
        },
      },
    });
  }
}

handler.post(async (req, res) => {
  const validator = await runMiddleware(req, res, addUserValidation);
});
