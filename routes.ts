/**
 * An aaray routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * An aaray routes that are used for authentication
 * These routes wil redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used
 * @type {string}
 */
export const apiAuthRoutePrefix = "/api/auth";

/**
 * The default redirect route for authenticated users
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
