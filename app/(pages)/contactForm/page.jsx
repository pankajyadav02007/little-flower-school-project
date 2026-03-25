"use client";
import React from "react";
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Users,
  Phone,
  Mail,
  School,
  MapPin,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  Clock,
  HelpCircle,
  MessageSquare,
  Send,
} from "lucide-react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen mt-24 bg-slate-50 flex items-center justify-center p-4 md:p-8 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* Left Side: Image & Contact Info */}
        <div className="md:w-5/12 relative bg-teal-600 overflow-hidden min-h-[350px] md:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&q=80&w=1000"
            alt="Contact Us"
            className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 to-transparent flex flex-col justify-end p-8 md:p-12 text-white">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Get in <br />
                <span className="text-teal-300">Touch</span>
              </h1>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-teal-500/30 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Our Office</p>
                    <p className="text-teal-100 text-sm">
                      123 Education Hub, Knowledge Park, New Delhi, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-teal-500/30 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-teal-100 text-sm">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-teal-500/30 rounded-lg">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Working Hours</p>
                    <p className="text-teal-100 text-sm">
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm font-medium pt-6 border-t border-teal-500/30">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?u=contact-${i}`}
                      className="w-8 h-8 rounded-full border-2 border-teal-600"
                      alt="Support Team"
                    />
                  ))}
                </div>
                <span>Our support team is online</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-7/12 p-8 md:p-12 lg:p-16 relative">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-slate-800 mb-2">
                    CONTACT US
                  </h2>
                  <div className="h-1.5 w-20 bg-teal-600 rounded-full"></div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600 flex items-center gap-2">
                        <User size={16} className="text-teal-600" />
                        Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none bg-slate-50/50"
                      />
                    </div>

                    {/* Contact No */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600 flex items-center gap-2">
                        <Phone size={16} className="text-teal-600" />
                        Contact No
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 00000 00000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none bg-slate-50/50"
                      />
                    </div>

                    {/* Email Id */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600 flex items-center gap-2">
                        <Mail size={16} className="text-teal-600" />
                        Email Id
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="example@mail.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none bg-slate-50/50"
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600 flex items-center gap-2">
                        <HelpCircle size={16} className="text-teal-600" />
                        Subject
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="How can we help?"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600 flex items-center gap-2">
                      <MessageSquare size={16} className="text-teal-600" />
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Type your message here..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none bg-slate-50/50 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full cursor-pointer md:w-auto px-12 py-4 bg-teal-600 text-white font-bold rounded-xl shadow-lg shadow-teal-500/30 hover:bg-teal-700 transition-all flex items-center justify-center gap-2 group"
                  >
                    Submit
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </motion.button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-24 h-24 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  Message Sent!
                </h2>
                <p className="text-slate-600 mb-8 max-w-md">
                  Thank you for reaching out. We have received your message and
                  will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 border-2 border-teal-600 text-teal-600 font-bold rounded-xl hover:bg-teal-50 transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
