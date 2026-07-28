"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

const gallery = [
  {
    title: "Elder Care",
    category: "Home Care",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Patient Care",
    category: "Home Care",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Office Security",
    category: "Security",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Apartment Security",
    category: "Security",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Deep Cleaning",
    category: "Cleaning",
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Office Cleaning",
    category: "Cleaning",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function GalleryGrid() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Gallery
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Our Work in
            <span className="text-cyan-600"> Action</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Browse a selection of our home care, security, and cleaning projects
            that showcase our commitment to quality and professionalism.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[28px] shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

              {/* Category */}
              <div className="absolute left-5 top-5 rounded-full bg-cyan-600 px-4 py-2 text-xs font-semibold text-white">
                {item.category}
              </div>

              {/* Hover Icon */}
              <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                <Search className="text-white" size={20} />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>

                <p className="mt-2 text-sm text-slate-200">
                  Professional {item.category.toLowerCase()} services with
                  trusted quality and experienced staff.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
