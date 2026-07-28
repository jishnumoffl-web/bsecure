"use client";

import Link from "next/link";
import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Home Care",
    description:
      "Compassionate caregivers for elderly care, patient care, baby care and hospital bystander services.",
    icon: HeartHandshake,
  },
  {
    title: "Security Services",
    description:
      "Professional, trained and verified security guards for homes, offices, hospitals and commercial spaces.",
    icon: ShieldCheck,
  },
  {
    title: "Cleaning Services",
    description:
      "Premium residential and commercial cleaning with modern equipment and experienced professionals.",
    icon: Sparkles,
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Decoration */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-cyan-100 opacity-60 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-100 opacity-60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 font-semibold text-cyan-700">
              About BSECURE
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 lg:text-5xl">
              Trusted Professionals for
              <span className="text-cyan-600"> Care, Security & Cleaning</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              BSECURE is committed to providing dependable, high-quality
              services that improve the lives of families and businesses. Our
              trained, verified professionals ensure safety, comfort, and peace
              of mind through personalized care and reliable support.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Verified & Experienced Professionals",
                "24/7 Customer Support",
                "Affordable & Transparent Pricing",
                "Reliable & On-Time Service",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={22} className="text-cyan-600" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-4 font-semibold text-white transition hover:bg-cyan-600"
            >
              Learn More
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right */}
          <div className="grid gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-2xl"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-white transition-transform duration-300 group-hover:scale-110">
                      <Icon size={30} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {service.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
