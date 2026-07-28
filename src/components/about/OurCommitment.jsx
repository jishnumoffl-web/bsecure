"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Clock3,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

const commitments = [
  {
    icon: ShieldCheck,
    title: "Verified Professionals",
    description:
      "Every team member undergoes identity verification, background checks, and professional training before joining our workforce.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description:
      "We maintain strict quality standards and continuously monitor our services to ensure complete customer satisfaction.",
  },
  {
    icon: Clock3,
    title: "Reliable Support",
    description:
      "Our support team is always ready to respond quickly, ensuring timely assistance whenever our clients need us.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description:
      "We believe in building lasting relationships by providing compassionate, dependable, and personalized services.",
  },
];

export default function OurCommitment() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Decorative Background */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-100 blur-3xl opacity-50" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-sky-100 blur-3xl opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Our Commitment
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Promising Quality,
            <span className="text-cyan-600"> Delivering Excellence</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every service we provide is backed by our commitment to quality,
            safety, professionalism, and customer satisfaction.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {commitments.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-600 text-white transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Promise Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-[36px] bg-gradient-to-r from-cyan-600 to-blue-700 p-10 text-white shadow-2xl lg:p-14"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-4xl font-black">
                Our Promise to Every Client
              </h3>

              <p className="mt-6 text-lg leading-8 text-cyan-100">
                We don't just provide services—we build trust through
                professionalism, compassion, and consistent quality. Your
                safety, comfort, and satisfaction are at the heart of everything
                we do.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "Professional & trained staff",
                "Transparent communication",
                "Quick response & reliable support",
                "Safe, ethical & quality-focused service",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm"
                >
                  <CheckCircle2 className="text-white" size={22} />
                  <span className="text-lg">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
