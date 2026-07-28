"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Elder Care",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200&auto=format&fit=crop",
    description:
      "Professional caregivers providing companionship, daily assistance, medication reminders, mobility support, and personal care to help seniors live comfortably at home.",
    features: [
      "Personal Hygiene Assistance",
      "Medication Reminders",
      "Mobility Support",
      "Meal Preparation",
    ],
  },
  {
    title: "Patient Care",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    description:
      "Dedicated caregivers assisting patients recovering from illness, injury, or surgery with personalized care plans and continuous monitoring.",
    features: [
      "Post-Hospital Care",
      "Bedside Assistance",
      "Daily Monitoring",
      "Recovery Support",
    ],
  },
  {
    title: "Baby Care",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
    description:
      "Experienced caregivers offering safe and loving newborn and infant care, helping parents with feeding, hygiene, sleep routines, and overall well-being.",
    features: [
      "Newborn Care",
      "Feeding Assistance",
      "Baby Hygiene",
      "Sleep Routine Support",
    ],
  },
];

export default function HomeCareServices() {
  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Our Home Care Services
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Personalized Care for
            <span className="text-cyan-600"> Every Stage of Life</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our trained caregivers provide compassionate and reliable support
            tailored to every individual's unique needs.
          </p>
        </motion.div>

        {/* Services */}
        <div className="mt-20 space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-[32px] shadow-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-[450px] w-full object-cover transition duration-700 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-4xl font-black text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="text-cyan-600" size={20} />

                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-cyan-600 px-7 py-4 font-semibold text-white transition hover:bg-cyan-500"
                >
                  Book This Service
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
