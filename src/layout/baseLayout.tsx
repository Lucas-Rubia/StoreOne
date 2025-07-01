import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";

export function BaseLayout() {
    return (
      <div>
        <div className="p-4">
          <Header />
          <Outlet />
        </div>
        <Footer />
      </div>
    );
}