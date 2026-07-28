"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, ShieldCheck, MapPin } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5,000+",
    label: "Happy Clients",
  },
  {
    icon: Briefcase,
    value: "1,200+",
    label: "Projects Completed",
  },
  {
    icon: ShieldCheck,
    value: "250+",
    label: "Professional Staff",
  },
  {
    icon: MapPin,
    value: "4",
    label: "Service Locations",
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 py-24">
      {/* Background circles */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Our Achievements
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Numbers That Build Trust
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-cyan-100">
            We are proud to serve families, hospitals and businesses with
            reliable professional services across Kerala.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-lg border border-white/20 hover:bg-white/20 transition"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-cyan-600">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-5xl font-black text-white">
                  {item.value}
                </h3>

                <p className="mt-3 text-cyan-100">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
