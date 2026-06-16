import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Services from "../pages/Services";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/ProductDetails";
import Projects from "../pages/Projects";
import Dashboard from "../pages/admin/Dashboard";
import AdminProducts from "../pages/admin/AdminProducts";
import AddProduct from "../pages/admin/AddProduct";
import EditProduct from "../pages/admin/EditProduct";
import Messages from "../pages/admin/Messages";




function AppRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<Dashboard />}/>
      <Route
  path="/admin/products"
  element={<AdminProducts />}
/>
<Route
  path="/admin/add-product"
  element={<AddProduct />}
/>
<Route
  path="/admin/products/edit/:id"
  element={<EditProduct />}
/>
<Route
  path="/admin/messages"
  element={<Messages />}
/>
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
