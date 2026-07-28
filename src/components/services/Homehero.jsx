"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeartHandshake, ArrowRight, ShieldCheck, Clock3 } from "lucide-react";

export default function HomeCareHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Gradient Blobs */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-20 lg:px-8">
        <div className="w-full max-w-4xl xl:max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur">
              <HeartHandshake size={16} />
              Professional Home Care Services
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Compassionate Care
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Right At Your Home
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Our experienced caregivers provide compassionate and professional
              support for seniors, patients, newborns, and individuals
              recovering from illness or surgery. We are committed to delivering
              personalized care that ensures comfort, dignity, and peace of mind
              for every family.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                Book a Caregiver
                <ArrowRight size={18} />
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>

            {/* Feature Cards */}
            <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl transition duration-300 hover:border-cyan-400 hover:bg-white/15">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-cyan-500 p-4">
                    <ShieldCheck className="text-white" size={26} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Verified Caregivers
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Every caregiver is professionally trained, background
                      verified, and committed to providing compassionate,
                      reliable, and high-quality care.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl transition duration-300 hover:border-cyan-400 hover:bg-white/15">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-cyan-500 p-4">
                    <Clock3 className="text-white" size={26} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      24/7 Care Support
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Whether it's day or night, our dedicated support team is
                      always available to ensure continuous care whenever your
                      family needs assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-14 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              <div>
                <h2 className="text-3xl font-black text-cyan-400">10+</h2>
                <p className="mt-1 text-sm text-slate-300">
                  Years of Experience
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-cyan-400">5000+</h2>
                <p className="mt-1 text-sm text-slate-300">Happy Families</p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-cyan-400">24/7</h2>
                <p className="mt-1 text-sm text-slate-300">Emergency Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
