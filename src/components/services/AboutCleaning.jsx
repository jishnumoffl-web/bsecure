"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Clock3,
  Leaf,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Professional Cleaning Experts",
    description:
      "Our trained cleaning professionals use proven techniques and modern equipment to deliver outstanding results for every space.",
  },
  {
    icon: Leaf,
    title: "Safe & Eco-Friendly",
    description:
      "We use quality cleaning products that are effective, environmentally responsible, and safe for families, employees, and visitors.",
  },
  {
    icon: Clock3,
    title: "Reliable & Flexible Service",
    description:
      "Whether you need one-time cleaning or recurring maintenance, we work around your schedule with dependable service.",
  },
];

export default function AboutCleaning() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Effects */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-cyan-100 blur-3xl opacity-60" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sky-100 blur-3xl opacity-60" />

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
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200&auto=format&fit=crop"
              alt="Professional Cleaning"
              className="h-[600px] w-full rounded-[32px] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-8 left-8 rounded-3xl bg-white p-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-cyan-600 p-4 text-white">
                  <ShieldCheck size={28} />
                </div>

                <div>
                  <h3 className="text-3xl font-black text-slate-900">1000+</h3>
                  <p className="text-slate-600">Happy Cleaning Projects</p>
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
              About Our Cleaning Services
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
              Creating Cleaner Spaces for
              <span className="text-cyan-600"> Better Living</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              At FORCE Cleaning Services, we provide professional cleaning
              solutions for homes, offices, apartments, commercial spaces, and
              industrial facilities. Our focus is on quality, consistency, and
              customer satisfaction.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              From routine housekeeping to deep cleaning and post-construction
              cleanup, our experienced team ensures every corner is cleaned with
              care, precision, and attention to detail.
            </p>

            {/* Feature Cards */}
            <div className="mt-10 space-y-5">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-5 rounded-2xl border border-slate-200 p-5 transition hover:border-cyan-500 hover:shadow-xl"
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

            {/* Services List */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Home Cleaning",
                "Office Cleaning",
                "Deep Cleaning",
                "Move In / Move Out",
                "Sanitization",
                "Post Construction Cleaning",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-cyan-600" size={20} />
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
