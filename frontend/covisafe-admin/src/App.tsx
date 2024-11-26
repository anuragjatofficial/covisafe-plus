import { Box } from "@chakra-ui/layout";
import * as React from "react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import Appointments from "./components/Appointments";
import Router from "./components/Router";
import Layout from "./components/Layout";

export const App = () => {
  return <Layout />;
};
