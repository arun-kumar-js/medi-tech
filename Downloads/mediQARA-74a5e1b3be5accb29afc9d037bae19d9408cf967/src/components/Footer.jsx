import React from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Logo size="large" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  MediQARA Tech
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner in Medical Device Quality & Regulatory
                Excellence. we help medical device companies achieve seamless
                compliance and build robust quality management systems.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/mediqara-tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#hero"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">+91 8122590434</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">info@mediqaratech.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                  <span className="text-gray-300 text-sm">
                    4/198 E, Pattumuthuiyyanarkovil Street,
                    <br />
                    Arunachalapuram, Tenkasi – 627862,
                    <br />
                    Tamilnadu, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © 2025 MediQARA Tech. All Rights Reserved.
                </p>
              </div>
              <div className="text-center md:text-right">
                <div className="text-gray-400 text-sm space-y-1">
                  <p>
                    <strong>GSTIN:</strong> 33BRNPS7024K1ZC
                  </p>
                  <p>
                    <strong>MSME/Udyam No.:</strong> UDYAM-TN-37-0044679
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
