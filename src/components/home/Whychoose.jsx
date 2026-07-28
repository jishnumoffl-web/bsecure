"use client";

import {
  ShieldCheck,
  Clock3,
  Users,
  BadgeCheck,
  PhoneCall,
  BriefcaseBusiness,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Professionals",
    description:
      "Every caregiver, security guard, and cleaning staff member is carefully verified and professionally trained.",
  },
  {
    icon: Clock3,
    title: "24/7 Availability",
    description:
      "Round-the-clock support with quick response whenever you need our services.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Years of experience delivering reliable services for homes, hospitals, and businesses.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Guaranteed",
    description:
      "We focus on professionalism, customer satisfaction, and consistent service quality.",
  },
  {
    icon: PhoneCall,
    title: "Fast Response",
    description:
      "Easy booking process with dedicated customer support from inquiry to completion.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Affordable Pricing",
    description:
      "Transparent pricing with no hidden charges for all our professional services.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-cyan-500/20 px-5 py-2 text-sm font-semibold text-cyan-400">
            Why Choose BSECURE
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Trusted by Families &
            <span className="text-cyan-400"> Businesses</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            We combine professionalism, compassion, and reliability to deliver
            high-quality home care, security, and cleaning services tailored to
            your needs.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
