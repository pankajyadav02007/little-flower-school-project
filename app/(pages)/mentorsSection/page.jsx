"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const MENTOR_MESSAGES = [
  {
    id: 1,
    name: "Sandeep Kumar MAURYA",
    title: "Principal",
    school: "Little Flower School",
    image: "https://littleflowerschoolkhamaria.com/assets/img/gallery/20.png",
    message:
      "At Little Flower, we believe that education is a journey of the heart and mind. Our goal is to nurture students not just academically, but also morally and emotionally, helping them grow into responsible, compassionate, and confident individuals. With a dedicated team and a supportive environment, we strive to provide every child with the tools they need to succeed in life and contribute meaningfully to the world around them.",
  },
  {
    id: 2,
    name: "Founder Sir",
    school: "Late Shalik Ram Maurya, Little Flower School",
    image: "https://littleflowerschoolkhamaria.com/assets/img/Founder.jpeg",
    message:
      "As the Founder of Little Flower School, it fills my heart with immense joy to see the vision with which this institution was started come to life each day. This school was established with the dream of creating a place where children are not only educated but are also inspired to become kind, capable, and conscientious citizens. I believe that true education nurtures the mind, heart, and spirit, and at Little Flower, we strive to uphold these values in all we do. Let us continue this journey with faith, dedication, and a shared commitment to excellence.",
  },
  {
    id: 3,
    name: "Sachin Kumar Maurya",
    title: "Chairman Sir",
    school: "Little Flower School",
    image:
      "https://littleflowerschoolkhamaria.com/assets/img/gallery/Chairman.jpg",
    message:
      "It is with great pride and joy that I extend my warmest greetings to all of you at Little Flower School. As Chairman, I am deeply committed to fostering an environment where every child is encouraged to grow with confidence, curiosity, and compassion. Our school stands as a beacon of learning and moral values, nurturing not only academic excellence but also the character and creativity of each student. Let us continue to work together—teachers, parents, and students—to uphold the legacy of Little Flower and shape a bright future for all.",
  },
];

const MentorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MENTOR_MESSAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % MENTOR_MESSAGES.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + MENTOR_MESSAGES.length) % MENTOR_MESSAGES.length,
    );
  };

  const mentor = MENTOR_MESSAGES[currentIndex];

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-blue-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-900 mb-4 tracking-widest uppercase"
          >
            Message From Mentors
          </motion.h2>
        </div>

        <div className="relative flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={mentor.id}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="bg-blue-900 rounded-3xl overflow-hidden shadow-xl border border-blue-800 w-full sm:max-w-[98%] md:max-w-full"
            >
              <div className="flex flex-col md:flex-row items-center">
                {/* Image Side */}
                <div className="w-full md:w-1/3 p-4 md:p-6 flex justify-center">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-lg border-2 border-white"
                  />
                </div>

                {/* Text Side */}
                <div className="w-full md:w-2/3 p-4 sm:p-6 md:p-8 flex flex-col justify-center text-white">
                  <h3 className="text-lg sm:text-xl md:text-4xl font-bold mb-1 sm:mb-2">
                    {mentor.name}
                  </h3>
                  {mentor.title && (
                    <p className="text-white/90 text-sm sm:text-base font-medium mb-1">
                      {mentor.title}
                    </p>
                  )}
                  <p className="text-white/80 text-sm sm:text-base mb-2">
                    {mentor.school}
                  </p>
                  <p className="text-white/80 leading-relaxed text-sm sm:text-base md:text-xl italic">
                    {mentor.message}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-6 md:mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-900 hover:bg-blue-300 transition-colors shadow-md"
          >
            <ChevronLeft size={20} sm={24} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-900 hover:bg-blue-300 transition-colors shadow-md"
          >
            <ChevronRight size={20} sm={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
