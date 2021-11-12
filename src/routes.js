import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp";
import UserSignUp from "./pages/UserSignUp";
import AgentSignUp from "./pages/UserSignUp";
import NotFound from "./pages/NotFound.js";

const routes = () => (
  <Routes>
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
    <Route element={<AuthLayout />}>
      <Route path="/login" element={<Login />} />
      <Route path="/user-signup" element={<UserSignUp />} />
      <Route path="/agent-signup" element={<AgentSignUp />} />
    </Route>
    <Route element={<NotFound />} />
  </Routes>
);
export default routes;
