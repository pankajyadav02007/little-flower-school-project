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
} from "lucide-react";

const RegisterForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captcha, setCaptcha] = useState("d c g w T");

  const handleRegister = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const refreshCaptcha = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length)) + " ";
    }
    setCaptcha(result.trim());
  };

  return (
    <div className="min-h-screen mt-18 bg-slate-50 flex items-center justify-center p-4 md:p-8 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* Left Side: Image & Branding */}
        <div className="md:w-5/12 relative bg-blue-600 overflow-hidden min-h-[300px] md:min-h-full">
          <img
            src="https://scontent-del3-2.xx.fbcdn.net/v/t39.30808-6/504887573_1152542066892018_4225216015408092818_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=2a1932&_nc_ohc=NMKzhk3KzzkQ7kNvwFjeoxE&_nc_oc=AdqFWhk-rCCgJ_JnrdoaQOIGcILtR3pMmQDtHt_k_4tg0IBLaqroupcn_nVVs-Npi0M7axEhTzoQWqJ8rFQVcZ6d&_nc_zt=23&_nc_ht=scontent-del3-2.xx&_nc_gid=zZh68LW2elLP5XEaTSe8wg&_nc_ss=7a32e&oh=00_Afx2pthhH4DeT9MCb7LDXcHMEkSLTz3E4KpdljZKaAaWEw&oe=69C97C9E"
            alt="School Campus"
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex flex-col justify-end p-8 md:p-12 text-white">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Shape Your <br />
                <span className="text-blue-300">Future</span> With Us
              </h1>
              <p className="text-blue-100 text-lg mb-8 max-w-sm">
                Join our community of excellence and innovation. Admissions for
                the academic year 2026-27 are now open.
              </p>
              <div className="flex items-center gap-4 text-sm font-medium">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?u=${i}`}
                      className="w-8 h-8 rounded-full border-2 border-blue-600"
                      alt="Student"
                    />
                  ))}
                </div>
                <span>Joined by 2,000+ students</span>
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
                    ADMISSION FORM
                  </h2>
                  <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
                </div>

                <form onSubmit={handleRegister} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Student Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600 flex items-center gap-2">
                        <User size={16} className="text-blue-600" />
                        Students Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Enter full name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none bg-slate-50/50"
                      />
                    </div>

                    {/* Parent Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600 flex items-center gap-2">
                        <Users size={16} className="text-blue-600" />
                        Parents Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Enter parent name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none bg-slate-50/50"
                      />
                    </div>

                    {/* Contact Number */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600 flex items-center gap-2">
                        <Phone size={16} className="text-blue-600" />
                        Contact Number
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 00000 00000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none bg-slate-50/50"
                      />
                    </div>

                    {/* Email ID */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600 flex items-center gap-2">
                        <Mail size={16} className="text-blue-600" />
                        E-mail Id
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="example@mail.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none bg-slate-50/50"
                      />
                    </div>

                    {/* Class Seeking Admission */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600 flex items-center gap-2">
                        <School size={16} className="text-blue-600" />
                        Class Seeking Admission to
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none bg-slate-50/50 appearance-none cursor-pointer">
                        <option value="">Select Class</option>
                        <option value="nursery">Nursery</option>
                        <option value="kg">KG</option>
                        <option value="1">Class 1</option>
                        <option value="2">Class 2</option>
                        <option value="3">Class 3</option>
                      </select>
                    </div>

                    {/* Branch Applied For */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600 flex items-center gap-2">
                        <MapPin size={16} className="text-blue-600" />
                        Select Branch Applied For
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none bg-slate-50/50 appearance-none cursor-pointer">
                        <option value="main">
                          Little Flower School - Main Branch
                        </option>
                        <option value="east">
                          Little Flower School - East Campus
                        </option>
                        <option value="west">
                          Little Flower School - West Campus
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Captcha Section */}
                  <div className="flex flex-wrap items-end gap-4 pt-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-600">
                        Verification Code
                      </label>
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-600 text-white font-mono italic text-xl px-6 py-2 rounded-lg select-none tracking-widest shadow-inner">
                          {captcha}
                        </div>
                        <button
                          type="button"
                          onClick={refreshCaptcha}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                        >
                          <RefreshCw size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="flex-1 min-w-[120px]">
                      <input
                        required
                        type="text"
                        placeholder="Enter Captcha"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full cursor-pointer md:w-auto px-10 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group"
                  >
                    Register Now
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
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
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  Registration Successful!
                </h2>
                <p className="text-slate-600 mb-8 max-w-md">
                  Thank you for applying. Our admission team will review your
                  application and contact you shortly via email or phone.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all"
                >
                  Submit Another Form
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterForm;
