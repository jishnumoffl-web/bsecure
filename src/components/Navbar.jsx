"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    children: [
      {
        name: "Home Care",
        href: "/services/home-care",
      },
      {
        name: "Security Service",
        href: "/services/security-service",
      },
      {
        name: "Cleaning Service",
        href: "/services/cleaning-service",
      },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServiceOpen(false);
  }, [pathname]);

  const isServicePage = pathname.startsWith("/services");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shadow
          ? "bg-white/95 shadow-lg backdrop-blur-xl"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.webp"
            alt="FORCE Logo"
            width={50}
            height={50}
            className="rounded-full"
          />

          <div>
            <h2 className="text-xl font-bold text-slate-800">BSECURE</h2>
            <p className="text-xs text-slate-500">Care • Security • Cleaning</p>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.name} className="relative group">
                <button
                  className={`flex items-center gap-1 font-medium transition ${
                    isServicePage
                      ? "text-blue-600"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}

                  <ChevronDown
                    size={18}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </button>

                <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                  <div className="w-64 rounded-xl border bg-white py-2 shadow-xl">
                    {item.children.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`block px-5 py-3 transition hover:bg-blue-50 ${
                          pathname === service.href
                            ? "bg-blue-50 font-semibold text-blue-600"
                            : "text-slate-700"
                        }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition ${
                  pathname === item.href
                    ? "text-blue-600"
                    : "text-slate-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ),
          )}

          <Link
            href="/contact"
            className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="border-t bg-white px-6 py-5">
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.name}>
                <button
                  onClick={() => setServiceOpen(!serviceOpen)}
                  className={`flex w-full items-center justify-between py-4 font-semibold ${
                    isServicePage ? "text-blue-600" : ""
                  }`}
                >
                  {item.name}

                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      serviceOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    serviceOpen ? "max-h-80" : "max-h-0"
                  }`}
                >
                  {item.children.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block rounded-lg px-4 py-3 transition ${
                        pathname === service.href
                          ? "bg-blue-50 font-semibold text-blue-600"
                          : "text-slate-600 hover:bg-blue-50"
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-4 font-medium ${
                  pathname === item.href ? "text-blue-600" : "text-slate-700"
                }`}
              >
                {item.name}
              </Link>
            ),
          )}

          <Link
            href="/contact"
            className="mt-5 block rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
