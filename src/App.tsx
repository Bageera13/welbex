import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./component/Layout/Layout";
import { Main } from "./pages/Main/Main";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
            <Route path="/services" />
            <Route path="/widgets" />
            <Route path="/integrations" />
            <Route path="/cases" />
            <Route path="/certificates" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
