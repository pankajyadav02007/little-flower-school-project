"use client";

import React from "react";
import { Home, ChevronRight, Quote, School } from "lucide-react";
import { motion } from "framer-motion";

const ManagerMsg = () => {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Breadcrumb */}
      <nav className="bg-zinc-200/50 border-b border-zinc-300">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-2 text-sm text-zinc-600">
          <Home size={14} className="text-zinc-500" />
          <ChevronRight size={14} className="text-zinc-400" />
          <span className="font-medium">Manager Message</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 tracking-tight uppercase">
            Manager Message
          </h1>
          <div className="h-1 w-48 bg-yellow-400 mt-2 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
            className="lg:col-span-5 group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white aspect-[4/5]">
              <img
                src="	https://littleflowerschoolkhamaria.com/assets/img/gallery/28.jpg"
                alt="Principal"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.target.src =
                    "https://picsum.photos/seed/principal/800/1000";
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-medium text-lg">
                  Sandeep Maurya, Principal
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Message Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              type: "spring",
              bounce: 0.4,
              delay: 0.2,
            }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-zinc-100 relative">
              <Quote className="absolute top-6 right-8 text-blue-100 w-16 h-16 -z-0" />

              <div className="relative z-10">
                <p className="text-lg md:text-xl text-zinc-700 leading-relaxed font-light italic mb-8">
                  At Little Flower, we believe that education is a journey of
                  the heart and mind. Our goal is to nurture students not just
                  academically, but also morally and emotionally, helping them
                  grow into responsible, compassionate, and confident
                  individuals.
                </p>

                <div className="space-y-4 text-zinc-600 leading-relaxed">
                  <p>
                    With a dedicated team and a supportive environment, we
                    strive to provide every child with the tools they need to
                    succeed in life and contribute meaningfully to the world
                    around them.
                  </p>
                  <p>
                    We focus on holistic development, ensuring that our students
                    are prepared for the challenges of the 21st century while
                    remaining grounded in their values and culture. Our
                    curriculum is designed to spark curiosity and foster a
                    lifelong love for learning.
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-zinc-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-zinc-900 text-lg">
                      Sandeep Maurya
                    </h4>
                    <p className="text-blue-600 font-medium text-sm">
                      Manager, Little Flower School
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Signature_of_Zuzana_Čaputová.svg/1200px-Signature_of_Zuzana_Čaputová.svg.png"
                      alt="Signature"
                      className="h-12 opacity-40 grayscale"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats/Highlights */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Experience", value: "25+ Yrs" },
                { label: "Students", value: "2000+" },
                { label: "Awards", value: "15+" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-blue-600 p-4 rounded-2xl text-center text-white shadow-lg shadow-blue-200"
                >
                  <p className="text-xs opacity-80 uppercase font-bold tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-xl font-bold">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer Decoration */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-yellow-400 to-blue-600" />
    </div>
  );
};

export default ManagerMsg;
