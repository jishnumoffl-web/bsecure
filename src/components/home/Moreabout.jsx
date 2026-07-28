"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, ShieldCheck, Clock3 } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5,000+",
    label: "Happy Clients",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Verified Staff",
  },
  {
    icon: Award,
    value: "10+",
    label: "Years Experience",
  },
  {
    icon: Clock3,
    value: "24/7",
    label: "Support",
  },
];

export default function About() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
              alt="Care Team"
              className="h-[520px] w-full rounded-[30px] object-cover shadow-2xl"
            />

            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
              alt="Cleaning"
              className="absolute -bottom-8 -right-8 hidden h-60 w-48 rounded-3xl border-8 border-white object-cover shadow-xl md:block"
            />

            <div className="absolute left-6 top-6 rounded-2xl bg-white p-5 shadow-xl">
              <p className="text-3xl font-black text-cyan-600">10+</p>
              <p className="text-sm text-slate-600">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              About FORCE
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              Delivering Trusted Services with
              <span className="text-cyan-600"> Care & Commitment</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              FORCE provides reliable Home Care, Security Services and
              Professional Cleaning with a customer-first approach. Our trained
              team is committed to delivering safe, dependable and high-quality
              solutions for families, hospitals, offices and businesses.
            </p>

            <p className="mt-6 text-slate-600 leading-7">
              Every professional is carefully selected and trained to maintain
              the highest standards of quality, professionalism and customer
              satisfaction.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-5">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-white p-5 shadow-md"
                  >
                    <Icon className="mb-3 text-cyan-600" size={28} />
                    <h3 className="text-3xl font-black text-slate-900">
                      {item.value}
                    </h3>
                    <p className="mt-1 text-slate-600">{item.label}</p>
                  </div>
                );
              })}
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-cyan-600 px-8 py-4 font-semibold text-white transition hover:bg-cyan-700"
            >
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
