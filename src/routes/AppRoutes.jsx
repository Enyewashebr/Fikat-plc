import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Services from "../pages/Services";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/ProductDetails";
import Projects from "../components/Projects";




function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default AppRoutes;
