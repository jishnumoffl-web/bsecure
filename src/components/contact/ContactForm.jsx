"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = () => {
    if (!form.name || !form.phone || !form.service) {
      alert("Please fill in Name, Phone Number and Service.");
      return;
    }

    // Replace with your client's WhatsApp number
    const whatsappNumber = "919876543210";

    const message = `*NEW SERVICE ENQUIRY*

👤 Name: ${form.name}

📞 Phone: ${form.phone}

📧 Email: ${form.email || "Not Provided"}

🛠 Service: ${form.service}

📝 Message:
${form.message || "No message"}

-----------------------
Sent from BSECURE Website`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");

    setForm({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Contact Us
            </span>

            <h2 className="mt-5 text-4xl font-black text-slate-900">
              Request Our Services
            </h2>

            <p className="mt-4 text-slate-600">
              Fill out the form below and we'll receive your enquiry instantly
              on WhatsApp.
            </p>

            <div className="mt-8 space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
              />

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
              >
                <option value="">Select Service</option>
                <option value="Home Care">Home Care</option>
                <option value="Security Service">Security Service</option>
                <option value="Cleaning Service">Cleaning Service</option>
              </select>

              <textarea
                rows="6"
                name="message"
                placeholder="Tell us about your requirements..."
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
              />

              <button
                onClick={sendWhatsApp}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-600 py-4 font-semibold text-white transition hover:bg-cyan-700"
              >
                <MessageCircle size={22} />
                Send Enquiry via WhatsApp
                <Send size={18} />
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl bg-slate-900 p-10 text-white shadow-xl">
            <h3 className="text-4xl font-black">We're Here To Help</h3>

            <p className="mt-5 leading-8 text-slate-300">
              Contact us for professional Home Care, Security Services and
              Cleaning Services. Our team will get back to you as soon as
              possible.
            </p>

            <div className="mt-10 space-y-6">
              <div className="rounded-2xl bg-white/10 p-6">
                <h4 className="text-lg font-semibold">📞 Phone</h4>
                <p className="mt-2 text-slate-300">
                  +91 9447272000 | 9207273700
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6">
                <h4 className="text-lg font-semibold">📧 Email</h4>
                <p className="mt-2 text-slate-300">bsecurechmd@gmail.com</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6">
                <h4 className="text-lg font-semibold">📍 Office</h4>
                <p className="mt-2 text-slate-300">B-Secure Charummoodu</p>
              </div>

              <div className="rounded-2xl bg-cyan-600 p-6">
                <h4 className="text-xl font-bold">24/7 Customer Support</h4>

                <p className="mt-2 text-cyan-100">
                  Average Response Time: Less than 30 Minutes
                </p>
              </div>

              {/* Google Map */}
              <div className="overflow-hidden rounded-2xl">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=Haripad,Kerala&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
