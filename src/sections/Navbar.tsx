"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <>
      {/* Trust Bar */}
      <div className="border-b bg-blue-700 py-2 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" />
            <span>
              NABH Accredited • Multi-Speciality Healthcare
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>Emergency: +91 XXXXX XXXXX</span>
          </div>
        </div>
      </div>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h2 className="text-2xl font-bold text-blue-600">
              MediCare Plus
            </h2>

            <p className="text-xs text-slate-500">
              Healthcare Excellence Since 2010
            </p>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            <a
              href="#services"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              Services
            </a>

            <a
              href="#doctors"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              Doctors
            </a>

            <a
              href="#about"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              About
            </a>

            <a
              href="#contact"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="rounded-xl border border-blue-200 px-5 py-3 font-medium text-blue-600 transition hover:bg-blue-50">
              Emergency
            </button>

            <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
              Book Appointment
            </button>
          </div>
        </div>
      </motion.header>
    </>
  );
}