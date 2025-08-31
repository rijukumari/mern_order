import React from "react";
import { Link } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaInternetExplorer } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">About Me</h2>
            <p className="text-sm leading-relaxed">
              I am Riju Kumari, a passionate MERN Stack developer, focused on 
              building modern, scalable, and user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-white transition">Menu</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Connect with Me</h2>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a href="https://www.linkedin.com/in/riju-kumari-59ba9023b/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">
                <CiLinkedin className="size-6" />
              </a>
              <a href="https://github.com/rijukumari/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">
                <FaGithub className="size-6"/>
              </a>
              <a href="mailto:rijukumari193@gmail.com" className="text-gray-400 hover:text-white transition">
                <CgMail className="size-6"/>
              </a>
              <a href="https://internshala.com/student/dashboard" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">
                <FaInternetExplorer className="size-6"/>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Riju Kumari | All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
