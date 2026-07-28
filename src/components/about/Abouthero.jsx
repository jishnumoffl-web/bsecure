"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative flex h-[60vh] min-h-[500px] items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 to-blue-900/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 inline-flex rounded-full bg-cyan-500/20 px-5 py-2 text-sm font-semibold text-cyan-300">
            About BSECURE
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-tight text-white md:text-7xl">
            Building Trust Through
            <span className="block text-cyan-400">Professional Services</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Learn more about our commitment to delivering exceptional Home Care,
            Security, and Cleaning Services with professionalism, compassion,
            and reliability.
          </p>

          {/* Breadcrumb */}
          <div className="mt-10 flex items-center gap-2 text-sm text-slate-300">
            <Link href="/" className="transition hover:text-cyan-400">
              Home
            </Link>

            <ChevronRight size={16} />

            <span className="text-cyan-400">About Us</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
