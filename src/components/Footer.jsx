import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1E2227] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
         <h2 className="text-5xl font-bold text-white mb-4">.Logo</h2>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet consectetur. Enim diam auctor aliquet
            ornare purus leo non augue egestas. Massa sed proin vestibulum vitae
            sit feugiat duis ridiculus ut. Elementum.
          </p>
        </div>

        {/* FFE Links */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">FFE</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white">
                FAQ’s
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-white">
                Help & Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/refund" className="hover:text-white">
                Refund & Cancellation
              </Link>
            </li>
            <li>
              <Link to="/offers" className="hover:text-white">
                Offer Terms
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">
            Contact Us
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-orange-500" />
              <span>+91 7894561320</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-orange-500" />
              <span>user@gmail.com</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={56} className="text-orange-500 mt-1" />
              <span>
                2nd Floor, Emirates Arcade, 80 Feet Rd, behind Water Tank,
                Manchegowdana koppalu, II Stage, Vijayanagar, Mysuru, Karnataka
                570017
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            Copyright © 2022–2024 First Floor Ecommerce
          </p>
          {/* Social Media */}
          <div className="flex gap-5 text-gray-400">
            <Link to="/facebook" className="hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/instagram" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="/linkedin" className="hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link to="/twitter" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
