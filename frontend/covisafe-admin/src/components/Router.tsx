import React from "react";
import { Route, Routes } from "react-router";
import DashBoard from "./DashBoard";
import Users from "./Users";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="dashboard" element={<DashBoard />} />
      <Route path="users" element={<Users />} />
    </Routes>
  );
}
