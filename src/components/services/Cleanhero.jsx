"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Clock3 } from "lucide-react";

export default function CleaningHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Decorative Blurs */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-20 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
              <Sparkles size={16} />
              Professional Cleaning Services
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-4xl font-black leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Spotless Spaces,
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Healthier Living
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              FORCE Cleaning Services provides professional residential,
              commercial, and deep cleaning solutions with trained staff, modern
              equipment, and eco-friendly practices for a cleaner, healthier
              environment.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-400"
              >
                Book Cleaning
                <ArrowRight size={18} />
              </Link>

              <Link
                href="#cleaning-services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>

            {/* Highlights */}
            <div className="mt-16 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-cyan-500 p-4">
                    <ShieldCheck className="text-white" size={26} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Trained Professionals
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Experienced cleaning staff delivering consistent quality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-cyan-500 p-4">
                    <Clock3 className="text-white" size={26} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Flexible Scheduling
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      One-time, weekly, monthly, or customized cleaning plans.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              <div>
                <h2 className="text-3xl font-black text-cyan-400">1000+</h2>
                <p className="mt-1 text-sm text-slate-300">Spaces Cleaned</p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-cyan-400">24/7</h2>
                <p className="mt-1 text-sm text-slate-300">Booking Support</p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-cyan-400">100%</h2>
                <p className="mt-1 text-sm text-slate-300">Quality Focused</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
