"use client";

import { motion } from "framer-motion";
import Link from "next/link";
const QuoteSection = () => {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden border-y border-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left: Quote */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="space-y-6"
        >
          <div className="relative">
            <span className="text-6xl text-gray-200 absolute -top-8 -left-8 font-serif">
              “
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight relative z-10">
              One child, one teacher, one book, and one pen can change the
              world.
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-2xl">🖋️</div>
            <p className="font-script text-3xl text-[#008CBA] ml-4">
              - Malala Yousafzai
            </p>
          </div>
        </motion.div>

        {/* Right: Logo/Crest */}
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
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 flex items-center justify-center">
            \
            <Link href={"/"}>
              <img
                src="https://littleflowerschoolkhamaria.com/assets/img/logo.png"
                className="w-52 h-52"
                alt="logo"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
