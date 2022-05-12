import { isAuth } from "@utils/auth";
import nc from "next-connect";

const handler = nc();
handler.use(isAuth);

export default handler.get(async (req, res) => {
  try {
    console.log("🚀 ~ file: index.js ~ line 10 ~ handler.get ~ req", req.user);
    res.json(req.user);
  } catch (err) {
    console.log(err);
  }
});
