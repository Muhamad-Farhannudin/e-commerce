import React from "react";
import Breadcrumbs from "../Breadcrumbs";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Main from "../parts/Details/Main";
import Navdetail from "../parts/Details/Navdetail";
import Aside from "../parts/Details/Aside";
import Releated from "../parts/Details/Releated";
import Footer from '../components/Footer'

export default function Details() {
  return (
    <div>
      <Header />
      <Navigation />
      <Breadcrumbs />
      <Main />
      <div className="flex">
        <Navdetail />
        <Aside />
      </div>
      <Releated />
      <Footer />
    </div>
  );
}
