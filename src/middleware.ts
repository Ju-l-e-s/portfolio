import createMiddleware from "next-intl/middleware";
import { isbot } from "isbot";
import { NextResponse, type NextRequest } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  localeDetection: true,
});

export const config = {
  matcher: ["/", "/(fr|en)/:path*"],
};

export default function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent") || "";
  const allowlisted = /googlebot|bingbot|duckduckbot|baiduspider/i.test(ua);

  if (ua && isbot(ua) && !allowlisted) {
    return new NextResponse("Blocked", { status: 403 });
  }

  return intlMiddleware(request);
}
