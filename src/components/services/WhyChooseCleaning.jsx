"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Leaf,
  Clock3,
  BadgeCheck,
  Smile,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Professional Cleaning Experts",
    description:
      "Experienced and trained cleaning professionals delivering exceptional quality with attention to every detail.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description:
      "We use safe, high-quality cleaning products that are effective while being family and environmentally friendly.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable Service",
    description:
      "Our team is verified, trustworthy, and committed to maintaining the highest standards of professionalism.",
  },
  {
    icon: Clock3,
    title: "Flexible Scheduling",
    description:
      "Book one-time, weekly, monthly, or customized cleaning services that fit your lifestyle and business hours.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Guaranteed",
    description:
      "Every cleaning session follows a detailed quality checklist to ensure consistent and spotless results.",
  },
  {
    icon: Smile,
    title: "Customer Satisfaction",
    description:
      "Our priority is delivering a clean, healthy environment while exceeding your expectations every time.",
  },
];

export default function WhyChooseCleaning() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Effects */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-500/20 px-5 py-2 text-sm font-semibold text-cyan-300">
            Why Choose FORCE Cleaning
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            A Higher Standard of
            <span className="text-cyan-400"> Cleanliness</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            We combine skilled professionals, advanced cleaning techniques, and
            reliable service to create healthier, cleaner spaces for homes and
            businesses.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-white transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-[32px] bg-gradient-to-r from-cyan-600 to-blue-700 p-10 shadow-2xl lg:p-14"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-black text-white">
                Let Us Make Your Space Shine
              </h3>

              <p className="mt-5 text-lg leading-8 text-cyan-100">
                From everyday cleaning to specialized deep cleaning, our team
                delivers reliable, high-quality service tailored to your needs.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Experienced cleaning professionals",
                "Eco-friendly cleaning solutions",
                "Flexible booking options",
                "100% quality-focused service",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm"
                >
                  <CheckCircle2 size={20} className="text-white" />
                  <span className="text-white">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
