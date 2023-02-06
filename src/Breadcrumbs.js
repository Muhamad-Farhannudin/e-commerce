import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";

export default function Breadcrumbs() {
  const location = useLocation();

  return (
    <div className="max-w-full h-16 py-5 mx-[130px]">
      <nav>
        <Link to="/" className={location.pathname === "/" ? "breadcrumbs-active" : "breadcrumbs-not-active"}>
          Home
        </Link>
        <span className="breadcrumb-arrow">&gt;</span>
        <Link to="/products" className={location.pathname.startsWith("/products") ? "breadcrumb-active" : "breadcrumb-not-active"}>
          Products
        </Link>
        <span className="breadcrumb-arrow">&gt;</span>
        <Link to="/products/details" className={location.pathname === "/products/details" ? "breadcrumb-active" : "breadcrumb-not-active"}>
          Details
        </Link>
      </nav>
    </div>
  );
}
