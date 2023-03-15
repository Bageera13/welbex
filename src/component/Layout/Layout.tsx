import React from "react";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";
import './layout.css'
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
