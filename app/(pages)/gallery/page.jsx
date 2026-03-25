"use client";
import React, { useState } from "react";
import {
  Home,
  ChevronRight,
  Maximize2,
  X,
  Camera,
  Filter,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GALLERY_IMAGES = [
  {
    id: 1,
    src: "https://scontent-del3-2.xx.fbcdn.net/v/t39.30808-6/473553205_1562836541028945_104472093856784541_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=vhncnCYuqQcQ7kNvwEwT30D&_nc_oc=Adq2G4jqHuDP0af70OuzSO-9Rhjaddl4jJNo5RH2wwA5zVqZjy0m-DmRTOcmDjC9PpI7VBaKTFIjrBayvtENCjQK&_nc_zt=23&_nc_ht=scontent-del3-2.xx&_nc_gid=V1b3gD2HvZIsIj85Fwfr4w&_nc_ss=7a32e&oh=00_AfxyVSJlZnZSBCP0-qk7rrgRqc1jAh-YWLOnYeRzR-4TXg&oe=69C961A0",
    title: "Classroom Learning",
    category: "Academic",
    size: "large",
  },
  {
    id: 2,
    src: "https://scontent-del3-2.xx.fbcdn.net/v/t39.30808-6/473603915_1562836207695645_5119108008862565920_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=tV1HLwXAHoAQ7kNvwHfCqer&_nc_oc=Adr2PvpMJ7P_OYg4COKnEUC4qUYXz_gPSi6pzFPG0tWcQ-latoY22T377bQVXcHz-zEoXfEWmSWyulY2zbGTquvM&_nc_zt=23&_nc_ht=scontent-del3-2.xx&_nc_gid=YATDBndpI_-8S2D0865cmg&_nc_ss=7a32e&oh=00_AfxTTMcVOh-pRD3FPhM9_XSnEyylomop3lzLO8wvAto8pg&oe=69C99661",
    title: "Sports Day",
    category: "Sports",
    size: "wide",
  },
  {
    id: 3,
    src: "https://scontent-del3-2.xx.fbcdn.net/v/t39.30808-6/473048277_1562836197695646_548716894514734269_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Q8FGgfpdDA8Q7kNvwFhEmo1&_nc_oc=Adr34i8sXwFds3JMUk0GEd5LDurIy_bR8x_h2oe13RPSiDjlvVJG9eKi1G8_3RV1W2q9LVCZBHinnCKsUpn1rwhG&_nc_zt=23&_nc_ht=scontent-del3-2.xx&_nc_gid=5rDA1__VwaFsgEEvm9hI_Q&_nc_ss=7a32e&oh=00_Afw9TcbobnAtxQkAEBu4OMK_3KXWudF_IYL1HivwlEgBiQ&oe=69C996A2",
    title: "Graduation Ceremony",
    category: "Events",
    size: "small",
  },
  {
    id: 4,
    src: "https://scontent-del3-2.xx.fbcdn.net/v/t1.6435-9/82979047_509792169666726_753732963350347776_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=2FZndH0V8K0Q7kNvwHoMndA&_nc_oc=Adrh4piQi0uSTRcfmmIAWBRiMN0V5MmbwsnovOicehXIph4kDBOE9r2Os-ioAz0W0bSkf1KkxrzvSUX6mK_G0iG3&_nc_zt=23&_nc_ht=scontent-del3-2.xx&_nc_gid=okmGXNrBjDbCRC22zjPB_Q&_nc_ss=7a32e&oh=00_AfzHzkTt8X6J74uRxFUdi8d3WOuKb1PXlRJ-P5QcjWaqlw&oe=69EB26DD",
    title: "Library Session",
    category: "Academic",
    size: "small",
  },
  {
    id: 5,
    src: "https://scontent-del3-1.xx.fbcdn.net/v/t1.6435-9/52605857_321215145191097_3523686187199889408_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=BDWKQzACIX4Q7kNvwFikdXu&_nc_oc=AdqGoLgWhhjE3xqnBAb_sKeJdi2DquAy7AhQZn_Xksh1hCPWCCjB-vkXfPCsoUSqa8L7IA_OKsemhcqypp_K0x2-&_nc_zt=23&_nc_ht=scontent-del3-1.xx&_nc_gid=m8yp7M3tbzIp57ENhRnbVg&_nc_ss=7a32e&oh=00_AfwkSmCi-RGjzJS_urJrBLXMgP6I7ybA3IL1YR_vDRfqcg&oe=69EB0FAE",
    title: "Art & Craft",
    category: "Creative",
    size: "small",
  },
  {
    id: 6,
    src: "https://scontent-del2-3.xx.fbcdn.net/v/t1.6435-9/80900904_488718328440777_5812781800371519488_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=i0KbAB-kbxoQ7kNvwH39USt&_nc_oc=AdrZBp33ONRThFFOHlN8E0GybuAysorQ1q9Hf1scotq9JNWEgVaI6zJBK93NmXqASmZW6E7kU4esIqYChCZP8_OM&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=_72sj3J-RyvnLTOYlO6Uiw&_nc_ss=7a32e&oh=00_AfxipcYGwanYMo1VBFKPws-FDEkX4Ivmr0vpEmJZxI5PXQ&oe=69EB2721",
    title: "Outdoor Play",
    category: "Sports",
    size: "wide",
  },
  {
    id: 7,
    src: "https://scontent-del3-1.xx.fbcdn.net/v/t1.6435-9/80434660_488718115107465_2790267349712764928_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=arEd6IcfM4UQ7kNvwExPwcf&_nc_oc=AdpG1iopyJnCyEwefZVsJ54ELK_xPnEBnF4VJtBdIUTw8z3jq5ItRQAEMSPGuLIbiAkRmOA-F15h7jU5F6PGr68O&_nc_zt=23&_nc_ht=scontent-del3-1.xx&_nc_gid=MhwcRrgfTIXmKIh370VzDg&_nc_ss=7a32e&oh=00_AfzYeYh21NlrdOKuguZppd1GXcwOjmlRMYwgQIjC-ahRzQ&oe=69EB0ECD",
    title: "Science Lab",
    category: "Academic",
    size: "large",
  },
  {
    id: 8,
    src: "https://scontent-del2-3.xx.fbcdn.net/v/t1.6435-9/73504911_443400809639196_6953988017174347776_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=rtpL2qiPDUYQ7kNvwEfmnRc&_nc_oc=Adpslfye_Lgwl0hxr5BCVjpEwSqbR8sgWMYFBYI06L-kIRNY101fQQWWBCsgx-o2IomrMKUfVTWQ--upAKKrDpn2&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=dv7nT0Mt9svQiyKzXhYIag&_nc_ss=7a32e&oh=00_AfxMS2HQV2iHHbjz0iaA3FlUQfFoxxVy7rm--K4-EogX4g&oe=69EB2DA1",
    title: "School Campus",
    category: "Campus",
    size: "small",
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

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredImages =
    filter === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === filter);

  const prevImage = () => {
    if (!filteredImages.length) return;
    setSelectedIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1,
    );
  };

  const nextImage = () => {
    if (!filteredImages.length) return;
    setSelectedIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Breadcrumb */}
      <nav className="bg-zinc-200/50 border-b border-zinc-300">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-2 text-sm text-zinc-600">
          <Home size={14} className="text-zinc-500" />
          <ChevronRight size={14} className="text-zinc-400" />
          <span className="font-medium">Gallery</span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Heading + Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 text-blue-600 mb-2">
              <Camera size={24} />
              <span className="text-sm font-bold uppercase tracking-widest">
                Our Memories
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
              School <span className="text-blue-600">Gallery</span>
            </h1>
            <div className="h-1.5 w-32 bg-blue-600 mt-4 rounded-full" />
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-2"
          >
            <div className="flex items-center gap-2 px-3 py-2 text-zinc-400 mr-2">
              <Filter size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">
                Filter:
              </span>
            </div>
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

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[150px] md:auto-rows-[200px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                className={`relative group cursor-pointer rounded-3xl overflow-hidden border-4 border-white shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  img.size === "large"
                    ? "col-span-2 row-span-2"
                    : img.size === "wide"
                      ? "col-span-2 md:col-span-3 row-span-2"
                      : "col-span-1 row-span-1 md:row-span-1 lg:row-span-1"
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-1">
                        {img.category}
                      </p>
                      <h3 className="text-white font-bold text-lg leading-tight">
                        {img.title}
                      </h3>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl text-white">
                      <Maximize2 size={18} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-zinc-400 text-lg">
              No images found in this category.
            </p>
          </div>
        )}
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 bg-white/10 rounded-full"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={prevImage}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition"
              >
                <ChevronLeft size={28} />
              </button>

              <img
                src={filteredImages[selectedIndex].src}
                alt={filteredImages[selectedIndex].title}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border-4 border-white/10"
              />

              <button
                onClick={nextImage}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition"
              >
                <ChevronRightIcon size={28} />
              </button>

              <div className="absolute bottom-6 text-center w-full px-4">
                <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-2">
                  {filteredImages[selectedIndex].category}
                </p>
                <h2 className="text-white text-3xl font-bold">
                  {filteredImages[selectedIndex].title}
                </h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-2 bg-gradient-to-r from-blue-600 via-yellow-400 to-blue-600" />
    </div>
  );
};

export default Gallery;
