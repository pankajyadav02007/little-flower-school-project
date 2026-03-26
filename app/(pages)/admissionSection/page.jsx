"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const AdmissionSection = () => {
  return (
    <section className="md:py-24 px-2 md:px-6 bg-gradient-to-b from-white to-green-50/30 relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-yellow-200 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-black text-blue-900 mb-4 tracking-widest uppercase"
          >
            Apply For Admission
          </motion.h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-24 bg-gray-300" />
            <div className="text-blue-400">
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
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg"
          >
            Admission to Little Flower School is based on merit. The student has
            to clear the entrance test and the interview rounds. The entrance
            test is based on syllabus of previous grade to which the student is
            seeking admission. Only meritorious students who clear all the
            rounds are eligible for admission to the institution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Admission Form (Slides from Left) */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="bg-blue-900 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group"
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <h3 className="md:text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Fill the Information below
            </h3>

            <form className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-2 md:px-6 py-2 md:py-4 bg-white rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all shadow-inner"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full px-2 md:px-6 py-2 md:py-4 bg-white rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all shadow-inner"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-2 md:px-6 py-2 md:py-4 bg-white rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all shadow-inner"
                />
              </div>
              <div className="relative">
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-2 md:px-6 py-2 md:py-4 bg-white rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all shadow-inner resize-none"
                />
              </div>
              <div className="flex justify-center pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[rgb(4,146,137)] cursor-pointer text-white px-6 md:px-12 py-2 md:py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition-colors shadow-xl"
                >
                  Apply Now
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Right: Image with Frame (Slides from Right) */}
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
            {/* Yellow Decorative Frame */}
            <div className="absolute -inset-4 md:border-[8px] border-blue-900 rounded-[2.5rem] pointer-events-none z-0" />

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl z-10 border-4 border-white">
              <img
                src="https://littleflowerschoolkhamaria.com/assets/img/gallery/16.png"
                alt="Students"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Leaf Icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 w-20 h-20 text-green-600 z-20 drop-shadow-lg"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
