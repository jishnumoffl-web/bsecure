"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Home Cleaning",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
    description:
      "Complete home cleaning solutions to keep your living space fresh, hygienic, and comfortable.",
    features: [
      "Living Room Cleaning",
      "Kitchen Cleaning",
      "Bathroom Sanitization",
    ],
  },
  {
    title: "Office Cleaning",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    description:
      "Professional workplace cleaning that creates a healthy and productive environment for your team.",
    features: ["Workstations", "Meeting Rooms", "Reception Areas"],
  },
  {
    title: "Deep Cleaning",
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1200&auto=format&fit=crop",
    description:
      "Detailed cleaning of every corner using professional equipment and proven techniques.",
    features: [
      "Floor Scrubbing",
      "High-Touch Surfaces",
      "Complete Disinfection",
    ],
  },
  {
    title: "Move In / Move Out",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    description:
      "Prepare your property before moving in or after moving out with a comprehensive cleaning service.",
    features: [
      "Full Property Cleaning",
      "Kitchen & Bathroom",
      "Ready for Occupancy",
    ],
  },
  {
    title: "Sanitization Services",
    image:
      "https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=1200&auto=format&fit=crop",
    description:
      "Advanced sanitization services to reduce germs and maintain a healthier environment.",
    features: ["Hospital Grade Products", "High-Touch Areas", "Odor Control"],
  },
  {
    title: "Post Construction Cleaning",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    description:
      "Remove construction dust, debris, and residue to make your new space move-in ready.",
    features: ["Dust Removal", "Glass Cleaning", "Final Detailing"],
  },
];

export default function CleaningSolutions() {
  return (
    <section id="cleaning-services" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Our Cleaning Solutions
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Professional Cleaning
            <span className="text-cyan-600"> For Every Space</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether it's your home, office, apartment, or commercial facility,
            our experienced cleaning team delivers spotless results with
            precision and care.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden rounded-[30px] bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-cyan-600" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:text-cyan-700"
                >
                  Book Service
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
