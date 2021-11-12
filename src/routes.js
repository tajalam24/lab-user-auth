import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import NotFound from "./pages/NotFound.js";

const routes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route element={<AuthLayout />}>
      <Route path="/login" element={<Login />} />
    </Route>
    <Route element={<NotFound />} />
  </Routes>
);
export default routes;
