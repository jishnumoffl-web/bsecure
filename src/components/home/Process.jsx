"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  ClipboardCheck,
  UserCheck,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Contact Us",
    description:
      "Call us or submit an enquiry through our website. Our team will understand your requirements.",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "Choose Your Service",
    description:
      "Select Home Care, Security, or Cleaning services based on your needs and preferred schedule.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Professional Assignment",
    description:
      "We assign trained and verified professionals who best match your service requirements.",
    icon: UserCheck,
  },
  {
    number: "04",
    title: "Service Delivered",
    description:
      "Relax while our experienced team delivers high-quality service with complete professionalism.",
    icon: CheckCircle2,
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-60" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Simple, Fast &
            <span className="text-cyan-600"> Reliable Process</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Booking our services is quick and hassle-free. From your first
            enquiry to successful service completion, we make every step smooth.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Desktop Line */}
          <div className="absolute left-0 right-0 top-10 hidden h-1 bg-gradient-to-r from-cyan-500 to-blue-600 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative text-center"
                >
                  {/* Icon */}
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cyan-600 text-white shadow-xl">
                    <Icon size={34} />
                  </div>

                  {/* Step Number */}
                  <p className="mt-6 text-sm font-bold tracking-[0.3em] text-cyan-600">
                    STEP {step.number}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-slate-900 px-8 py-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white">
            Ready to Get Started?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Whether you need compassionate home care, dependable security, or
            professional cleaning, our team is ready to help.
          </p>

          <button className="mt-8 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-400">
            Book Your Service
          </button>
        </motion.div>
      </div>
    </section>
  );
}
