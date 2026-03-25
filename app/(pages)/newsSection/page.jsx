"use client";

import { motion } from "framer-motion";

// ✅ News Data
const NEWS = [
  {
    id: 1,
    title: "Annual Sports Day 2026",
    date: "March 10, 2026",
    excerpt:
      "Students participated in various sports activities with great enthusiasm.",
    image:
      "https://scontent-del3-1.xx.fbcdn.net/v/t1.6435-9/52605857_321215145191097_3523686187199889408_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=BDWKQzACIX4Q7kNvwFikdXu&_nc_oc=AdqGoLgWhhjE3xqnBAb_sKeJdi2DquAy7AhQZn_Xksh1hCPWCCjB-vkXfPCsoUSqa8L7IA_OKsemhcqypp_K0x2-&_nc_zt=23&_nc_ht=scontent-del3-1.xx&_nc_gid=PBIvVbdpe0BpPTmAW0W7sQ&_nc_ss=7a32e&oh=00_Afyk5x9HSyksNXjjeje3mlKlkj8Z4eO6khnlpAFGE6bsPQ&oe=69EB0FAE",
  },
  {
    id: 2,
    title: "Science Exhibition",
    date: "February 22, 2026",
    excerpt:
      "Innovative projects showcased by students impressed all visitors.",
    image:
      "https://scontent-del3-2.xx.fbcdn.net/v/t1.6435-9/80499376_488718421774101_7529652001504755712_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ka5WAZA7lXoQ7kNvwEOKmqW&_nc_oc=Adr74hXhBkGi8maZtJFRbDLZKGDc-x3bBtxLQ-WInFRPK95pUgFmyqNPXHfc-dbhcNTKQ7Cmir8oMg6FxkmZ6Iz1&_nc_zt=23&_nc_ht=scontent-del3-2.xx&_nc_gid=6yfWdpvot8ATGtRtwPvcUA&_nc_ss=7a32e&oh=00_AfzNiaH8ty_Xd-_dEChxseKT-Bag7ya4EnDhqi7urcORaw&oe=69EAECCF",
  },
  {
    id: 3,
    title: "New Library ",
    date: "January 15, 2026",
    excerpt:
      "Our school launched a modern library with advanced learning resources.",
    image:
      "https://scontent-del3-1.xx.fbcdn.net/v/t1.6435-9/80434660_488718115107465_2790267349712764928_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=arEd6IcfM4UQ7kNvwExPwcf&_nc_oc=AdpG1iopyJnCyEwefZVsJ54ELK_xPnEBnF4VJtBdIUTw8z3jq5ItRQAEMSPGuLIbiAkRmOA-F15h7jU5F6PGr68O&_nc_zt=23&_nc_ht=scontent-del3-1.xx&_nc_gid=Ii0BSTYncKrVLScMmyk_IQ&_nc_ss=7a32e&oh=00_Afwp19K7iaFmWs9ApOx66srvz7-qZaDnJZWwidT-vW-lUQ&oe=69EB0ECD",
  },
];

const NewsSection = () => {
  return (
    <section className="py-20 px-6 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            News & Events
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-blue-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-blue-200"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  {item.date}
                </span>

                <h3 className="text-xl font-bold text-blue-900 mt-2 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-blue-800/80 text-sm mb-6 line-clamp-3">
                  {item.excerpt}
                </p>

                <button className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
