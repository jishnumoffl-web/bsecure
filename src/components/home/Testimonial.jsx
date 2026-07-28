"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anil Kumar",
    role: "Home Care Client",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    review:
      "The caregiver was professional, compassionate, and punctual. Our family felt completely supported throughout the service.",
  },
  {
    name: "Priya Nair",
    role: "Cleaning Service",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    review:
      "The deep cleaning service exceeded our expectations. The team was friendly, efficient, and paid attention to every detail.",
  },
  {
    name: "Rahul Menon",
    role: "Security Service",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    review:
      "Reliable security staff with excellent professionalism. We highly recommend FORCE for commercial security services.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-500/20 px-5 py-2 text-sm font-semibold text-cyan-400">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            What Our Clients Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Our greatest achievement is the trust and satisfaction of our
            clients.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-white/10"
            >
              <Quote className="text-cyan-400" size={36} />

              <p className="mt-6 leading-8 text-slate-300">"{item.review}"</p>

              <div className="mt-8 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Rating */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 text-white shadow-xl">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  className="fill-yellow-300 text-yellow-300"
                />
              ))}
            </div>

            <span className="font-semibold">
              Rated 4.9/5 by Hundreds of Happy Clients
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
