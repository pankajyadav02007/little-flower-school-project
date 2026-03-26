"use client";
import React from "react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Meera Kapoor",
      role: "Parent of Ananya, Grade 6",
      quote:
        "Little Flower has been a transformative place for our daughter. The balance between academics and character development is exactly what we hoped for. She's more confident and curious than ever before.",
      stars: 5,
    },
    {
      name: "Rajiv Nair",
      role: "Parent of Kabir, Grade 4",
      quote:
        "We are truly impressed with the school's commitment to each child's growth. The staff is approachable, and the environment is both disciplined and joyful. Our son looks forward to school every day!",
      stars: 5,
    },
    {
      name: "Priya Deshmukh",
      role: "Parent of Rhea, Grade 2",
      quote:
        "From the first day, we knew we made the right choice. Little Flower provides not only excellent academics but also a warm and caring atmosphere that makes learning exciting and meaningful.",
      stars: 5,
    },
  ];

  return (
    <section className=" py-12 md:py-24 px-6 bg-blue-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -45, 0],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-300 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          >
            Testimonials
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className=" text-2xl md:text-4xl font-black text-blue-900 mb-4 tracking-tight"
          >
            Voices of Our Community
          </motion.h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-24 bg-blue-300" />
            <div className="text-blue-600">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
              </svg>
            </div>
            <div className="h-[1px] w-24 bg-blue-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10 }}
              className="bg-blue-900 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-200/50 border border-blue-800 flex flex-col group transition-all duration-500"
            >
              <div className="p-4 md:p-10 flex-grow relative">
                {/* Quote Icon */}
                <div className="mb-6 text-white group-hover:scale-110 transition-transform duration-500">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3H21.017C21.5693 3 22.017 3.44772 22.017 4V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C8.55228 16 9 15.5523 9 15V9C9 8.44772 8.55228 8 8 8H5C3.89543 8 3 7.10457 3 6V3H10C10.5523 3 11 3.44772 11 4V15C11 18.3137 8.31371 21 5 21H3Z" />
                  </svg>
                </div>

                <p className="text-blue-100 leading-relaxed text-lg mb-8 italic">
                  {t.quote}
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-2">
                  {[...Array(t.stars)].map((_, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + index * 0.1 }}
                      className="text-yellow-400 text-xl"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="bg-blue-800/50 p-8 border-t border-blue-700">
                <h4 className="text-xl font-bold text-white mb-1">{t.name}</h4>
                <p className="text-blue-200 text-sm font-medium">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Pagination Dot (Visual only) */}
        <div className="flex justify-center mt-12">
          <div className="w-2 h-2 bg-blue-900 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
