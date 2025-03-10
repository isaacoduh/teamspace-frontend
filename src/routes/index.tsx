import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "../layout/base.layout";
import SignUp from "../page/auth/SignUp";
import SignIn from "../page/auth/SignIn";
import AuthRoute from "./auth.route";
import { authenticationRoutes, protectedRoutePaths } from "./common/routes";
import ProtectedRoute from "./protected.route";
import AppLayout from "../layout/app.layout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<BaseLayout />}>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Route> */}

        <Route path="/" element={<AuthRoute />}>
          <Route element={<BaseLayout />}>
            {authenticationRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Route>

        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            {protectedRoutePaths.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
