'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiCompass, FiCpu, FiMail, FiMapPin, FiMessageCircle, FiMenu, FiMoon, FiSun, FiTwitter, FiInstagram, FiLinkedin, FiSend } from 'react-icons/fi';

const services = [
  { icon: <FiCpu size={24} />, title: 'AI-Driven Design', description: 'Smart interfaces that feel effortless and convert better.' },
  { icon: <FiCompass size={24} />, title: 'Brand Strategy', description: 'Clear direction for launches, storytelling, and growth.' },
  { icon: <FiMessageCircle size={24} />, title: 'Customer Experience', description: 'Thoughtful journeys that make every interaction feel premium.' },
];

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '250+', label: 'Successful Launches' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(saved ? saved === 'dark' : prefersDark);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/60 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="text-lg font-semibold tracking-[0.25em] text-slate-900 dark:text-white">NEXTGEN</a>
          <div className="hidden items-center gap-8 md:flex">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setDarkMode(!darkMode)} className="rounded-full border border-slate-200 bg-white/70 p-2.5 shadow-sm transition hover:scale-105 dark:border-slate-700 dark:bg-slate-900/70">
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-full border border-slate-200 bg-white/70 p-2.5 shadow-sm transition hover:scale-105 md:hidden dark:border-slate-700 dark:bg-slate-900/70">
              <FiMenu />
            </button>
          </div>
        </nav>
        {mobileOpen && (
          <div className="border-t border-white/40 bg-white/80 px-4 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80 md:hidden">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="mb-2 block rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-indigo-50 dark:text-slate-200 dark:hover:bg-slate-800" onClick={() => setMobileOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <main id="home">
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-3 py-1.5 text-sm font-medium text-indigo-700 shadow-sm dark:border-indigo-900 dark:bg-slate-900/70 dark:text-indigo-300">
              <FiCheckCircle /> Premium digital experiences
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Elevate your brand with a beautiful, modern landing page.
              </h1>
              <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                We blend design, storytelling, and performance into immersive web experiences that feel effortless and premium.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-glow transition hover:scale-[1.02]">Get Started</a>
              <a href="#services" className="rounded-full border border-slate-200 bg-white/70 px-6 py-3 font-semibold text-slate-700 transition hover:scale-[1.02] dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">Explore Services</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative overflow-hidden rounded-[32px] border border-white/60 bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 p-8 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_45%)]" />
            <div className="relative space-y-6">
              <div className="rounded-[24px] border border-white/40 bg-white/20 p-6 backdrop-blur-lg">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">Launch kit</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Fast, refined, and ready to impress.</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {['Responsive UI', 'Premium Motion', 'Tailwind Styling', 'SEO Friendly'].map((item) => (
                  <div key={item} className="rounded-[20px] border border-white/30 bg-white/20 p-4 text-white backdrop-blur-md">
                    <p className="font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[32px] border border-slate-200/70 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">About</p>
                <h2 className="text-3xl font-semibold sm:text-4xl">We design premium digital experiences that feel effortless.</h2>
              </div>
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>Our team builds modern, thoughtful experiences for ambitious brands that want clarity, beauty, and growth.</p>
                <p>From strategy to execution, every detail is refined to create a polished presence that feels as premium as your product.</p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-5 text-center shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
                  <p className="text-3xl font-semibold text-slate-900 dark:text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">Services</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">Tailored solutions for modern brands.</h2>
            </div>
            <p className="max-w-xl text-slate-600 dark:text-slate-300">Our services are crafted to merge creativity and strategy into polished digital experiences.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.article key={service.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.1 }} className="group rounded-[28px] border border-slate-200 bg-white/75 p-7 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/70">
                <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 p-3 text-white shadow-lg">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{service.description}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">Learn more <FiArrowRight className="transition group-hover:translate-x-1" /></div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">Contact</p>
                <h2 className="text-3xl font-semibold sm:text-4xl">Let’s create something exceptional.</h2>
              </div>
              <div className="space-y-3 text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-3 dark:border-slate-800 dark:bg-slate-950/70"><FiMail /> hello@nextgenstudio.com</div>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-3 dark:border-slate-800 dark:bg-slate-950/70"><FiMapPin /> 120 Market Street, San Francisco</div>
              </div>
              <div className="flex gap-3">
                {[FiTwitter, FiInstagram, FiLinkedin].map((Icon, idx) => (
                  <a key={idx} href="#" className="rounded-full border border-slate-200 bg-white/70 p-3 text-slate-700 transition hover:-translate-y-1 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-200">
                    <Icon />
                  </a>
                ))}
              </div>
              <div className="rounded-[24px] border border-dashed border-slate-300 p-8 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400">
                Google Maps Placeholder
              </div>
            </div>

            <form className="space-y-4 rounded-[28px] border border-slate-200 bg-slate-50/80 p-6 shadow-inner dark:border-slate-800 dark:bg-slate-950/70">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 transition focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900" placeholder="Name" />
                <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900" placeholder="Email" />
              </div>
              <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900" placeholder="Subject" />
              <textarea rows={5} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900" placeholder="Message"></textarea>
              <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-glow transition hover:scale-[1.02]">
                Send Message <FiSend />
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
