/*import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/api(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    const { protect } = await auth();
    return protect();
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};*/

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/api(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isProtectedRoute(req)) {
    return;
  }

  const { userId } = await auth();

  // If user is not signed in → redirect to sign-in
  if (!userId) {
    const signInUrl = new URL("/sign-in", req.url);
    return NextResponse.redirect(signInUrl);
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
