import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import NotFound from "./pages/NotFound.js";

const routes = () => (
  <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/login" exact element={<Login />} />
    <Route element={<NotFound />} />
  </Routes>
);
export default routes;
