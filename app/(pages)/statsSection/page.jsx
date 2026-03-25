"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

// ✅ Stats Data add karo
const STATS = [
  { label: "Students", value: "1200+" },
  { label: "Teachers", value: "75+" },
  { label: "Classrooms", value: "40+" },
  { label: "Awards", value: "25+" },
];

const StatsSection = () => {
  return (
    <section className="bg-blue-900 py-16 px-6 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white/10 rotate-45" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 text-white">
          <GraduationCap size={48} className="mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">
            School Statistics at a Glance!
          </h2>
          <p className="opacity-80">Top Ranked Private School</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center text-white"
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm opacity-80 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
