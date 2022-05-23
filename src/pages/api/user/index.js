import { validateRoute } from "@utils/auth";

export default validateRoute(async (req, res) => {
  try {
    res.json(req.user);
  } catch (err) {
    console.log(err);
  }
});
