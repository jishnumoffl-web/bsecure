"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, ShieldCheck, Award } from "lucide-react";
import CountUp from "react-countup";

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    title: "Happy Families",
    description: "Trusted by families for compassionate home care and support.",
  },
  {
    icon: Briefcase,
    value: 1000,
    suffix: "+",
    title: "Projects Completed",
    description:
      "Successfully delivered cleaning and facility service projects.",
  },
  {
    icon: ShieldCheck,
    value: 150,
    suffix: "+",
    title: "Professional Staff",
    description:
      "Experienced caregivers, security guards, and cleaning experts.",
  },
  {
    icon: Award,
    value: 24,
    suffix: "/7",
    title: "Customer Support",
    description: "Reliable assistance whenever you need our services.",
  },
];

export default function Achievements() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 py-24">
      {/* Background Effects */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-500/20 px-5 py-2 text-sm font-semibold text-cyan-300">
            Our Achievements
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Delivering
            <span className="text-cyan-400"> Excellence Every Day</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Every project we complete reflects our commitment to quality,
            professionalism, and customer satisfaction.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-white transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-5xl font-black text-white">
                  <CountUp
                    end={item.value}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {item.suffix}
                </h3>

                <h4 className="mt-4 text-xl font-bold text-white">
                  {item.title}
                </h4>

                <p className="mt-3 leading-7 text-slate-300">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[32px] border border-cyan-500/20 bg-white/5 p-10 text-center backdrop-blur-xl lg:p-14"
        >
          <h3 className="text-3xl font-black text-white">
            "Excellence isn't just our goal—it's our standard."
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Whether it's compassionate home care, dependable security, or
            professional cleaning, our team is committed to delivering
            exceptional service that exceeds expectations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
