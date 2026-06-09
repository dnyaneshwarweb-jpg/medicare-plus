"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
} from "lucide-react";

const features = [
  {
    title: "Experienced Specialists",
    icon: Stethoscope,
  },
  {
    title: "Advanced Medical Technology",
    icon: ShieldCheck,
  },
  {
    title: "Patient-Centered Care",
    icon: HeartHandshake,
  },
  {
    title: "24/7 Emergency Support",
    icon: CheckCircle,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex h-[500px] items-center justify-center rounded-[32px] border border-slate-200 bg-white shadow-xl"
          >
            <div className="text-center">
              <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-blue-100" />

              <h3 className="text-2xl font-bold text-slate-800">
                Hospital Image
              </h3>

              <p className="mt-2 text-slate-500">
                Client Facility Image Placeholder
              </p>
            </div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
              Why Choose Us
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Healthcare Excellence
              <span className="block text-blue-600">
                You Can Trust
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We combine experienced healthcare professionals,
              modern technology, and compassionate treatment
              to deliver exceptional patient outcomes.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>

                    <span className="font-medium text-slate-800">
                      {feature.title}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-3xl font-bold text-blue-600">
                  25K+
                </h3>

                <p className="mt-2 text-slate-600">
                  Patients Served
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-3xl font-bold text-blue-600">
                  98%
                </h3>

                <p className="mt-2 text-slate-600">
                  Satisfaction Rate
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}