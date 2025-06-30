import { Outlet } from "react-router-dom";
import { Header } from "./header";

export function BaseLayout() {
    return (
      <div className="p-4">
        <Header />
          <Outlet />
      </div>
    );
}