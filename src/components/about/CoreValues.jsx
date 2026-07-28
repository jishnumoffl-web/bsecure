"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Gem, Users } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and accountability in every interaction, earning the trust of our clients and communities.",
  },
  {
    icon: HeartHandshake,
    title: "Compassion",
    description:
      "Every individual deserves respect and care. We deliver our services with empathy, kindness, and genuine commitment.",
  },
  {
    icon: Gem,
    title: "Excellence",
    description:
      "We continuously improve our standards, ensuring high-quality service, attention to detail, and customer satisfaction.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Our strength comes from collaboration. We work together to provide reliable solutions and exceptional customer experiences.",
  },
];

export default function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Decoration */}
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-100 blur-3xl opacity-50" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Our Core Values
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            The Principles That
            <span className="text-cyan-600"> Guide Every Service</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our values shape every decision we make and every service we
            deliver. They are the foundation of our commitment to clients,
            employees, and the communities we serve.
          </p>
        </motion.div>

        {/* Value Cards */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-600 text-white transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[32px] bg-slate-900 p-10 text-center"
        >
          <h3 className="text-3xl font-bold text-white">
            More Than Services — We Build Lasting Relationships
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Every member of the BSECURE team is committed to these values,
            ensuring every client receives dependable support, professional
            service, and complete peace of mind.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
