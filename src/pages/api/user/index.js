import { validateRoute } from "@utils/auth";

export default validateRoute(async (req, res, user) => {
  res.json(user);
});
