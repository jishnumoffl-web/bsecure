"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  Users,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Caregivers",
    description:
      "Professionally trained, experienced, and background-verified caregivers.",
  },
  {
    icon: Clock3,
    title: "24/7 Assistance",
    description:
      "Flexible care plans available for hourly, daily, and round-the-clock support.",
  },
  {
    icon: Users,
    title: "Personalized Care",
    description:
      "Every care plan is tailored to the individual's health, comfort, and lifestyle.",
  },
];

export default function AboutHomeCare() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Blur */}
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-100 blur-3xl opacity-60" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-sky-100 blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop"
              alt="Professional Home Care"
              className="h-[600px] w-full rounded-[32px] object-cover shadow-2xl"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-8 left-8 rounded-3xl bg-white p-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-cyan-500 p-4">
                  <HeartHandshake className="text-white" size={28} />
                </div>

                <div>
                  <h3 className="text-3xl font-black text-slate-900">5000+</h3>
                  <p className="text-slate-600">Families Trusted Us</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
              About Our Home Care
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
              Compassionate Care,
              <span className="text-cyan-600"> Right Where It Matters</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              At FORCE, we understand that every individual deserves care with
              dignity, respect, and compassion. Our professional caregivers
              provide reliable assistance for seniors, patients, newborns, and
              individuals recovering at home.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              From short-term support to long-term care, our services are
              designed to give families confidence and peace of mind while
              improving the quality of life for their loved ones.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-6">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-5 rounded-2xl border border-slate-200 p-5 transition hover:border-cyan-500 hover:shadow-lg"
                  >
                    <div className="rounded-2xl bg-cyan-500 p-4 text-white">
                      <Icon size={26} />
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

            {/* Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-5">
              {[
                "Elder Care",
                "Patient Care",
                "Baby Care",
                "Hospital Bystander",
              ].map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <CheckCircle2 className="text-cyan-600" size={20} />

                  <span className="font-medium text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
