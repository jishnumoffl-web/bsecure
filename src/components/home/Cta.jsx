"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, CalendarCheck } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-r from-cyan-600 to-blue-700 p-10 shadow-2xl lg:p-16"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
                Let's Get Started
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
                Ready to Experience
                <span className="block">Professional Care & Security?</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-cyan-50">
                Whether you need compassionate home care, dependable security,
                or professional cleaning services, our experienced team is ready
                to help you today.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-cyan-700 transition hover:scale-105"
                >
                  <CalendarCheck size={20} />
                  Book a Service
                </Link>

                <Link
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  <Phone size={20} />
                  Call Now
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="grid gap-5">
              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-lg">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-cyan-600">
                    <Phone size={26} />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white">
                      Call Us Anytime
                    </h4>
                    <p className="text-cyan-100">+91 98765 43210</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-lg">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-cyan-600">
                    <MessageCircle size={26} />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white">
                      WhatsApp Support
                    </h4>
                    <p className="text-cyan-100">
                      Quick replies & instant assistance
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-lg">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-cyan-600">
                    <CalendarCheck size={26} />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white">
                      Flexible Scheduling
                    </h4>
                    <p className="text-cyan-100">
                      Book services at your preferred time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
