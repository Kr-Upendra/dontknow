import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <>
      <div className="hero">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      <Sidebar />
    </>
  );
}
