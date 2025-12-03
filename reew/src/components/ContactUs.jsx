import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const { lang } = useLanguage();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="py-12 px-6 animate-fadeUp">
      <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600 dark:text-indigo-300 animate-fadeScale">
        {lang === "en" ? "Contact Us" : "اتصل بنا"}
      </h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white dark:bg-slate-800 p-6 rounded-xl shadow animate-fadeUp">
        <input name="name" value={form.name} onChange={handleChange} required placeholder={lang === "en" ? "Your name" : "الاسم"} className="w-full p-3 mb-3 rounded border dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-indigo-500 transition" />
        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder={lang === "en" ? "Your email" : "البريد الإلكتروني"} className="w-full p-3 mb-3 rounded border dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-indigo-500 transition" />
        <textarea name="message" value={form.message} onChange={handleChange} required placeholder={lang === "en" ? "Your message" : "رسالتك"} rows="5" className="w-full p-3 mb-3 rounded border dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-indigo-500 transition" />
        <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
          {lang === "en" ? "Send Message" : "إرسال الرسالة"}
        </button>
        {sent && <p className="mt-3 text-green-500 text-center animate-fadeUp">{lang === "en" ? "Message sent ✔️" : "تم إرسال الرسالة ✔️"}</p>}
      </form>
    </section>
  );
}





