import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./style.css";
import React from "react";
import Product from "./Pages/Product";
import Details from "./Pages/Details";
import Description from "./parts/Details/Description";
import Review from "./parts/Details/Review";
import Shipping from "./parts/Details/Shipping";
import AboutCompany from "./parts/Details/AboutCompany";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/products/details" element={<Details />} />
      <Route path="description" element={<Description />} />
      <Route path="review" element={<Review />} />
      <Route path="shipping" element={<Shipping />} />
      <Route path="Aboutcompany" element={<AboutCompany />} />
    </Routes>
  );
}

export default App;
