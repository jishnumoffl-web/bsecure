"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Clock3,
  BadgeCheck,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Licensed & Verified Guards",
    description:
      "Every security professional is carefully selected, background verified, and trained to maintain the highest standards of safety.",
  },
  {
    icon: Clock3,
    title: "24/7 Protection",
    description:
      "Round-the-clock security solutions with quick response and continuous monitoring for complete peace of mind.",
  },
  {
    icon: Users,
    title: "Customized Security Plans",
    description:
      "We assess every site and create security strategies based on your property's unique requirements.",
  },
];

export default function AboutSecurity() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background */}
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-100 blur-3xl opacity-50" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop"
              alt="Security Services"
              className="h-[600px] w-full rounded-[32px] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-8 left-8 rounded-3xl bg-white p-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-cyan-600 p-4 text-white">
                  <BadgeCheck size={28} />
                </div>

                <div>
                  <h3 className="text-3xl font-black text-slate-900">500+</h3>

                  <p className="text-slate-600">Locations Protected</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
              About Our Security Services
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
              Professional Protection
              <span className="text-cyan-600"> You Can Trust</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              FORCE Security Services delivers dependable protection for
              residential communities, businesses, industries, institutions, and
              special events through highly trained and disciplined security
              professionals.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our mission is to create a secure environment by combining
              experienced personnel, proactive monitoring, and rapid response
              strategies that reduce risks and ensure complete peace of mind.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-5 rounded-2xl border border-slate-200 p-5 transition hover:border-cyan-500 hover:shadow-lg"
                  >
                    <div className="rounded-2xl bg-cyan-600 p-4 text-white">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Points */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Residential Security",
                "Commercial Security",
                "Industrial Security",
                "Event Security",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-cyan-600" />

                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
