"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Clock3,
  ScanSearch,
  Radio,
  Users,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Licensed & Verified Guards",
    description:
      "Every security professional is background verified, well-trained, and committed to maintaining the highest standards of safety.",
  },
  {
    icon: Clock3,
    title: "24/7 Protection",
    description:
      "Continuous security coverage with rapid response to incidents, ensuring peace of mind around the clock.",
  },
  {
    icon: ScanSearch,
    title: "Risk Assessment",
    description:
      "We evaluate your property and develop customized security strategies based on your specific risks and requirements.",
  },
  {
    icon: Radio,
    title: "Quick Response Team",
    description:
      "Our personnel are equipped to respond quickly and efficiently to emergencies and security incidents.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description:
      "Disciplined, courteous, and experienced guards who represent your organization with professionalism.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Protection",
    description:
      "Our commitment to reliability and vigilance has earned the trust of homes, businesses, and institutions.",
  },
];

export default function WhyChooseSecurity() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Effects */}
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
            Why Choose FORCE Security
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Security Built On
            <span className="text-cyan-400"> Trust & Excellence</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Our experienced team combines training, discipline, and advanced
            security practices to deliver dependable protection for every
            client.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-white transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {reason.description}
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
          className="mt-20 overflow-hidden rounded-[32px] bg-gradient-to-r from-cyan-600 to-blue-700 p-10 shadow-2xl lg:p-14"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-black text-white">
                Your Safety Is Our Priority
              </h3>

              <p className="mt-5 text-lg leading-8 text-cyan-100">
                We don't just deploy security personnel—we deliver confidence,
                vigilance, and professional protection tailored to your
                environment.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Licensed & verified security personnel",
                "24/7 security coverage",
                "Customized protection plans",
                "Rapid emergency response",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm"
                >
                  <CheckCircle2 size={20} className="text-white" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
