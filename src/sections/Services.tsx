"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Stethoscope,
  Ambulance,
  Activity,
  ShieldCheck,
  Microscope,
} from "lucide-react";

const services = [
  {
    title: "Cardiology",
    icon: HeartPulse,
  },
  {
    title: "General Medicine",
    icon: Stethoscope,
  },
  {
    title: "Emergency Care",
    icon: Ambulance,
  },
  {
    title: "Orthopedics",
    icon: Activity,
  },
  {
    title: "Preventive Care",
    icon: ShieldCheck,
  },
  {
    title: "Diagnostics",
    icon: Microscope,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Medical Departments
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Comprehensive Healthcare Services
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Our multidisciplinary team provides advanced medical
            care across a wide range of specialties.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
                  <Icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  Professional healthcare services delivered
                  through experienced specialists and
                  modern medical technology.
                </p>

                <div className="mt-6">
                  <span className="font-medium text-blue-600">
                    Learn More →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}