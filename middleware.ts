import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const locales = ["en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const PUBLIC_FILES = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip public files, API routes, _next
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILES.test(pathname)
  ) {
    return;
  }

  // Check if pathname already starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Detect preferred locale from cookie or Accept-Language header
  const cookieLang = request.cookies.get("NEXT_LOCALE")?.value as Locale | undefined;
  const locale = cookieLang && locales.includes(cookieLang) ? cookieLang : defaultLocale;

  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.rewrite(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|favicon.svg|icons|portfolio|office-team.jpg|office-woman.jpg|ico-logo.png).*)"],
};
