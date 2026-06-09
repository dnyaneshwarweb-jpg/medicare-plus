"use client";

import { motion } from "framer-motion";
import { Award, Calendar, Users } from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    role: "Senior Cardiologist",
    exp: "15+ Years Experience",
  },
  {
    name: "Dr. Michael Smith",
    role: "Orthopedic Specialist",
    exp: "12+ Years Experience",
  },
  {
    name: "Dr. Emily Davis",
    role: "Pediatric Consultant",
    exp: "10+ Years Experience",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Medical Experts
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Meet Our Healthcare Specialists
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Experienced doctors dedicated to delivering
            exceptional patient care and clinical excellence.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image Placeholder */}
              <div className="flex h-72 items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-blue-200" />

                  <h4 className="font-semibold text-slate-700">
                    Doctor Photo
                  </h4>

                  <p className="text-sm text-slate-500">
                    Client Image Placeholder
                  </p>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold">
                  {doctor.name}
                </h3>

                <p className="mt-2 text-blue-600">
                  {doctor.role}
                </p>

                <div className="mt-6 flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-slate-600">
                    Board Certified Specialist
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-slate-600">
                    {doctor.exp}
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-slate-600">
                    5,000+ Patients Treated
                  </span>
                </div>

                <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700">
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}