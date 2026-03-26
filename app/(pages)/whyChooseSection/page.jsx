"use client";
import React from "react";
import { motion } from "framer-motion";

const WhyChooseSection = () => {
  return (
    <section className="px-2 md:px-6 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <motion.div
        initial={{ x: 100, opacity: 0, rotate: 45 }}
        whileInView={{ x: 0, opacity: 0.1, rotate: 0 }}
        viewport={{ once: true }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-64 bg-purple-600 rounded-l-full blur-2xl pointer-events-none"
      />
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.1 }}
        viewport={{ once: true }}
        className="absolute left-10 top-20 w-24 h-24 text-green-600 pointer-events-none"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-black text-blue-900 mb-4 tracking-widest uppercase"
          >
            Why Choose Little Flower?
          </motion.h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-24 bg-gray-300" />
            <div className="text-green-600">
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Framed Image (Slides from Left) */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative order-2 lg:order-1"
          >
            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-t-4 border-l-4 border-yellow-400 pointer-events-none z-10" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-b-4 border-r-4 border-[#008CBA] pointer-events-none z-10" />

            <div className="relative rounded-lg overflow-hidden shadow-2xl z-0">
              <img
                src="https://scontent-del3-1.xx.fbcdn.net/v/t1.6435-9/48425563_300245170621428_4552418033838063616_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=cmF0piOHb1UQ7kNvwF0Vz0u&_nc_oc=AdpGthFQEcVeuw3NPIZ2bZAr9v_QkY96pWkxv_ZohXcGB4iJMpBjlmIf-yW3UcUPQD8Oe-yUc0XGiDrWpqm5WW2Q&_nc_zt=23&_nc_ht=scontent-del3-1.xx&_nc_gid=5aHwSQYUSL3QVwFCOXYPjQ&_nc_ss=7a32e&oh=00_Afz0tHOzr0LH6NbVXRneuaVuLvtkBGjordstS3EKrw5wXQ&oe=69EAF2BC"
                alt="Why Choose Us"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right Side: Text Content (Slides from Right) */}
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
            className="space-y-6 order-1 lg:order-2"
          >
            <p className="text-gray-600 leading-relaxed text-lg">
              Choosing Little Flower means choosing a place where care,
              commitment, and character come together to create something truly
              meaningful. We believe that every child and individual has unique
              potential, and our mission is to nurture that potential with
              dedication, compassion, and excellence. At Little Flower, learning
              goes beyond textbooks—its about shaping confident, kind-hearted,
              and capable individuals ready to face the world with courage and
              grace.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              What truly sets us apart is our personalized approach, supportive
              environment, and a strong foundation in values that guide
              everything we do. Whether its through quality education, emotional
              support, or community-based programs, we work tirelessly to ensure
              that each person feels safe, inspired, and empowered. Our
              passionate team, rich heritage, and focus on holistic development
              make Little Flower more than just an institution—its a second
              home, a place where dreams are nurtured and lifelong values are
              planted.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg italic font-medium">
              When you choose Little Flower, you join a caring community that
              walks with you every step of the way—celebrating progress,
              embracing challenges, and building a future full of hope.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
