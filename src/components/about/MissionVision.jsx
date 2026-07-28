"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-500/20 px-5 py-2 text-sm font-semibold text-cyan-300">
            Mission & Vision
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Driven by Purpose,
            <span className="text-cyan-400"> Focused on Excellence</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Everything we do is guided by a commitment to quality,
            professionalism, compassion, and long-term trust.
          </p>
        </motion.div>

        {/* Mission + Vision */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-500 text-white">
              <Target size={38} />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-white">Our Mission</h3>

            <p className="mt-6 leading-8 text-slate-300">
              To provide dependable Home Care, Security, and Cleaning Services
              through trained professionals who deliver every service with
              compassion, integrity, and professionalism while ensuring complete
              customer satisfaction.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-slate-200">
                <ShieldCheck className="text-cyan-400" size={20} />
                Professional & Verified Staff
              </div>

              <div className="flex items-center gap-3 text-slate-200">
                <HeartHandshake className="text-cyan-400" size={20} />
                Customer-Centered Care
              </div>

              <div className="flex items-center gap-3 text-slate-200">
                <Sparkles className="text-cyan-400" size={20} />
                High Quality Service
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] bg-gradient-to-br from-cyan-600 to-blue-700 p-10 shadow-2xl"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-cyan-600">
              <Eye size={38} />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-white">Our Vision</h3>

            <p className="mt-6 leading-8 text-cyan-50">
              To become the most trusted and preferred service provider by
              setting new standards in quality, safety, and innovation while
              positively impacting the lives of families and businesses across
              Kerala and beyond.
            </p>

            <div className="mt-10 flex items-center gap-3 text-white">
              <ArrowRight size={20} />
              <span className="font-semibold">
                Growing with Trust, Quality & Innovation
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
