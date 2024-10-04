import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define matchers for protected, public, and ignored routes
const isProtectedRoute = createRouteMatcher(["/ask-question(.*)"]);
const isPublicRoute = createRouteMatcher([
  "/",
  "/api/webhook",
  "question/:id",
  "/tags",
  "/tags/:id",
  "/profile/:id",
  "/community",
  "/jobs",
]);

// Add ignored routes here
const isIgnoredRoute = createRouteMatcher(["/api/webhook", "/api/chatgpt"]);

export default clerkMiddleware(async (auth, req) => {
  const url = req.nextUrl.pathname; // Access the pathname instead of the full URL

  // Check if the route is ignored
  if (isIgnoredRoute(req)) {
    return;
  }

  if (isProtectedRoute(req)) {
    // Protect only protected routes
    await auth().protect(); // Ensure to await the authentication check
  } else if (isPublicRoute(req)) {
    // eslint-disable-next-line no-useless-return
    return;
  } else {
    console.error(`Route ${url} does not match any defined route types.`);
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
