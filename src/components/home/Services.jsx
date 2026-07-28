"use client";

import Link from "next/link";
import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Home Care Services",
    description:
      "Compassionate home care for elderly, patient care, baby care, hospital bystander and post-operative support.",
    icon: HeartHandshake,
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
    href: "/services/home-care",
  },
  {
    title: "Security Services",
    description:
      "Professional security guards for homes, apartments, hospitals, offices, industries and events.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    href: "/services/security",
  },
  {
    title: "Cleaning Services",
    description:
      "Premium home, office and commercial deep cleaning using trained professionals and modern equipment.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    href: "/services/cleaning",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Complete Professional
            <span className="text-cyan-600"> Service Solutions</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We deliver trusted care, security and cleaning services with
            experienced professionals committed to your safety, comfort and
            peace of mind.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-white shadow-xl">
                    <Icon size={28} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-600 transition-all duration-300 hover:gap-3"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/services/home-care"
            className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-cyan-600"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
