"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Carousel Data
const CAROUSEL_ITEMS = [
  {
    id: 1,
    title: "Modern Classrooms",
    description: "Smart learning environment with digital boards.",
    image:
      "https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/531520821_1204231028389788_8389759215347356354_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=9epToR4asDsQ7kNvwHavk9P&_nc_oc=Adri-113u9Tb9gXLsdmJNZr6uHtZe0HOk-p4RID9fhM1gPnT08-3JxJz32GdzisavOb1k8K5AQzHYD4gxdTgkZUU&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=DVxl82GrVhB_1oSZFXz7Vw&_nc_ss=7a32e&oh=00_Afz3hS_AYNfN86vpcSk2_7t6lKLfWiV2tKkKNf-JDEi9bg&oe=69C957BF",
  },
  {
    id: 2,
    title: "Sports Facilities",
    description: "Encouraging physical growth with sports.",
    image:
      "https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/505178624_1152541420225416_2719295324039215791_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=9ZcBW6sI_tQQ7kNvwHmwOil&_nc_oc=AdqndSuny3kdaGSl3X8KH7bian3bVHNG1eQbLp33yE68_zLWfYAJ6UqB1YiXRaBCGaJOlc-pesoU7xiDzoxz11je&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=te_Vo8biXj6Aw0LlmRfyTA&_nc_ss=7a32e&oh=00_Afz74u6gZjU3RTgbUjr5-B-YavM3WG46xu90h7lyo9vviQ&oe=69C96077",
  },
  {
    id: 3,
    title: "Library & Labs",
    description: "Well-equipped labs and library resources.",
    image:
      "https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/482089827_1074185194727706_5864353490140140062_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=cj4oVhVLNC4Q7kNvwHfEqvH&_nc_oc=AdriV5qZXAt6E5YlDsAn9j6no2ThnIqqbrn7uMGbPZQG5iMByeG3XnII4X3fsTtfJbDMKSrSjWTd_bbZqSHyJw3G&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=IP4LvlmBaezBgvs9dr3zvQ&_nc_ss=7a32e&oh=00_AfxgojFbmDbnlttNNJshPKD1PixLmQWMTPUB6kZl1YhAVw&oe=69C96312",
  },
  {
    id: 4,
    title: "Campus Life",
    description: "A vibrant and engaging campus experience.",
    image:
      "https://scontent-del3-2.xx.fbcdn.net/v/t1.6435-9/48981202_300245423954736_51466082006859776_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ZwXRjT-tN8MQ7kNvwFB0kCP&_nc_oc=AdqEBPmVomNBkmKYhCTbp0G7UNVO26U7dGJ-YBkVXAXATlCgPeec6GPBi5Wy_d2oK2VWoKkXhKkjm314OklK60zN&_nc_zt=23&_nc_ht=scontent-del3-2.xx&_nc_gid=Ar1WA0-whxjt8wmYtT0gOA&_nc_ss=7a32e&oh=00_AfxI9LH-Frwl8ODbAFGA-8_mmTQcIJLm2-moOG5MhKb5jg&oe=69EB11C8",
  },
  {
    id: 5,
    title: "Activities",
    description: "Creative and cultural student activities.",
    image:
      "https://scontent-del3-2.xx.fbcdn.net/v/t1.6435-9/52011261_321215338524411_5659011130677264384_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=c5_6_mA8luUQ7kNvwFce_oA&_nc_oc=AdrMt8ZQgQPp3LqKoN1wSgek7ihiyHgNworB_aQm9B3VmuoQ8Tq26kWvrfVjyc4j6RQYr-TtwzB8WxvTg6tX8-Fc&_nc_zt=23&_nc_ht=scontent-del3-2.xx&_nc_gid=pt174Bc4hsssfmc165NFiA&_nc_ss=7a32e&oh=00_AfxAK_z_I4Xb4G-ODI04opwWWTr7nXay-9WgeDQtkpQ1sg&oe=69EAFAC0",
  },
  {
    id: 6,
    title: "Events",
    description: "Celebrations and school events.",
    image:
      "https://scontent-del3-2.xx.fbcdn.net/v/t1.6435-9/48987531_300245727288039_4086999632293396480_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Kyfh9zPD0fsQ7kNvwGEIZcz&_nc_oc=AdpECnrVdmkBGG1EBJ3zVHUQdTKwppLCJ5wFPjYz2mnsN0dARo0B2cr-7lSqm9anqay0Roq_PGrDxgCiPIFZnjSV&_nc_zt=23&_nc_ht=scontent-del3-2.xx&_nc_gid=u7w5WIkr6Lt2-hMSJlaSFQ&_nc_ss=7a32e&oh=00_AfyntoSbF2J3NeSy626CsFHnWtnbFoygUbdbu1pm0nEdfQ&oe=69EB0694",
  },
];

// Decorative Shapes
const DecorativeShapes = () => (
  <>
    <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-200 rounded-full animate-pulse" />
    <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-blue-200 rotate-45" />
  </>
);

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  // Auto Scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [index]);

  const next = () => setIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);

  const prev = () =>
    setIndex(
      (prev) => (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length,
    );

  return (
    <section className="relative min-h-[700px] flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] [background-size:40px_40px]" />

      {/* Glow Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-3xl" />

      <DecorativeShapes />

      <div className="relative w-full max-w-7xl h-[450px] flex items-center justify-center perspective-1000">
        {CAROUSEL_ITEMS.map((item, i) => {
          const diff = i - index;
          const absDiff = Math.abs(diff);
          const isCenter = i === index;

          let xOffset = diff * 350;
          if (diff > CAROUSEL_ITEMS.length / 2)
            xOffset -= CAROUSEL_ITEMS.length * 350;
          if (diff < -CAROUSEL_ITEMS.length / 2)
            xOffset += CAROUSEL_ITEMS.length * 350;

          return (
            <motion.div
              key={item.id}
              animate={{
                x: xOffset,
                scale: isCenter ? 1.1 : 0.8,
                opacity: absDiff === 0 ? 1 : absDiff === 1 ? 0.6 : 0,
                zIndex: 10 - absDiff,
                rotateY: diff > 0 ? -35 : diff < 0 ? 35 : 0,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="absolute w-[800px] sm:w-[850px] h-[350px] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)] cursor-pointer group"
              onClick={() => setIndex(i)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 text-white transition-opacity duration-500 ${
                  isCenter ? "opacity-100" : "opacity-0"
                }`}
              >
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={isCenter ? { y: 0, opacity: 1 } : {}}
                  className="text-3xl font-black mb-2"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={isCenter ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.1 }}
                  className="text-sm opacity-80 leading-relaxed max-w-md"
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-8 mt-12 z-10">
        <button
          onClick={prev}
          className="p-4 bg-white shadow-xl rounded-full text-gray-800 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
        >
          <ChevronLeft size={28} />
        </button>

        <div className="flex gap-3">
          {CAROUSEL_ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`${
                index === i ? "bg-blue-600 w-10" : "bg-gray-200 w-2.5"
              } h-2.5 rounded-full transition-all duration-500`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-4 bg-white shadow-xl rounded-full text-gray-800 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
