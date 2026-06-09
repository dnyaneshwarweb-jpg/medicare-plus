"use client";

import { useEffect, useState } from "react";
import { HeartPulse } from "lucide-react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <div className="animate-pulse rounded-full bg-blue-100 p-6">
            <HeartPulse className="h-12 w-12 text-blue-600" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-slate-900">
          MediCare Plus
        </h1>

        <p className="mt-2 text-slate-500">
          Healthcare Excellence
        </p>

        {/* Loading Bar */}
        <div className="mx-auto mt-8 h-2 w-56 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full animate-pulse rounded-full bg-blue-600" />
        </div>

        <p className="mt-4 text-sm text-slate-400">
          Loading...
        </p>
      </div>
    </div>
  );
}