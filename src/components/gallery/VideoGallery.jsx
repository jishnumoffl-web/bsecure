"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";

const videos = [
  {
    title: "Professional Home Care",
    description:
      "See how our caregivers provide compassionate and personalized support for seniors and patients.",
    thumbnail:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    duration: "2:35",
    href: "#",
  },
  {
    title: "Security Services",
    description:
      "Watch our trained security professionals protecting residential and commercial properties.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    duration: "3:18",
    href: "#",
  },
  {
    title: "Professional Cleaning",
    description:
      "Discover how our expert team transforms homes and workplaces into spotless environments.",
    thumbnail:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1200&auto=format&fit=crop",
    duration: "2:12",
    href: "#",
  },
];

export default function VideoGallery() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-500/20 px-5 py-2 text-sm font-semibold text-cyan-300">
            Video Gallery
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            See Our Team
            <span className="text-cyan-400"> In Action</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Explore videos showcasing our professional home care, security, and
            cleaning services in real environments.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-slate-900"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/20" />

                {/* Play Button */}
                <Link
                  href={video.href}
                  className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cyan-500 text-white shadow-2xl transition duration-300 group-hover:scale-110"
                >
                  <Play className="ml-1" size={32} fill="white" />
                </Link>

                {/* Duration */}
                <span className="absolute bottom-5 right-5 rounded-full bg-black/70 px-3 py-1 text-sm text-white backdrop-blur">
                  {video.duration}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white">{video.title}</h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {video.description}
                </p>

                <Link
                  href={video.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  Watch Video
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
