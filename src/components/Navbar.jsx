import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md">
      {/* <h1 className="text-2xl font-bold">FIKAT PLC</h1> */}
       <div className="flex items-center gap-3">
        <img src={logo} alt="Fikat Logo" className="h-12" />
        <h1 className="font-bold text-xl">FIKAT PLC</h1>
      </div>
      <ul className="flex gap-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
