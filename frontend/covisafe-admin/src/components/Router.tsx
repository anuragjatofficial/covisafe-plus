import React from "react";
import { Route, Routes } from "react-router";
import DashBoard from "./DashBoard";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard/>} />
      <Route path="dashboard" />
    </Routes>
  );
}
