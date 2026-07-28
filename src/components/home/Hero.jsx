"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/60" />

      {/* Blur Effects */}
      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              <Sparkles size={16} />
              Trusted Professional Services
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
              Complete
              <span className="block text-cyan-400">Care &amp; Security</span>
              Solutions
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              We provide trusted Home Care, Security Guards and Professional
              Cleaning Services with experienced and verified staff across
              Kerala.
            </p>

            {/* Services */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-white">
                <HeartHandshake size={18} className="text-cyan-400" />
                Home Care
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-white">
                <ShieldCheck size={18} className="text-cyan-400" />
                Security
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-white">
                <Sparkles size={18} className="text-cyan-400" />
                Cleaning
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-7 py-4 font-semibold text-white transition hover:bg-cyan-400"
              >
                Book Service
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services/home-care"
                className="rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden justify-center lg:flex">
            <div className="relative">
              <div className="absolute inset-0 rounded-[40px] bg-cyan-500/20 blur-3xl" />

              <img
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=900&q=80"
                alt="Professional Service"
                className="relative h-[520px] w-[430px] rounded-[40px] object-cover shadow-2xl"
              />

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-sm text-slate-300">Emergency Support</p>
              </div>

              {/* Floating Card */}
              <div className="absolute -top-8 -right-8 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm text-slate-300">Verified Staff</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/40">
          <div className="mt-2 h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
        </div>
      </div>
    </section>
  );
}
