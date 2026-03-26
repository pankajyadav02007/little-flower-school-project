"use client";

import { Download, Eye } from "lucide-react";
import { motion } from "framer-motion";

// ✅ Announcements data
const ANNOUNCEMENTS = [
  {
    id: 1,
    title: "Academic Calendar 2024-2025 Released",
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting on March 30, 2026",
  },
  {
    id: 3,
    title: "Summer Camp Registration Open",
  },
];

const AnnouncementsSection = () => {
  return (
    <section className="py-12 md:py-20 px-6 bg-blue-50">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
            Announcements
          </h2>
          <p className="text-sm text-blue-700">
            For current academic year (July 2024 - June 2025)
          </p>
        </div>

        {/* Announcement Cards */}
        <div className="space-y-4">
          {ANNOUNCEMENTS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-blue-100 p-4 rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 border border-blue-200"
            >
              <span className="font-medium text-blue-900 text-center sm:text-left">
                {item.title}
              </span>

              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-bold hover:bg-blue-700 transition-colors cursor-pointer">
                  <Eye size={14} /> View
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-bold hover:bg-blue-700 transition-colors cursor-pointer">
                  <Download size={14} /> Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
