import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "../layout/base.layout";
import SignUp from "../page/auth/SignUp";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/signup" element={<SignUp />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
