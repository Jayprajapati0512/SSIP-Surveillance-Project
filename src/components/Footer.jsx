import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-fit bg-gray-900 text-white py-6 flex flex-col items-center justify-center">
      {/* Main Footer Content */}
      <div className="w-full max-w-6xl flex flex-wrap justify-between px-5 md:px-10">
        
        {/* Company Info */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
        
          <h1 className="text-2xl font-bold flex w-full justify-center my-5 "> <img className="h-[15vh] rounded-xl" src="/photo/logo.jpg"></img></h1>
         
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0 flex flex-col">
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className="text-sm opacity-80">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/past-incidents" className="hover:underline">Past Records</a></li>
            <li><a href="/settings" className="hover:underline">Settings</a></li>
            <li><a href="/login" className="hover:underline">Login</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/3 flex flex-col">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-sm opacity-80">Email: support@surveillance.com</p>
          <p className="text-sm opacity-80">Phone: +1 234 567 890</p>
          <p className="text-sm opacity-80">Address: 123 Security Lane, Tech City</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-4 flex gap-4">
        <a href="#" className="text-white hover:text-blue-500 text-xl"><FaFacebook /></a>
        <a href="#" className="text-white hover:text-blue-400 text-xl"><FaTwitter /></a>
        <a href="#" className="text-white hover:text-pink-500 text-xl"><FaInstagram /></a>
        <a href="#" className="text-white hover:text-blue-600 text-xl"><FaLinkedin /></a>
      </div>

      {/* Copyright Notice */}
      <p className="text-sm opacity-70 mt-4">© 2025 Civic AI. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
