"use client";
import React from "react";
import {
  Home,
  ChevronRight,
  Play,
  X,
  Video,
  Filter,
  Film,
  Info,
  Calendar,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const VIDEO_GALLERY = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1523050335392-9bf5674293ce",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Annual Day Highlights 2025",
    category: "Events",
    duration: "05:20",
    gridClass: "col-span-2 row-span-3", // Large Vertical (Top Left)
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Campus Tour: A Glimpse of Our School",
    category: "Campus",
    duration: "03:45",
    gridClass: "col-span-3 row-span-3", // Large Horizontal (Top Middle)
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Inter-School Sports Meet",
    category: "Sports",
    duration: "04:10",
    gridClass: "col-span-1 row-span-1", // Small (Top Right 1)
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Innovative Science Projects",
    category: "Academic",
    duration: "02:30",
    gridClass: "col-span-1 row-span-2", // Small (Top Right 2)
  },
  {
    id: 5,
    thumbnail: "https://images.unsplash.com/photo-1511629091441-ee46146481b6",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Art & Craft Exhibition",
    category: "Creative",
    duration: "03:15",
    gridClass: "col-span-1 row-span-1", // Bottom Left
  },
  {
    id: 6,
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Morning Assembly & Values",
    category: "Daily Life",
    duration: "02:50",
    gridClass: "col-span-3 row-span-2", // Bottom Middle
  },
  {
    id: 7,
    thumbnail: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Robotics Workshop 2024",
    category: "Academic",
    duration: "06:00",
    gridClass: "col-span-2 row-span-2", // Bottom Right
  },
];

const CATEGORIES = [
  "All",
  "Academic",
  "Sports",
  "Events",
  "Creative",
  "Campus",
];

const Videos = () => {
  const [filter, setFilter] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showStatus, setShowStatus] = useState(true);

  const filteredVideos =
    filter === "All"
      ? VIDEO_GALLERY
      : VIDEO_GALLERY.filter((v) => v.category === filter);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* Breadcrumb */}
      <nav className="bg-zinc-200/50 border-b border-zinc-300">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-2 text-sm text-zinc-600">
          <Home size={14} className="text-zinc-500" />
          <ChevronRight size={14} className="text-zinc-400" />
          <span className="font-medium">Video Gallery</span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12 md:py-16 relative">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 text-blue-600 mb-2">
              <Film size={24} />
              <span className="text-sm font-bold uppercase tracking-widest">
                Visual Journey
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
              School <span className="text-blue-600">Video</span> Gallery
            </h1>
            <div className="h-1.5 w-32 bg-yellow-400 mt-4 rounded-full" />
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-2"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "bg-white text-zinc-500 hover:bg-zinc-100 border border-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Bento Grid Gallery */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-[120px] md:auto-rows-[160px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${video.gridClass}`}
                onClick={() => setSelectedVideo(video)}
              >
                <img
                  src={`${video.thumbnail}?q=80&w=1200&auto=format&fit=crop`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-all duration-500">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-white/90 backdrop-blur-md p-3 rounded-full text-blue-600 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Play size={20} fill="currentColor" />
                  </motion.div>
                </div>

                {/* Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest">
                      {video.category}
                    </p>
                    <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded text-white font-mono">
                      {video.duration}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-sm leading-tight line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Floating Status Card (Matching Template Style) */}
        <AnimatePresence>
          {showStatus && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-40"
            >
              <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                    <Info size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      Admissions are open for 2025-26
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Availability:{" "}
                      <span className="text-blue-400 font-medium">
                        Limited Seats Now
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-6 py-2.5 bg-white text-zinc-900 font-bold rounded-full hover:bg-zinc-200 transition-colors text-sm">
                    Apply Now
                  </button>
                  <button
                    onClick={() => setShowStatus(false)}
                    className="p-2 text-zinc-500 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-zinc-950/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedVideo(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 bg-white/10 rounded-full z-50"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-w-5xl w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`${selectedVideo.videoUrl}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>

            <div className="absolute bottom-10 text-center pointer-events-none px-4">
              <p className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-2">
                {selectedVideo.category}
              </p>
              <h2 className="text-white text-2xl md:text-3xl font-bold max-w-2xl mx-auto leading-tight">
                {selectedVideo.title}
              </h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Decoration */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-yellow-400 to-blue-600" />
    </div>
  );
};

export default Videos;
