import { NextResponse } from "next/server";

export function middleware(request) {
  const isLogin = false;

  if (isLogin) return NextResponse.next();

  return NextResponse.redirect(new URL("/auth/login", request.url));
}

export const config = {
  matcher: ["/tentang"],
};

// (request.nextUrl.pathname.startsWith("/auth/login")
