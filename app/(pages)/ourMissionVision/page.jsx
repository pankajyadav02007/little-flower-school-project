"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Home,
  ChevronRight,
  Eye,
  Target,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

// rest of your code...

const MessionVision = () => {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Breadcrumb */}
      <nav className="bg-zinc-200/50 border-b border-zinc-300">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-2 text-sm text-zinc-600">
          <Home size={14} className="text-zinc-500" />
          <ChevronRight size={14} className="text-zinc-400" />
          <span className="font-medium">Our Mission & Vision</span>
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
            Our Mission & Vision
          </h1>
          <div className="h-1 w-48 bg-yellow-400 mt-2 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Image Card (Pop up from left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Decorative background element */}
              <div className="absolute -inset-6 bg-blue-600/10 rounded-[3rem] -z-10 blur-3xl group-hover:bg-blue-600/20 transition-colors duration-500" />

              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white transform transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src="https://scontent-del3-2.xx.fbcdn.net/v/t1.6435-9/46485392_284657408846871_440148978638520320_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=OhEtThaVj1gQ7kNvwGNAt5t&_nc_oc=Adp8mF92jFxyWmfVxZm13l5PrtEgXOgWQqc9bQqhGyKL0sp85dUsxe1D6uJJtkjlb0cRCZevrrvR_rOEgkpDCDhx&_nc_zt=23&_nc_ht=scontent-del3-2.xx&_nc_gid=Zu9bB2MXovYGmd82M9P3Ag&_nc_ss=7a32e&oh=00_Afxm6jrAKE-gEGq1wvoQxXic4Mp6e746hFnqebm0DuAICw&oe=69EB15F3"
                  alt="Students Collaboration"
                  className="w-full h-full object-cover aspect-[4/5]"
                  referrerPolicy="no-referrer"
                />

                {/* Overlay with subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-transparent" />

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50"
                >
                  <Lightbulb className="text-yellow-500 w-8 h-8" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Mission & Vision Content (Pop up from right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.3,
              delay: 0.2,
            }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Vision Card */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-zinc-100 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -mr-12 -mt-12 blur-2xl opacity-50 group-hover:bg-blue-100 transition-colors" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg text-white">
                    <Eye size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-zinc-800">
                    Our Vision
                  </h2>
                </div>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  To nurture young minds into confident, compassionate, and
                  responsible individuals who lead with integrity, creativity,
                  and a lifelong love for learning.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-zinc-100 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-50 rounded-full -mr-12 -mt-12 blur-2xl opacity-50 group-hover:bg-yellow-100 transition-colors" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-400 rounded-lg text-blue-900">
                    <Target size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-zinc-800">
                    Our Mission
                  </h2>
                </div>
                <div className="space-y-4 text-zinc-600 text-lg leading-relaxed">
                  <p>
                    To provide a safe, inclusive, and inspiring environment
                    where every child feels valued and encouraged to grow. To
                    deliver quality education that blends academic excellence
                    with moral and cultural values.
                  </p>
                  <p>
                    To promote curiosity, creativity, and critical thinking
                    through innovative teaching methods. To foster a sense of
                    responsibility, discipline, and respect for others. To
                    partner with parents and the community in shaping
                    well-rounded future leaders.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values List */}
            <div className="flex flex-wrap gap-3">
              {[
                "Integrity",
                "Creativity",
                "Compassion",
                "Excellence",
                "Responsibility",
              ].map((value, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-zinc-100 px-4 py-2 rounded-full text-zinc-700 text-sm font-bold border border-zinc-200"
                >
                  <CheckCircle2 size={14} className="text-blue-600" />
                  {value}
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

export default MessionVision;
