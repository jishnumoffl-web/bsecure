"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  Clock3,
  UserCheck,
  Stethoscope,
  BadgeCheck,
} from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Verified Caregivers",
    description:
      "Every caregiver is carefully selected, background verified, and professionally trained to provide safe and compassionate care.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Support",
    description:
      "We treat every client with dignity, respect, patience, and kindness while ensuring emotional and physical well-being.",
  },
  {
    icon: Clock3,
    title: "24/7 Availability",
    description:
      "Whether you need short-term assistance or long-term care, our team is available whenever you need us.",
  },
  {
    icon: Stethoscope,
    title: "Personalized Care Plans",
    description:
      "Every care plan is tailored to the individual's medical condition, lifestyle, and personal preferences.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Strict quality standards and continuous supervision ensure a safe and reliable caregiving experience.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted by Families",
    description:
      "Hundreds of families rely on our dedicated team for dependable home care and complete peace of mind.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-500/20 px-5 py-2 text-sm font-semibold text-cyan-300">
            Why Choose FORCE
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Trusted Home Care
            <span className="text-cyan-400"> You Can Rely On</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            We combine professional expertise with genuine compassion to provide
            dependable home care services that improve quality of life and give
            families complete confidence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-white/10"
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

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[32px] bg-gradient-to-r from-cyan-600 to-blue-700 p-10 text-center shadow-2xl lg:p-14"
        >
          <h3 className="text-3xl font-black text-white">
            Your Loved Ones Deserve the Best Care
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cyan-100">
            At FORCE, we don't just provide caregivers—we build relationships
            based on trust, compassion, and professionalism, ensuring every
            family receives the care and support they deserve.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
