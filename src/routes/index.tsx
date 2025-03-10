import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "../layout/base.layout";
import SignUp from "../page/auth/SignUp";
import SignIn from "../page/auth/SignIn";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
