"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 p-12 text-white lg:p-20"
        >
          {/* Background Effects */}
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                Healthcare Appointment
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                Schedule Your
                <span className="block">
                  Consultation Today
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-blue-100">
                Connect with experienced healthcare specialists and
                receive personalized medical care tailored to your needs.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:scale-105">
                  Book Appointment
                </button>

                <button className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                  Emergency Care
                </button>
              </div>
            </div>

            {/* Right Placeholder */}
            <div className="flex h-72 items-center justify-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur">
              <div className="text-center">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-white/20" />

                <h3 className="text-2xl font-bold">
                  Appointment Illustration
                </h3>

                <p className="mt-2 text-blue-100">
                  Client Graphic Placeholder
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}