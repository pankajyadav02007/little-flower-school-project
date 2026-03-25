"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Info,
  Users,
  GraduationCap,
  Building2,
  ExternalLink,
  Download,
  ChevronRight,
  School,
} from "lucide-react";

// ---------- Constants ----------
const GENERAL_INFO = [
  {
    sno: 1,
    information: "Name of the School",
    details: "Little Flower School",
  },
  { sno: 2, information: "Affiliation Number", details: "123456" },
  { sno: 3, information: "School Code", details: "LF123" },
  { sno: 4, information: "Type of School", details: "Private" },
];

const DOCUMENTS_INFO = [
  { sno: 1, document: "Recognition Certificate", link: "#" },
  { sno: 2, document: "School Infrastructure Report", link: "#" },
];

const ACADEMIC_INFO = [
  { sno: 1, document: "Academic Calendar", link: "#" },
  { sno: 2, document: "Curriculum Details", link: "#" },
];

const STAFF_INFO = [
  { sno: 1, information: "Principal", details: "Mrs. Anjali Singh" },
  { sno: 2, information: "Vice Principal", details: "Mr. Rajesh Kumar" },
];

const RESULT_X = [
  {
    sno: 1,
    year: 2023,
    registered: 120,
    passed: 118,
    percentage: "98%",
    remarks: "Excellent",
  },
  {
    sno: 2,
    year: 2022,
    registered: 115,
    passed: 110,
    percentage: "95%",
    remarks: "Very Good",
  },
];

const RESULT_XII = [
  {
    sno: 1,
    year: 2023,
    registered: 80,
    passed: 78,
    percentage: "97%",
    remarks: "Excellent",
  },
  {
    sno: 2,
    year: 2022,
    registered: 75,
    passed: 72,
    percentage: "96%",
    remarks: "Very Good",
  },
];

const INFRASTRUCTURE_INFO = [
  { sno: 1, information: "Library", details: "Yes" },
  { sno: 2, information: "Laboratories", details: "Yes" },
  { sno: 3, information: "Playground", details: "YOUTUBE" },
];

// ---------- Components ----------
const SectionHeader = ({ title, icon: Icon, id }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-3 mb-6 mt-12 border-l-4 border-blue-600 pl-4"
    id={id}
  >
    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
      <Icon size={24} />
    </div>
    <h2 className="text-xl md:text-2xl font-bold text-blue-900 uppercase tracking-tight">
      {title}
    </h2>
  </motion.div>
);

const TableContainer = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="overflow-x-auto rounded-xl border border-blue-100 shadow-sm bg-white"
  >
    {children}
  </motion.div>
);

// ---------- Main App ----------
export default function MandatoryDisclouser() {
  return (
    <div className="min-h-screen mt-20 bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Header */}
      <header className="bg-blue-900 text-white py-12 px-4 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-2xl mb-6"
          >
            <School size={48} className="text-blue-200" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-black tracking-tighter mb-4"
          >
            MANDATORY PUBLIC DISCLOSURE
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            Appendix - IX | Little Flower School, Bhadohi
          </motion.p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 mt-8">
        {/* Quick Links */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {[
            "General",
            "Documents",
            "Academics",
            "Staff",
            "Results",
            "Infrastructure",
          ].map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="px-4 py-2 bg-white border border-blue-200 rounded-full text-sm font-semibold text-blue-700 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Sections */}
        <SectionHeader
          title="A. General Information"
          icon={Info}
          id="general"
        />
        <TableContainer>
          <table className="w-full text-left border-collapse">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 font-bold uppercase text-sm w-20">S.No.</th>
                <th className="p-4 font-bold uppercase text-sm">Information</th>
                <th className="p-4 font-bold uppercase text-sm">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-50">
              {GENERAL_INFO.map((row) => (
                <tr
                  key={row.sno}
                  className="hover:bg-blue-50 transition-colors group"
                >
                  <td className="p-4 text-sm font-mono text-blue-400">
                    {row.sno}
                  </td>
                  <td className="p-4 text-sm font-bold text-blue-900">
                    {row.information}
                  </td>
                  <td className="p-4 text-sm text-slate-600 group-hover:text-blue-700 transition-colors">
                    {row.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>

        {/* Section B: Documents */}
        <SectionHeader
          title="B. Documents and Information"
          icon={FileText}
          id="documents"
        />
        <TableContainer>
          <table className="w-full text-left border-collapse">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 font-bold uppercase text-sm w-20">S.No.</th>
                <th className="p-4 font-bold uppercase text-sm">
                  Documents/Information
                </th>
                <th className="p-4 font-bold uppercase text-sm text-center">
                  Upload Documents
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-50">
              {DOCUMENTS_INFO.map((row) => (
                <tr
                  key={row.sno}
                  className="hover:bg-blue-50 transition-colors"
                >
                  <td className="p-4 text-sm font-mono text-blue-400">
                    {row.sno}
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-700">
                    {row.document}
                  </td>
                  <td className="p-4 text-center">
                    <a
                      href={row.link}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-600 hover:text-white transition-all group"
                    >
                      <Download
                        size={16}
                        className="group-hover:-translate-y-0.5 transition-transform"
                      />
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>

        {/* Section C: Academics */}
        <SectionHeader
          title="C. Result and Academics"
          icon={GraduationCap}
          id="academics"
        />
        <TableContainer>
          <table className="w-full text-left border-collapse">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 font-bold uppercase text-sm w-20">S.No.</th>
                <th className="p-4 font-bold uppercase text-sm">
                  Documents/Information
                </th>
                <th className="p-4 font-bold uppercase text-sm text-center">
                  Upload Documents
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-50">
              {ACADEMIC_INFO.map((row) => (
                <tr
                  key={row.sno}
                  className="hover:bg-blue-50 transition-colors"
                >
                  <td className="p-4 text-sm font-mono text-blue-400">
                    {row.sno}
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-700">
                    {row.document}
                  </td>
                  <td className="p-4 text-center">
                    <a
                      href={row.link}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-600 hover:text-white transition-all group"
                    >
                      <ExternalLink
                        size={16}
                        className="group-hover:scale-110 transition-transform"
                      />
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>

        {/* Section D: Staff */}
        <SectionHeader title="D. Staff (Teaching)" icon={Users} id="staff" />
        <TableContainer>
          <table className="w-full text-left border-collapse">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 font-bold uppercase text-sm w-20">S.No.</th>
                <th className="p-4 font-bold uppercase text-sm">Information</th>
                <th className="p-4 font-bold uppercase text-sm">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-50">
              {STAFF_INFO.map((row) => (
                <tr
                  key={row.sno}
                  className="hover:bg-blue-50 transition-colors group"
                >
                  <td className="p-4 text-sm font-mono text-blue-400">
                    {row.sno}
                  </td>
                  <td className="p-4 text-sm font-bold text-blue-900">
                    {row.information}
                  </td>
                  <td className="p-4 text-sm text-slate-600 group-hover:text-blue-700 transition-colors">
                    {row.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>

        {/* Section E: Infrastructure */}
        <SectionHeader
          title="E. School Infrastructure"
          icon={Building2}
          id="infrastructure"
        />
        <TableContainer>
          <table className="w-full text-left border-collapse">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 font-bold uppercase text-sm w-20">S.No.</th>
                <th className="p-4 font-bold uppercase text-sm">Information</th>
                <th className="p-4 font-bold uppercase text-sm">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-50">
              {INFRASTRUCTURE_INFO.map((row) => (
                <tr
                  key={row.sno}
                  className="hover:bg-blue-50 transition-colors group"
                >
                  <td className="p-4 text-sm font-mono text-blue-400">
                    {row.sno}
                  </td>
                  <td className="p-4 text-sm font-bold text-blue-900">
                    {row.information}
                  </td>
                  <td className="p-4 text-sm text-slate-600 group-hover:text-blue-700 transition-colors">
                    {row.details === "YOUTUBE" ? (
                      <a
                        href="#"
                        className="text-red-600 font-bold flex items-center gap-1 hover:underline"
                      >
                        <ChevronRight size={14} /> WATCH ON YOUTUBE
                      </a>
                    ) : (
                      row.details
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-12 bg-slate-900 text-slate-400 text-center border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm tracking-widest uppercase mb-2">
            Mandatory Public Disclosure
          </p>
          <p className="font-bold text-white mb-4">
            Little Flower School, Bhadohi
          </p>
          <div className="flex justify-center gap-6 text-xs">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Contact Support
            </a>
          </div>
          <p className="mt-8 text-xs opacity-50">
            © 2024 Little Flower School. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
