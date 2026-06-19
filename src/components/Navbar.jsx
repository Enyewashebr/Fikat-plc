import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Fikat Logo" className="h-12 w-auto" />
          
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/products">Products</Link>

          <Link to="/projects">Projects</Link>

          <Link to="/contact">Contact</Link>

          <Link
            to="/contact"
            className="bg-yellow-500 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Request Quote
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">

          <div className="flex flex-col p-6 gap-5">

            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <Link to="/products" onClick={() => setIsOpen(false)}>
              Products
            </Link>

            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            <Link
              to="/contact"
              className="bg-yellow-500 text-center py-3 rounded-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Request Quote
            </Link>

          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
