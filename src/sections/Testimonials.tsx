"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Patient Name",
    role: "Cardiology Patient",
    review:
      "The doctors and staff provided exceptional care throughout my treatment journey.",
  },
  {
    name: "Patient Name",
    role: "Orthopedic Patient",
    review:
      "Modern facilities, experienced specialists, and outstanding patient support.",
  },
  {
    name: "Patient Name",
    role: "General Consultation",
    review:
      "Professional healthcare services with a compassionate and patient-focused approach.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Patient Success Stories
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Trusted By Thousands
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name + index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <Quote className="h-10 w-10 text-blue-200" />

              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current text-yellow-500"
                  />
                ))}
              </div>

              <p className="mt-6 leading-relaxed text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100" />

                <div>
                  <h4 className="font-semibold">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}