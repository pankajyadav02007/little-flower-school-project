'use client'

import { motion } from 'framer-motion';
import clsx from 'clsx';

import AboutSection from '@/app/(pages)/aboutSection/page'
import QuoteSection from '@/app/(pages)/quoteSection/page'
import WhyChooseSection from '@/app/(pages)/whyChooseSection/page'
import HeroCarousel from '@/app/(pages)/heroCarousel/page'
import StatsSection from '@/app/(pages)/statsSection/page'
import AdmissionSection from '@/app/(pages)/admissionSection/page'
import NewsSection from '@/app/(pages)/newsSection/page'
import MentorsSection from '@/app/(pages)/mentorsSection/page'
import TestimonialsSection from '@/app/(pages)/testimonialsSection/page'
import ScrollToTop from '@/app/components/ScrollToTop'
import AnnouncementsSection from '@/app/(pages)/announcementsSection/page'

// ✅ Gallery Images (add your real images here)
const GALLERY_IMAGES = [
  'https://scontent-del2-3.xx.fbcdn.net/v/t1.6435-9/83799819_507272236585386_3030656475996356608_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=OipX3iZ1mxgQ7kNvwHmfdnK&_nc_oc=Adp1sP8QOfvPIQl3Tqw-dDRWDwsajz67xzSkKtNVHc9T96QZjm6YZ2HdbGGAA5Mn1XnVBLEDkF4mEaRwBAjBN2BH&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=GWA4IfJTrHTFvmrvs8ldWA&_nc_ss=7a32e&oh=00_Afzws8w68M3gVFqSV9wthWTZJx0q25fKu4C7ZtaddxObDQ&oe=69EB019C',
  'https://scontent-del3-2.xx.fbcdn.net/v/t1.6435-9/45878925_281671519145460_350372290862514176_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=X-ABRinl3rAQ7kNvwFa2h6P&_nc_oc=Adr0nFWFWOr5Z4bnV2RSkCwSr2WpQDr9Aiwr852Fy4kdZEyV33vC4QzGq_bGpZwms9eroaft6BwAMYGb6YCFZ9yb&_nc_zt=23&_nc_ht=scontent-del3-2.xx&_nc_gid=7qDcheUovqUBgqc2sBh0Xw&_nc_ss=7a32e&oh=00_AfwhMNQU4LjnPe84rkVyIjM3fXUAM9yxjy4Ivu_lhvwiCw&oe=69EB1C74',
  'https://scontent-del2-3.xx.fbcdn.net/v/t1.6435-9/49092871_300244943954784_2910287217207279616_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=8DE2si4sx5EQ7kNvwH5drDk&_nc_oc=AdoWppJ9zNZnWTou8qclJy2jcwmW-uHdN6M2b1vgxcqdP1WzI1cFp3CYdditTR7P-s8e8j4ojHYXZZUH5WJiH4rW&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=XWFklvYFB6miQMjgDrr5KA&_nc_ss=7a32e&oh=00_AfwmUzjIHm_Jg0yXK8r3SNVyAmbQfl5fi6kzPqWUZvtzBA&oe=69EAEC9D',
  'https://scontent-del3-1.xx.fbcdn.net/v/t1.6435-9/51474365_317693365543275_1106022437419483136_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=_4TPdZGPbykQ7kNvwHquIgb&_nc_oc=AdojWIF6R48fKDzU47V7M5fetBOTt15mugWr_sLQ7Ioy_5KVh8emrqtJJxSVLThbRENhKZxDaUa8lyf-mTeIAmZi&_nc_zt=23&_nc_ht=scontent-del3-1.xx&_nc_gid=TmlK6ZBl45RXcQtTWSH2cg&_nc_ss=7a32e&oh=00_AfwtW2Jj2R29sqMA-HmwtQ6_m0-zlX34VQY6hgi2OyLUew&oe=69EB04A3',
  'https://scontent-del3-1.xx.fbcdn.net/v/t1.6435-9/51438038_317693385543273_1673585881501401088_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Ee4yGMOzxJ0Q7kNvwGPoEex&_nc_oc=AdpnxjdF5cIrkQLImUQ4wfTVef2oI_Nm58drW9ocgTRnIzAZymILKjiHNFnm66Z6vSYVnbm5hkXRb_wRELjzKKxR&_nc_zt=23&_nc_ht=scontent-del3-1.xx&_nc_gid=LJRxcoahDv54OuKdlV4bjw&_nc_ss=7a32e&oh=00_AfycZxvfLKStYhuceV5SZ2TvHAtnPh1sp4rOXcz9yzGAEA&oe=69EB072F',
  'https://scontent-del3-2.xx.fbcdn.net/v/t1.6435-9/75380347_443400652972545_255602231158505472_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=wo1UaGGQJkEQ7kNvwHwuTrD&_nc_oc=AdojRSTXn9ySzlj2af86ZeA4OyOcHymDyAa93cegdBX9tx3YZaMDqVOKI3hwFdbeZI_gMpbo5zp0iApugDw4rmt6&_nc_zt=23&_nc_ht=scontent-del3-2.xx&_nc_gid=LeQhlBFRiSnIZ4C8ZN4tYg&_nc_ss=7a32e&oh=00_AfwU4B2ajZAzIkFXN9F0SeiBZLYAFeDMtZCrmEEhCXhpYA&oe=69EB139F',
];

// --- Main App ---
export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      <main>
        {/* Hero Section */}
        <HeroCarousel />

        {/* Welcome Section */}
        <section className="py-5 md:py-20 md:px-6 px-1 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl md:text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Welcome to Little Flower School
            </h1>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our English-medium school is dedicated to providing high-quality, internationally focused education that fosters intellectual growth, personal development, and global citizenship.
            </p>
            <button className="px-5 md:px-10 py-2 md:py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-300 cursor-pointer">
              Apply Now
            </button>
          </motion.div>
        </section>

    <AboutSection/>
    <QuoteSection/>
        <WhyChooseSection/>
        <MentorsSection/>
<AdmissionSection/>
        <TestimonialsSection/>
        
        <StatsSection />
       

        {/* Gallery */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {GALLERY_IMAGES.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={clsx(
                    "relative rounded-2xl overflow-hidden group cursor-pointer",
                    i === 1
                      ? "md:col-span-2 md:row-span-2"
                      : "h-48 md:h-64"
                  )}
                >
                  <img
                    src={img}
                    alt={`Gallery ${i}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* News */}
        <NewsSection />

        {/* CTA Banner */}
        <section className="bg-blue-700 py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="md:text-2xl md:text-3xl font-bold text-white text-center md:text-left">
              Looking for the Academic Calendar?
            </h2>
            <button className="px-2 md:px-8 py-2 md:py-3 bg-white text-blue-700 rounded-md font-bold hover:bg-gray-100 transition-all shadow-lg cursor-pointer">
              Download Now!
            </button>
          </div>
        </section>

        {/* Announcements */}
        <AnnouncementsSection />
      </main>

      <ScrollToTop />
    </div>
  );
}