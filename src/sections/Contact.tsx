"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Number",
    value: "+91 XXXXX XXXXX",
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "info@medicareplus.com",
  },
  {
    icon: MapPin,
    title: "Hospital Location",
    value: "Client Address Placeholder",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "24/7 Emergency Support",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Contact Healthcare Team
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            Book Your Appointment
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Connect with our healthcare professionals for
            consultations, appointments, and emergency support.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-slate-600">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Map Placeholder */}
            <div className="flex h-72 items-center justify-center rounded-[32px] border border-dashed border-slate-300 bg-white shadow-lg">
              <div className="text-center">
                <MapPin className="mx-auto mb-4 h-10 w-10 text-blue-600" />

                <h3 className="font-semibold">
                  Google Maps Integration
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Client Location Will Be Embedded Here
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] border border-white/50 bg-white/80 p-8 shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-blue-600" />

              <span className="font-medium text-blue-600">
                Secure Appointment Request
              </span>
            </div>

            <h3 className="text-3xl font-bold">
              Request Consultation
            </h3>

            <p className="mt-2 text-slate-600">
              Fill out the form and our team will contact you shortly.
            </p>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-slate-200 p-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-200 p-4"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-slate-200 p-4"
              />

              <select className="w-full rounded-xl border border-slate-200 p-4">
                <option>Select Department</option>
                <option>Cardiology</option>
                <option>Orthopedics</option>
                <option>Pediatrics</option>
                <option>Diagnostics</option>
              </select>

              <textarea
                rows={5}
                placeholder="Describe Your Requirement"
                className="w-full rounded-xl border border-slate-200 p-4"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-blue-700"
              >
                Request Appointment
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}