import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
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
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <img
              src={logo}
              alt="Fikat Logo"
              className="h-16 mb-4"
            />

            <p className="text-gray-400">
              Fikat Finishing & Supply Material provides premium
              granite, ceramic, marble, and construction finishing
              materials in Addis Ababa and throughout Ethiopia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Products
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Granite</li>
              <li>Ceramic Tiles</li>
              <li>Marble</li>
              <li>Finishing Materials</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <FaMapMarkerAlt className="inline mr-2" />
                Addis Ababa, Ethiopia
              </li>
              <li>
                <FaPhone className="inline mr-2" />
                +251 XXX XXX XXX
              </li>
              <li>
                <FaEnvelope className="inline mr-2" />
                info@fikat.com
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} Fikat Finishing & Supply Material.
            All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
