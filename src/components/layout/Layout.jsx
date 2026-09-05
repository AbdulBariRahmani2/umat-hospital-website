import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
