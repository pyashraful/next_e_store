import { NextResponse } from "next/server";
// import { validateToken } from "@utils/auth";
const signedinPages = ["products"];

export default function middleware(req) {
  let path = req.nextUrl.pathname.split("/")[2];

  if (signedinPages.find((p) => p === path)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    // const user = validateToken(token);

    // if (user.role !== "admin") {
    //   const url = req.nextUrl.clone();
    //   url.pathname = "/";
    //   return NextResponse.redirect(url);
    // }

    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }
}
