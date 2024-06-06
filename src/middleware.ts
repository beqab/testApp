// middleware.ts
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const env = process.env.NODE_ENV;
export default async function middleware(req: NextRequest) {
  console.log(req.geo?.country, "tttt");

  // const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;

  const country = req.geo?.country || req.headers.get("x-vercel-ip-country");
  console.log(`Country: ${country}`);
  if (env !== "development") {
    if (
      !["US", "GE"].includes(country ?? "") &&
      pathname !== "/blockedCountry"
    ) {
      const blockedUrl = new URL("/blockedCountry", req.url);
      return NextResponse.redirect(blockedUrl);
    }
  }

  return NextResponse.next();
}
