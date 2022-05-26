import { validateRoute } from "@utils/auth";
import cookie from "cookie";

export default validateRoute(async (req, res) => {
  try {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("TRAX_ACCESS_TOKEN", "", {
        maxAge: -1,
        path: "/",
      })
    );
    res.send({ message: "Logout success" });
  } catch (err) {
    console.log("🚀 ~ file: logout.js ~ line 15 ~ validateRoute ~ err", err);
  }
});
