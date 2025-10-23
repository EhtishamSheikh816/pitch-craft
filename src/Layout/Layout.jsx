import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#020617] text-white">
      <Header />

      <main className="flex-grow ">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
