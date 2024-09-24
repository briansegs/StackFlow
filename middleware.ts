import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define protected routes (adjust these based on your app's needs)
const isProtectedRoute = createRouteMatcher(["/ask-question(.*)"]);

// Define public routes (add the routes you want to be public)
const isPublicRoute = createRouteMatcher([
  "/",
  "/api/webhook",
  "question/:id",
  "/tags/",
  "/tags/:id",
  "/profile/:id",
  "/community",
  "/jobs",
]);

const isIgnoredRoute = createRouteMatcher(["/api/webhook", "/api/chatgpt"]);

// Middleware logic
export default clerkMiddleware((auth, req) => {
  // Ignore certain routes, bypass middleware
  if (isIgnoredRoute(req)) {
    return;
  }

  if (isPublicRoute(req)) {
    // If it's a public route, no authentication is required
    return;
  }

  if (isProtectedRoute(req)) {
    // Protect the route if it's in the protected list
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
