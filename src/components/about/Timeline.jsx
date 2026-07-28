"use client";

import { motion } from "framer-motion";
import { Flag, Building2, Users, ShieldCheck, Trophy } from "lucide-react";

const timeline = [
  {
    year: "2016",
    title: "Company Founded",
    description:
      "BSECURE was established with a vision to provide trusted and professional support services to families and businesses.",
    icon: Flag,
  },
  {
    year: "2018",
    title: "Home Care Expansion",
    description:
      "Expanded into elderly care, patient care, baby care and hospital bystander services with trained caregivers.",
    icon: Users,
  },
  {
    year: "2020",
    title: "Security Division",
    description:
      "Introduced professional security services for residential, commercial and industrial clients.",
    icon: ShieldCheck,
  },
  {
    year: "2022",
    title: "Cleaning Services",
    description:
      "Launched residential and commercial cleaning services with modern equipment and experienced staff.",
    icon: Building2,
  },
  {
    year: "Today",
    title: "Growing Every Day",
    description:
      "Continuing to serve thousands of customers with quality, professionalism and customer satisfaction.",
    icon: Trophy,
  },
];

export default function Timeline() {
  return (
    <section className="relative bg-slate-50 py-24 overflow-hidden">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-100 blur-3xl opacity-50" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Our Journey
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Growing With Trust &
            <span className="text-cyan-600"> Excellence</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every milestone reflects our dedication to providing dependable
            services and building lasting relationships with our clients.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Center Line */}
          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 rounded-full bg-cyan-200 lg:block" />

          <div className="space-y-14">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className="w-full lg:w-1/2">
                    <div className="rounded-3xl bg-white p-8 shadow-xl lg:mx-10">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-600 text-white">
                        <Icon size={30} />
                      </div>

                      <p className="mt-6 text-sm font-bold tracking-widest text-cyan-600">
                        {item.year}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="relative hidden lg:flex w-0 items-center justify-center">
                    <div className="absolute flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-cyan-600 shadow-lg" />
                  </div>

                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
