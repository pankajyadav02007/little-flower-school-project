"use client";
import React from "react";
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <motion.div
        initial={{ x: -100, opacity: 0, rotate: -45 }}
        whileInView={{ x: 0, opacity: 0.1, rotate: 0 }}
        viewport={{ once: true }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-64 bg-purple-600 rounded-r-full blur-2xl pointer-events-none"
      />
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.1 }}
        viewport={{ once: true }}
        className="absolute right-10 top-20 w-24 h-24 text-green-600 pointer-events-none"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-blue-900 mt-5 mb-4 tracking-widest uppercase"
          >
            About Little Flower School
          </motion.h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-24 bg-gray-300" />
            <div className="text-green-600">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
              </svg>
            </div>
            <div className="h-[1px] w-24 bg-gray-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="space-y-6"
          >
            <p className="text-gray-600 leading-relaxed text-lg">
              Little Flower is a nurturing community dedicated to fostering
              growth, compassion, and excellence in every individual. Rooted in
              strong values and a commitment to holistic development, we strive
              to create an environment where each person feels empowered to
              reach their full potential. Whether through education, care, or
              service, Little Flower stands as a symbol of hope, integrity, and
              lasting impact.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Little Flower, we celebrate diversity, encourage creativity,
              and emphasize the importance of community. We are committed to
              instilling values that inspire kindness, leadership, and a sense
              of purpose. Every initiative we undertake is driven by a deep
              respect for human dignity and a commitment to creating a more
              just, inclusive, and compassionate world.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#008CBA] text-white rounded-xl font-bold text-lg shadow-xl hover:bg-[#007ba3] transition-all"
            >
              Read More
            </motion.button>
          </motion.div>

          {/* Right Side: Framed Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2,
            }}
            className="relative"
          >
            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-t-4 border-l-4 border-yellow-400 pointer-events-none z-10" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-b-4 border-r-4 border-[#008CBA] pointer-events-none z-10" />

            <div className="relative rounded-lg overflow-hidden shadow-2xl z-0">
              <img
                src="https://scontent-del3-1.xx.fbcdn.net/v/t39.30808-6/480184928_1585593278753271_1073669256010683587_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=53a332&_nc_ohc=qnmq0TvBGpcQ7kNvwFAFSpR&_nc_oc=AdpzoRAXCmU9hkX9Jy_c8RL8kipHxH1o6stHWQBbvPePkA0_dOvRyaE6m6Vq-eTmYVOjfH4KwcKvfYhEqH4iJRLa&_nc_zt=23&_nc_ht=scontent-del3-1.xx&_nc_gid=B1dzlv5eNwctpxZ-LUJEAg&_nc_ss=7a32e&oh=00_AfxhR086Ec8_Z2xq7jgSdSnNKkiCuZj3A2Ufi8IW7xlBGg&oe=69C959CA"
                alt="About Little Flower school"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
