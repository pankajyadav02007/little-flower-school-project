"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

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

const SOCIAL_ICONS = [
  { href: "#", icon: <FaFacebookF /> },
  { href: "#", icon: <FaInstagram /> },
  { href: "#", icon: <FaYoutube /> },
  { href: "#", icon: <FaWhatsapp /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [clickedDropdown, setClickedDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (isOpen) setIsOpen(false); // Close drawer on scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const toggleDropdown = (i) => {
    setClickedDropdown(clickedDropdown === i ? null : i);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white"
      }`}
    >
      {/* Desktop Social Icons */}
      <div className="hidden md:flex justify-end gap-4 px-6 py-1 text-lg">
        {SOCIAL_ICONS.map((icon, i) => (
          <a
            key={i}
            href={icon.href}
            className={`transition-colors duration-300 ${
              scrolled
                ? "text-blue-500 hover:text-pink-500"
                : "text-white hover:text-yellow-300"
            }`}
          >
            {icon.icon}
          </a>
        ))}
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://littleflowerschoolkhamaria.com/assets/img/logo.png"
            className="w-12 h-12"
            alt="logo"
          />
          <span
            className={`hidden sm:block font-extrabold text-2xl ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Little Flower School
          </span>

          {/* Mobile stacked */}
          <div
            className={`sm:hidden flex flex-col leading-tight ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            <span className="font-bold text-sm">Little Flower</span>
            <span className="font-bold text-sm text-center">School</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item, i) => {
            const isOpenDrop = clickedDropdown === i;
            return (
              <div key={i} className="relative">
                <button
                  onClick={() => toggleDropdown(i)}
                  className={`flex items-center gap-1 text-sm font-medium ${
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

                {item.dropdown && isOpenDrop && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl min-w-[200px]">
                    {item.dropdown.map((sub, j) => (
                      <Link
                        key={j}
                        href={sub.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link href={"/registerForm"}>
            <User className="md:hidden" size={22} />
          </Link>

          <Link
            href="/registerForm"
            className="hidden sm:block px-5 py-2 bg-yellow-400 text-black rounded-full font-semibold"
          >
            Register Now
          </Link>
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              className="fixed top-0 left-0 w-72 h-full bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white z-50 p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between mb-4">
                  {/* Register Now Button at top */}
                  <div className="mb-4">
                    <Link
                      href="/registerForm"
                      className="w-full p-3 bg-yellow-400 text-black rounded-md font-semibold mt-4 text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      Register Now
                    </Link>
                  </div>
                  <X onClick={() => setIsOpen(false)} />
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 mb-4 text-xl">
                  {SOCIAL_ICONS.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      className="text-white hover:text-yellow-300"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>

                {/* Menu Items */}
                {NAV_ITEMS.map((item, i) => (
                  <div key={i}>
                    <div
                      className="flex justify-between py-2 text-white cursor-pointer"
                      onClick={() => toggleDropdown(i)}
                    >
                      {item.href ? (
                        <Link href={item.href} onClick={() => setIsOpen(false)}>
                          {item.label}
                        </Link>
                      ) : (
                        item.label
                      )}
                      {item.dropdown && <ChevronDown size={16} />}
                    </div>

                    {item.dropdown &&
                      clickedDropdown === i &&
                      item.dropdown.map((sub, j) => (
                        <Link
                          key={j}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block pl-4 py-1 text-gray-200 hover:text-yellow-300"
                        >
                          {sub.label}
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
