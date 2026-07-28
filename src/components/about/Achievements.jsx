"use client";

import { motion } from "framer-motion";
import {
  Users,
  BadgeCheck,
  MapPinned,
  BriefcaseBusiness,
  Award,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5,000+",
    label: "Happy Clients",
  },
  {
    icon: BriefcaseBusiness,
    value: "10+",
    label: "Years Experience",
  },
  {
    icon: BadgeCheck,
    value: "250+",
    label: "Verified Professionals",
  },
  {
    icon: MapPinned,
    value: "4+",
    label: "Service Locations",
  },
];

const achievements = [
  "Trusted by thousands of families and businesses",
  "24/7 customer support with quick response",
  "Professionally trained and background-verified staff",
  "High customer satisfaction through quality service",
];

export default function Achievements() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background */}
      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-500/20 px-5 py-2 text-sm font-semibold text-cyan-300">
            Our Achievements
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Numbers That Reflect
            <span className="text-cyan-400"> Our Commitment</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Every milestone represents our dedication to delivering dependable,
            professional, and compassionate services.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-[30px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-white transition group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-5xl font-black text-white">
                  {item.value}
                </h3>

                <p className="mt-3 text-slate-300">{item.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Grid */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-black text-white">
              Why Thousands Choose BSECURE
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              We continue to grow by maintaining high standards of quality,
              transparency, and professionalism in every service we provide.
            </p>

            <div className="mt-10 space-y-5">
              {achievements.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-cyan-500 p-2">
                    <Award size={16} className="text-white" />
                  </div>

                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[35px] bg-gradient-to-br from-cyan-600 to-blue-700 p-10 shadow-2xl"
          >
            <Star className="text-yellow-300" size={50} />

            <h3 className="mt-6 text-3xl font-black text-white">
              Customer Satisfaction
            </h3>

            <p className="mt-6 text-cyan-50 leading-8">
              Our success is measured by the trust our clients place in us.
              Every service is delivered with professionalism, compassion,
              reliability, and attention to detail.
            </p>

            <div className="mt-10 flex items-end gap-4">
              <h2 className="text-7xl font-black text-white">98%</h2>

              <p className="pb-3 text-cyan-100">Client Satisfaction Rate</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
