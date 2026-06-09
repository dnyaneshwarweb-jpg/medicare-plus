"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Premium Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl" />

        <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-cyan-100/50 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-sky-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              NABH Accredited • Trusted By 25,000+ Patients
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 md:text-7xl">
              Advanced Healthcare
              <span className="block text-blue-600">
                Excellence
              </span>
              <span className="block">
                For Every Stage Of Life
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Delivering comprehensive healthcare solutions through
              experienced specialists, advanced diagnostics,
              modern treatment facilities, and compassionate care.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-blue-700">
                Book Appointment
              </button>

              <button className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold transition hover:scale-105 hover:bg-slate-50">
                Emergency Care
              </button>
            </div>

            {/* Premium Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white p-4 shadow-md">
                <h3 className="text-3xl font-bold text-blue-600">
                  25K+
                </h3>

                <p className="text-sm text-slate-600">
                  Patients
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-md">
                <h3 className="text-3xl font-bold text-blue-600">
                  50+
                </h3>

                <p className="text-sm text-slate-600">
                  Doctors
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-md">
                <h3 className="text-3xl font-bold text-blue-600">
                  24/7
                </h3>

                <p className="text-sm text-slate-600">
                  Support
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="flex h-[550px] items-center justify-center rounded-[36px] border border-slate-200 bg-white/90 backdrop-blur-xl shadow-[0_25px_80px_rgba(37,99,235,0.15)]">
              <div className="text-center">
                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-blue-100" />

                <h3 className="text-2xl font-bold text-slate-800">
                  Hospital / Doctor Image
                </h3>

                <p className="mt-2 text-slate-500">
                  Client Images Will Be Added Here
                </p>
              </div>
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -left-8 top-12 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl">
              <h4 className="font-semibold">
                Emergency Care
              </h4>

              <p className="text-sm text-slate-500">
                24/7 Available
              </p>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute right-12 top-8 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl">
              <h4 className="font-semibold">
                Expert Specialists
              </h4>

              <p className="text-sm text-slate-500">
                50+ Medical Experts
              </p>
            </div>

            {/* Floating Card 3 */}
            <div className="absolute -right-6 bottom-16 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl">
              <h4 className="font-semibold">
                Patient Satisfaction
              </h4>

              <p className="text-sm text-slate-500">
                98% Positive Reviews
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}