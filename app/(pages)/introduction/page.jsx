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
  Sparkles,
  BookOpen,
  Users,
} from "lucide-react";

// rest of your code...

const Introductions = () => {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Breadcrumb */}
      <nav className="bg-zinc-200/50 border-b border-zinc-300">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-2 text-sm text-zinc-600">
          <Home size={14} className="text-zinc-500" />
          <ChevronRight size={14} className="text-zinc-400" />
          <span className="font-medium">Introduction</span>
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
            Introduction
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
              <div className="absolute -inset-4 bg-blue-600/5 rounded-3xl -z-10 blur-2xl group-hover:bg-blue-600/10 transition-colors duration-500" />

              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-8 border-white transform transition-transform duration-500 hover:-rotate-1">
                <img
                  src="https://scontent-del3-1.xx.fbcdn.net/v/t39.30808-6/480184928_1585593278753271_1073669256010683587_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=53a332&_nc_ohc=qnmq0TvBGpcQ7kNvwFAFSpR&_nc_oc=AdpzoRAXCmU9hkX9Jy_c8RL8kipHxH1o6stHWQBbvPePkA0_dOvRyaE6m6Vq-eTmYVOjfH4KwcKvfYhEqH4iJRLa&_nc_zt=23&_nc_ht=scontent-del3-1.xx&_nc_gid=7MDz-9hN-sJJaf7pPbHxmQ&_nc_ss=7a32e&oh=00_Afy1vSqPvnO5fh-38UBAXokoXN9CGg9rdd2aJ5TWwJYDXg&oe=69C9920A"
                  alt="School Building"
                  className="w-full h-full object-cover aspect-[4/5] md:aspect-square lg:aspect-[4/5]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />

                {/* Floating Badge */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-400 p-2 rounded-lg">
                      <Sparkles size={20} className="text-blue-900" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-blue-900 uppercase tracking-tighter">
                        Excellence in Education
                      </p>
                      <p className="text-[10px] text-zinc-500">Est. 1995</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Message Content (Pop up from right) */}
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
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-zinc-100 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 blur-3xl opacity-50" />

              <div className="relative z-10 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 leading-tight">
                  Welcome to{" "}
                  <span className="text-blue-600">Little Flower School</span>{" "}
                  where every child blossoms.
                </h2>

                <div className="space-y-4 text-zinc-600 text-lg leading-relaxed">
                  <p>
                    Established with a vision to nurture young minds, Little
                    Flower School is a place where learning goes beyond books.
                    We are committed to providing a safe, joyful, and
                    intellectually stimulating environment that encourages
                    students to grow academically, socially, and emotionally.
                  </p>
                  <p>
                    Our experienced and caring educators focus on holistic
                    development through innovative teaching methods,
                    co-curricular activities, and a strong moral foundation. At
                    Little Flower School, we believe in inspiring every child to
                    discover their full potential and become confident,
                    responsible citizens of tomorrow.
                  </p>
                  <p className="font-medium text-blue-600 italic">
                    Join us in shaping the future—one little flower at a time.
                  </p>
                </div>

                {/* Feature Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-zinc-100">
                  {[
                    {
                      icon: BookOpen,
                      label: "Quality Education",
                      color: "bg-blue-50 text-blue-600",
                    },
                    {
                      icon: Users,
                      label: "Expert Faculty",
                      color: "bg-yellow-50 text-yellow-600",
                    },
                    {
                      icon: Target,
                      label: "Holistic Growth",
                      color: "bg-green-50 text-green-600",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-50 transition-colors"
                    >
                      <div className={`p-2 rounded-lg ${item.color}`}>
                        <item.icon size={18} />
                      </div>
                      <span className="text-sm font-bold text-zinc-700">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer Decoration */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-yellow-400 to-blue-600" />
    </div>
  );
};

export default Introductions;
