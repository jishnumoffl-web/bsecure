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
      alert("Please fill in Name, Phone Number and Select a Service.");
      return;
    }

    // Replace with your WhatsApp number (without +)
    const whatsappNumber = "919447272000";

    const whatsappMessage = `*📩 NEW SERVICE ENQUIRY*

👤 *Name:* ${form.name}

📞 *Phone:* ${form.phone}

📧 *Email:* ${form.email || "Not Provided"}

🩺 *Selected Service:* ${form.service}

📝 *Requirements:*
${form.message || "No message provided"}

━━━━━━━━━━━━━━━━━━
🌐 Sent from BSECURE Website`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(url, "_blank");

    // Reset form
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
          {/* Left Side */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Contact Us
            </span>

            <h2 className="mt-5 text-4xl font-black text-slate-900">
              Request Our Services
            </h2>

            <p className="mt-4 text-slate-600">
              Fill out the form below and your enquiry will be sent directly to
              our WhatsApp.
            </p>

            <div className="mt-8 space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full text-black rounded-xl border placeholder:text-black border-slate-300 p-4 outline-none transition focus:border-cyan-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full text-black rounded-xl border placeholder:text-black border-slate-300 p-4 outline-none transition focus:border-cyan-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full text-black rounded-xl borde placeholder:text-black border-slate-300 p-4 outline-none transition focus:border-cyan-500"
              />

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-xl border text-black placeholder:text-black border-slate-300 p-4 outline-none transition focus:border-cyan-500"
              >
                <option value="" className="text-black">
                  Select a Service
                </option>
                <option value="Home Nurse">🏥 Home Nurse</option>
                <option value="House Maid">🏠 House Maid</option>
                <option value="Baby Care">👶 Baby Care</option>
                <option value="Hospital Bystander">
                  🩺 Hospital Bystander
                </option>
                <option value="Maternity Care">🤱 Maternity Care</option>
                <option value="Maternity Care"> Security guard</option>
                <option value="Maternity Care">Sofa cleaning</option>
                <option value="Maternity Care">Carpet cleaning</option>
                <option value="Maternity Care">Deep cleaning</option>
                <option value="Maternity Care">Water tank cleaning</option>
                <option value="Maternity Care">Interlock cleaning</option>
              </select>

              <textarea
                rows={6}
                name="message"
                placeholder="Tell us about your requirements..."
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-xl text-black placeholder:text-black border border-slate-300 p-4 outline-none transition focus:border-cyan-500"
              />

              <button
                type="button"
                onClick={sendWhatsApp}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-600 py-4 font-semibold text-white transition hover:bg-cyan-700"
              >
                <MessageCircle size={22} />
                Send Enquiry via WhatsApp
                <Send size={18} />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="rounded-3xl bg-slate-900 p-10 text-white shadow-xl">
            <h3 className="text-4xl font-black">We're Here To Help</h3>

            <p className="mt-5 leading-8 text-slate-300">
              We provide professional Home Nursing, House Maid, Baby Care,
              Hospital Bystander and Maternity Care services. Contact us today
              for trusted and compassionate care.
            </p>

            <div className="mt-10 space-y-6">
              <div className="rounded-2xl bg-white/10 p-6">
                <h4 className="text-lg font-semibold">📞 Phone</h4>
                <p className="mt-2 text-slate-300">
                  +91 9447272000 | +91 9207273700
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6">
                <h4 className="text-lg font-semibold">📧 Email</h4>
                <p className="mt-2 text-slate-300">bsecurechmd@gmail.com</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6">
                <h4 className="text-lg font-semibold">📍 Office</h4>
                <p className="mt-2 text-slate-300">
                  B-Secure, Charummoodu, Kerala
                </p>
              </div>

              <div className="rounded-2xl bg-cyan-600 p-6">
                <h4 className="text-xl font-bold">24/7 Customer Support</h4>

                <p className="mt-2 text-cyan-100">
                  Average Response Time: Less than 30 Minutes
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=9.1743581,76.6080294&z=17&output=embed"
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
