"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Factory,
  Building,
  CalendarDays,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Security",
    description:
      "Professional security guards to protect villas, apartments, gated communities, and residential properties.",
    features: ["24/7 Guarding", "Visitor Management", "Gate Security"],
  },
  {
    icon: Building2,
    title: "Commercial Security",
    description:
      "Reliable security solutions for offices, retail stores, shopping centers, and commercial establishments.",
    features: ["Access Control", "Patrolling", "Emergency Response"],
  },
  {
    icon: Factory,
    title: "Industrial Security",
    description:
      "Highly trained guards ensuring safety for factories, warehouses, logistics hubs, and manufacturing facilities.",
    features: ["Asset Protection", "Shift Security", "Risk Prevention"],
  },
  {
    icon: Building,
    title: "Apartment Security",
    description:
      "Dedicated security staff for apartment complexes with visitor management and surveillance support.",
    features: ["Entry Monitoring", "Resident Safety", "Night Patrol"],
  },
  {
    icon: CalendarDays,
    title: "Event Security",
    description:
      "Professional crowd management and event security for corporate functions, weddings, festivals, and public events.",
    features: ["Crowd Control", "VIP Protection", "Emergency Coordination"],
  },
  {
    icon: Briefcase,
    title: "Corporate Security",
    description:
      "End-to-end security services for corporate offices, campuses, and business facilities.",
    features: ["Reception Security", "Access Verification", "Employee Safety"],
  },
];

export default function SecuritySolutions() {
  return (
    <section
      id="security-services"
      className="relative overflow-hidden bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Our Security Solutions
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Complete Security
            <span className="text-cyan-600"> For Every Environment</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We provide tailored security services for homes, businesses,
            industries, apartments, and special events with trained
            professionals committed to your safety.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-600 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={30} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-cyan-600" />

                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:text-cyan-700"
                >
                  Request Service
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
