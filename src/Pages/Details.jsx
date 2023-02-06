import React from "react";
import Breadcrumbs from "../Breadcrumbs";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Main from "../parts/Details/Main";

export default function Details() {
  return (
    <div>
      <Header />
      <Navigation />
      <Breadcrumbs />
      <Main />
    </div>
  );
}
