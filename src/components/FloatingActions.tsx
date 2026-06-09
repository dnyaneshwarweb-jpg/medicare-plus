"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-3">
      {/* Emergency Button */}
      <button className="flex items-center gap-3 rounded-2xl bg-red-600 px-5 py-4 text-white shadow-2xl transition duration-300 hover:scale-105 hover:bg-red-700">
        <Phone className="h-5 w-5" />

        <div className="text-left">
          <p className="text-xs opacity-90">
            24/7 Emergency
          </p>

          <p className="text-sm font-semibold">
            Call Now
          </p>
        </div>
      </button>

      {/* WhatsApp Button */}
      <button className="whatsapp-pulse flex items-center gap-3 rounded-2xl bg-green-600 px-5 py-4 text-white shadow-2xl transition duration-300 hover:scale-105 hover:bg-green-700">
        <MessageCircle className="h-5 w-5" />

        <div className="text-left">
          <p className="text-xs opacity-90">
            Quick Support
          </p>

          <p className="text-sm font-semibold">
            WhatsApp Us
          </p>
        </div>
      </button>
    </div>
  );
}