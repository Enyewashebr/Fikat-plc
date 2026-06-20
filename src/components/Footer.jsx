import { Link } from "react-router-dom";
import logo3 from "../assets/logo3.png";

import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>

            <img
              src={logo3}
              alt="Fikat Logo"
              className="h-16 mb-5"
            />

            <p className="text-gray-400 leading-7">
              Fikat Finishing Material Supplier PLC is a trusted
              importer and supplier of premium granite, marble,
              ceramic, porcelain and construction finishing
              materials for residential and commercial projects
              across Ethiopia.
            </p>

            <div className="flex gap-4 mt-6">

              <a href="#" className="hover:text-[#E56D2E] transition">
                <FaFacebook size={22} />
              </a>

              <a href="#" className="hover:text-[#E56D2E] transition">
                <FaInstagram size={22} />
              </a>

              <a href="#" className="hover:text-[#E56D2E] transition">
                <FaTelegram size={22} />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link to="/" className="hover:text-[#E56D2E] transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-[#E56D2E] transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-[#E56D2E] transition">
                  Products
                </Link>
              </li>

              <li>
                <Link to="/projects" className="hover:text-[#E56D2E] transition">
                  Projects
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-[#E56D2E] transition">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Products */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Our Products
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Granite</li>

              <li>Marble</li>

              <li>Ceramic Tiles</li>

              <li>Porcelain Tiles</li>

              <li>Finishing Materials</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#E56D2E]" />
                Addis Ababa, Ethiopia
              </li>

              <li className="flex items-start gap-3">
                <FaPhone className="mt-1 text-[#E56D2E]" />
                +251 911 524 938
              </li>

              <li className="flex items-start gap-3">
                <FaPhone className="mt-1 text-[#E56D2E]" />
                +251 930 796 513
              </li>

              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-[#E56D2E]" />
                plcfikat@gmail.com
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

          <p>
            © {new Date().getFullYear()} Fikat Finishing Material Supplier PLC.
            All Rights Reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Designed & Developed by Enyew
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
