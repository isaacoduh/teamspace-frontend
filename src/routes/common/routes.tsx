import SignIn from "../../page/auth/SignIn";
import SignUp from "../../page/auth/SignUp";
import WorkspaceDashboard from "../../page/workspace/Dashboard";
import Members from "../../page/workspace/Members";
import ProjectDetails from "../../page/workspace/ProjectDetails";
import Settings from "../../page/workspace/Settings";
import Tasks from "../../page/workspace/Tasks";
import { AUTH_ROUTES, PROTECTED_ROUTES } from "./routePaths";

export const authenticationRoutes = [
  { path: AUTH_ROUTES.SIGN_IN, element: <SignIn /> },
  { path: AUTH_ROUTES.SIGN_UP, element: <SignUp /> },
];

export const protectedRoutePaths = [
  { path: PROTECTED_ROUTES.WORKSPACE, element: <WorkspaceDashboard /> },
  { path: PROTECTED_ROUTES.PROJECT_DETAILS, element: <ProjectDetails /> },
  { path: PROTECTED_ROUTES.TASKS, element: <Tasks /> },
  { path: PROTECTED_ROUTES.MEMBERS, element: <Members /> },
  { path: PROTECTED_ROUTES.SETTINGS, element: <Settings /> },
];

export const baseRoutePaths = [
  // {path: BASE_ROUTE.INVITE_URL, element: <Invite}
];
