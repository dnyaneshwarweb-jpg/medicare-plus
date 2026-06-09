import {
  Phone,
  Mail,
  MapPin,
  HeartPulse,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <HeartPulse className="h-8 w-8 text-blue-400" />

              <h2 className="text-3xl font-bold">
                MediCare Plus
              </h2>
            </div>

            <p className="mt-5 leading-relaxed text-slate-400">
              Delivering world-class healthcare through
              experienced specialists, advanced diagnostics,
              and patient-focused treatment.
            </p>

            <div className="mt-6 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              NABH Accredited Healthcare
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Home</li>
              <li>Services</li>
              <li>Doctors</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Departments
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Cardiology</li>
              <li>Orthopedics</li>
              <li>Pediatrics</li>
              <li>Emergency Care</li>
              <li>Diagnostics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Contact Info
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3 text-slate-400">
                <Phone className="mt-1 h-5 w-5 text-blue-400" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex gap-3 text-slate-400">
                <Mail className="mt-1 h-5 w-5 text-blue-400" />
                <span>info@medicareplus.com</span>
              </div>

              <div className="flex gap-3 text-slate-400">
                <MapPin className="mt-1 h-5 w-5 text-blue-400" />
                <span>Client Address Placeholder</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">
          <p>
            © 2026 MediCare Plus. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by{" "}
            <span className="font-semibold text-blue-400">
              DnyanuX
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}