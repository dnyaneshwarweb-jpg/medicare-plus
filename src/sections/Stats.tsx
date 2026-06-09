"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    value: 25000,
    suffix: "+",
    label: "Patients Served",
  },
  {
    value: 50,
    suffix: "+",
    label: "Expert Doctors",
  },
  {
    value: 15,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 98,
    suffix: "%",
    label: "Patient Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 py-24">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
            Trusted Healthcare Excellence
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            Delivering Quality Care
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            A proven track record of clinical excellence,
            patient trust, and healthcare innovation.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center text-white backdrop-blur-xl transition hover:scale-105"
            >
              <h3 className="text-5xl font-bold">
                <CountUp
                  end={stat.value}
                  duration={3}
                  suffix={stat.suffix}
                />
              </h3>

              <p className="mt-4 text-blue-100">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}