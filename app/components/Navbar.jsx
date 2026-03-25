"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

// NAV Items
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    dropdown: [
      { label: "Principal Message", href: "/principalMsg" },
      { label: "Introduction", href: "/introduction" },
      { label: "Manager Message", href: "/managerMsg" },
      { label: "Chairman Message", href: "/chairmanMsg" },
      { label: "Our Mission & Vision", href: "/ourMissionVision" },
    ],
  },
  { label: "Admissions", href: "/admissionSection" },
  {
    label: "Gallery",
    dropdown: [
      { label: "Photos", href: "/gallery" },
      { label: "Videos", href: "/videos" },
    ],
  },
  { label: "Facilities", href: "/facilities" },
  { label: "Mandatory Disclosure", href: "/mandatoryDisclouser" },
  { label: "Contact Us", href: "/contactForm" },
];

// Social Icons
const SOCIAL_ICONS = [
  { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
  { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://youtube.com", icon: <FaYoutube />, label: "YouTube" },
  { href: "https://whatsapp.com", icon: <FaWhatsapp />, label: "Whatsapp" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverDropdown, setHoverDropdown] = useState(null);
  const [clickedDropdown, setClickedDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (index) => {
    setClickedDropdown(clickedDropdown === index ? null : index);
  };

  const closeDropdown = () => {
    if (clickedDropdown === null) setHoverDropdown(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white"
      }`}
    >
      {/* Top Social Bar */}
      <div className="hidden md:flex justify-end gap-4 px-6 py-1 text-white text-lg">
        {SOCIAL_ICONS.map((icon, i) => (
          <a
            key={i}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={icon.label}
            className="hover:text-blue-300 transition cursor-pointer"
          >
            {icon.icon}
          </a>
        ))}
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <img
              src="https://littleflowerschoolkhamaria.com/assets/img/logo.png"
              className="w-12 h-12"
              alt="logo"
            />
          </Link>
          <span
            className={`font-extrabold text-2xl hidden sm:block ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Little Flower School
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item, index) => {
            const isOpenDropdown =
              hoverDropdown === index || clickedDropdown === index;
            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoverDropdown(index)}
                onMouseLeave={closeDropdown}
              >
                <button
                  onClick={() => toggleDropdown(index)}
                  className={`flex items-center gap-1 text-sm font-medium transition ${
                    scrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white hover:text-yellow-300"
                  }`}
                >
                  {item.href ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    item.label
                  )}
                  {item.dropdown && <ChevronDown size={16} />}
                </button>

                {/* Dropdown */}
                {item.dropdown && (
                  <AnimatePresence>
                    {isOpenDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden min-w-[200px]"
                      >
                        {item.dropdown.map((sub, i) => (
                          <Link
                            key={i}
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Register Button */}
          <Link
            href="/registerForm"
            className="hidden sm:flex px-5 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition cursor-pointer"
          >
            Register Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col gap-4"
          >
            {NAV_ITEMS.map((item, index) => (
              <div key={index}>
                <div
                  onClick={() => toggleDropdown(index)}
                  className="flex justify-between items-center text-lg font-medium text-gray-800 cursor-pointer"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown size={18} />}
                </div>

                {item.dropdown &&
                  clickedDropdown === index &&
                  item.dropdown.map((sub, i) => (
                    <Link
                      key={i}
                      href={sub.href}
                      className="block pl-4 py-1 text-gray-600"
                    >
                      {sub.label}
                    </Link>
                  ))}
              </div>
            ))}

            {/* Mobile Social Icons */}
            <div className="flex gap-4 mt-2">
              {SOCIAL_ICONS.map((icon, i) => (
                <a
                  key={i}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon.label}
                  className="text-gray-800 hover:text-blue-600 transition text-xl cursor-pointer"
                >
                  {icon.icon}
                </a>
              ))}
            </div>

            <button className="w-full py-3 bg-yellow-400 text-black rounded-md font-semibold cursor-pointer">
              Register Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
