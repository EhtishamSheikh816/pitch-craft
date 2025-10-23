import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300">
      <div className=" mx-auto px-4 md:px-10 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2 mb-4">
              <Sparkles className="text-blue-400 animate-pulse" size={25} />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Pitch Craft
              </span>
            </h3>
            <p className="text-sm mb-4">
              Crafting compelling pitches that turn ideas into opportunities. We
              help startups and entrepreneurs present their vision with clarity
              and confidence.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#services"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="#portfolio"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="#about"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#testimonials"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="#blog"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#templates"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Pitch Templates
                </Link>
              </li>
              <li>
                <Link
                  href="#guides"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Guides & Tips
                </Link>
              </li>
              <li>
                <Link
                  href="#case-studies"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-1 flex-shrink-0 text-blue-400" />
                <Link
                  href="mailto:hello@pitchcraft.com"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  hello@pitchcraft.com
                </Link>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-1 flex-shrink-0 text-blue-400" />
                <Link
                  href="tel:+1234567890"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  +1 (234) 567-890
                </Link>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="mt-1 flex-shrink-0 text-blue-400"
                />
                <span className="text-sm">
                  123 Business Ave, Suite 100
                  <br />
                  San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-gray-400">
            © 2025 Pitch Craft. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="#privacy"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#cookies"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
