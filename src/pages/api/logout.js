import { isAuth } from "@utils/auth";
import cookie from "cookie";
import nc from "next-connect";

const handler = nc();
handler.use(isAuth);

export default handler.post(async (req, res) => {
  try {
    console.log("🚀 ~ file: index.js ~ line 10 ~ handler.get ~ req", req.user);
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("TRAX_ACCESS_TOKEN", "", {
        maxAge: -1,
        path: "/",
      })
    );
    res.send({ message: "Logout success" });
  } catch (err) {
    console.log(err);
  }
});
