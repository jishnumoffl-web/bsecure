"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, HeartHandshake } from "lucide-react";

const highlights = [
  "Experienced & Verified Professionals",
  "24/7 Customer Support",
  "Trusted Home Care Solutions",
  "Reliable Security & Cleaning Services",
];

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-60" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-sky-100 blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=900&q=80"
              alt="Professional Team"
              className="h-[520px] w-full rounded-[30px] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-8 -right-8 hidden rounded-3xl bg-slate-900 p-6 text-white shadow-xl md:block">
              <p className="text-4xl font-black text-cyan-400">10+</p>
              <p className="mt-1 text-sm text-slate-300">
                Years of Trusted Service
              </p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Our Story
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              Dedicated to Caring,
              <span className="text-cyan-600"> Protecting & Serving</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              At <strong>BSECURE</strong>, we believe every family and business
              deserves dependable support. From compassionate home care and
              professional security to high-quality cleaning services, our team
              is committed to delivering excellence with integrity and respect.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Our mission is to build long-term relationships by providing
              reliable professionals, personalized solutions, and exceptional
              customer service that creates peace of mind every day.
            </p>

            {/* Highlights */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-cyan-600" size={22} />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Mini Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-slate-50 p-5 text-center shadow-sm">
                <Users className="mx-auto text-cyan-600" size={28} />
                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  5000+
                </h3>
                <p className="text-sm text-slate-600">Clients</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5 text-center shadow-sm">
                <Award className="mx-auto text-cyan-600" size={28} />
                <h3 className="mt-3 text-2xl font-bold text-slate-900">10+</h3>
                <p className="text-sm text-slate-600">Years</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5 text-center shadow-sm">
                <HeartHandshake className="mx-auto text-cyan-600" size={28} />
                <h3 className="mt-3 text-2xl font-bold text-slate-900">24/7</h3>
                <p className="text-sm text-slate-600">Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
