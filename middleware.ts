import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["sk"],

  defaultLocale: "sk",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};