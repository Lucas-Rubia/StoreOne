import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../layout/baseLayout";
import { Home } from "../Pages/home";

export function Router() {
    return (
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    );
}