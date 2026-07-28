"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-slate-950 text-gray-300">
      {/* Top */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-3xl font-black text-white">BSECURE</h2>

            <p className="mt-5 leading-7 text-gray-400">
              We provide trusted Home Care, Security Services and Cleaning
              Services with experienced professionals dedicated to quality,
              safety and customer satisfaction.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">
              <a
                href="#"
                className="rounded-full border border-white/20 px-4 py-2 text-sm transition hover:bg-cyan-600 hover:border-cyan-600 hover:text-white"
              >
                Facebook
              </a>

              <a
                href="#"
                className="rounded-full border border-white/20 px-4 py-2 text-sm transition hover:bg-cyan-600 hover:border-cyan-600 hover:text-white"
              >
                Instagram
              </a>

              <a
                href="#"
                className="rounded-full border border-white/20 px-4 py-2 text-sm transition hover:bg-cyan-600 hover:border-cyan-600 hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white">Quick Links</h3>

            <ul className="mt-6 space-y-4">
              <li>
                <Link href="/" className="transition hover:text-cyan-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition hover:text-cyan-400">
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="transition hover:text-cyan-400"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/leadership"
                  className="transition hover:text-cyan-400"
                >
                  Leadership
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-cyan-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white">Our Services</h3>

            <ul className="mt-6 space-y-4">
              <li>Home Care Service</li>
              <li>Patient Care</li>
              <li>Elder Care</li>
              <li>Security Service</li>
              <li>Cleaning Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white">Contact Info</h3>

            <div className="mt-6 space-y-6">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 text-cyan-400" size={18} />
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p>+91 9447272000 | +91 9207273700</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 text-cyan-400" size={18} />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p>bsecurechmd@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-cyan-400" size={18} />
                <div>
                  <p className="font-medium text-white">Address</p>
                  <p>B-Secure Charummoodu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom */}
      <div className="mx-auto flex max-w-7xl flex-col items-center  gap-4 px-6 py-6 text-sm text-gray-400 ">
        <p>© {new Date().getFullYear()} FORCE. All Rights Reserved.</p>
      </div>

      {/* Back To Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-cyan-600 p-3 text-white shadow-lg transition hover:scale-110 hover:bg-cyan-700"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
