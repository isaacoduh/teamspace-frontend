import SignIn from "../../page/auth/SignIn";
import SignUp from "../../page/auth/SignUp";
import WorkspaceDashboard from "../../page/workspace/Dashboard";
import { AUTH_ROUTES, PROTECTED_ROUTES } from "./routePaths";

export const authenticationRoutes = [
  { path: AUTH_ROUTES.SIGN_IN, element: <SignIn /> },
  { path: AUTH_ROUTES.SIGN_UP, element: <SignUp /> },
];

export const protectedRoutePaths = [
  { path: PROTECTED_ROUTES.WORKSPACE, element: <WorkspaceDashboard /> },
];

export const baseRoutePaths = [
  // {path: BASE_ROUTE.INVITE_URL, element: <Invite}
];
