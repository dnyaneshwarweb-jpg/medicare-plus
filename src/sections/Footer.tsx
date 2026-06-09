import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              MediCare Plus
            </h2>

            <p className="mt-4 leading-relaxed text-slate-400">
              Comprehensive healthcare solutions with
              experienced specialists, advanced medical
              technology, and patient-focused care.
            </p>
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
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Departments
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Cardiology</li>
              <li>Orthopedics</li>
              <li>Pediatrics</li>
              <li>Diagnostics</li>
              <li>Emergency Care</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Contact Info
            </h3>

            <div className="space-y-4 text-slate-400">
              <div className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 text-blue-400" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 text-blue-400" />
                <span>info@medicareplus.com</span>
              </div>

              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 text-blue-400" />
                <span>Client Address Placeholder</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-slate-500">
          © 2026 MediCare Plus. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}