"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  Stethoscope,
  Microscope,
  HeartPulse,
} from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    text: "NABH Accredited",
  },
  {
    icon: Clock3,
    text: "24/7 Emergency",
  },
  {
    icon: Stethoscope,
    text: "50+ Specialists",
  },
  {
    icon: Microscope,
    text: "Advanced Diagnostics",
  },
  {
    icon: HeartPulse,
    text: "25K+ Patients Served",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-4 md:grid-cols-3 lg:grid-cols-5"
        >
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className="flex items-center justify-center gap-3 rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-lg"
              >
                <Icon className="h-5 w-5 text-blue-600" />

                <span className="text-sm font-medium text-slate-700">
                  {item.text}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}