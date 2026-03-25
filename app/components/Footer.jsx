"use client";

import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white pt-16 pb-8 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Logo & About */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/"
              className="w-15 h-15 flex items-center justify-center text-white font-bold text-xl cursor-pointer"
            >
              <img
                src="https://littleflowerschoolkhamaria.com/assets/img/logo.png"
                alt="little-flower"
                className="w-12 h-12 object-contain"
              />
            </Link>
            <span className="font-bold text-xl">Little Flower School</span>
          </div>
          <p className="text-sm opacity-80 leading-relaxed mb-6">
            Our English-medium school is dedicated to providing high-quality,
            internationally focused education that fosters intellectual growth
            and global citizenship.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              {/* <Facebook size={20} /> */}
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors cursor-pointer"
            >
              {/* <Instagram size={20} /> */}
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors cursor-pointer"
            >
              {/* <Twitter size={20} /> */}
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm opacity-80">
            <li className="flex items-center gap-3">
              <Mail size={18} />
              <a
                href="mailto:support@littleflowerschool.com"
                className="hover:underline cursor-pointer"
              >
                support@littleflowerschool.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} />
              <span>+91 12345 67890</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} />
              <a
                href="https://www.google.com/maps/place/123+Education+Lane,+Bhadohi,+Uttar+Pradesh,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer"
              >
                123 Education Lane, Bhadohi, Uttar Pradesh, India
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li>
              <Link
                href="/admissions"
                className="hover:underline cursor-pointer"
              >
                Admission Process
              </Link>
            </li>
            <li>
              <Link href="/calendar" className="hover:underline cursor-pointer">
                Academic Calendar
              </Link>
            </li>
            <li>
              <Link href="/uniform" className="hover:underline cursor-pointer">
                School Uniform
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:underline cursor-pointer">
                Career Opportunities
              </Link>
            </li>
          </ul>
        </div>

        {/* Facilities */}
        <div>
          <h4 className="font-bold text-lg mb-6">Facilities</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li>
              <Link href="/labs" className="hover:underline cursor-pointer">
                Science Labs
              </Link>
            </li>
            <li>
              <Link href="/library" className="hover:underline cursor-pointer">
                Digital Library
              </Link>
            </li>
            <li>
              <Link href="/sports" className="hover:underline cursor-pointer">
                Sports Complex
              </Link>
            </li>
            <li>
              <Link
                href="/cafeteria"
                className="hover:underline cursor-pointer"
              >
                Cafeteria
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/20 text-center text-xs opacity-60">
        © 2025 Little Flower School - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
