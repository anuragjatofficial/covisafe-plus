import React from "react";
import NavBar from "./NavBar";
import Router from "./Router";

export default function Layout() {
  return (
    <main className="flex">
      <NavBar />
      <Router />
    </main>
  );
}
