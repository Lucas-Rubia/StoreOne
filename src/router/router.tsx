import { ShoppingCar } from "@/pages/shoppingCar/shoppingCar";
import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../layout/baseLayout";
import { Home } from "../pages/home/home";

export function Router() {
    return (
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shoppingCar" element={<ShoppingCar />} />
        </Route>
      </Routes>
    );
}