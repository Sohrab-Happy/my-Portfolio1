"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Media", href: "#media" },
  { name: "Contact", href: "#contact" },
];

export default function HeroNavbar({
  name = "Sohrab Salaam",
  tagline = " I build unique digital experiences.",
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const roles = ["designer", "developer", "creator", "maker"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    // initialize theme from localStorage or system
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    setTheme(initial);
    if (initial === "dark") document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    if (typeof window !== "undefined") localStorage.setItem("theme", next);
  };

  return (
    <header className="relative">
      {/* decorative background glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[-10%] top-[-20%] w-[100rem] h-[100rem] rounded-full bg-gradient-to-tr from-primary/20 via-indigo-600/10 to-transparent blur-3xl transform -translate-x-1/3" />
      </motion.div>
      {/* NAV */}
      <nav className="max-w-6xl mx-auto px-26 py-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-extrabold tracking-tight select-none"
          aria-label="Go home"
        >
          <span className="inline-block text-primary">
            {name.split(" ")[0]}
            <span className="text-accent ml-1">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-4 p-2 rounded-md border border-slate-200/8 bg-white/3 dark:bg-black/5"
          >
            {theme === "dark" ? (
              // sun icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z"
                />
              </svg>
            ) : (
              // moon icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                />
              </svg>
            )}
          </button>

          <a
            href="/resume.pdf"
            className="ml-3 inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:brightness-95"
          >
            Resume
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md border border-slate-200/8"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                />
              </svg>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="p-2 rounded-md border border-slate-200/8"
          >
            {/* hamburger */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile menu (overlay) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden"
          >
            <div className="px-6 pb-6 bg-white/60 dark:bg-black/50 backdrop-blur-sm">
              <div className="flex items-center justify-between py-3">
                <a href="#" className="text-lg font-bold">
                  {name.split(" ")[0]}
                </a>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-3 font-medium border-b border-slate-950"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* HERO */}
      <main className="max-w-6xl mx-auto px-6 py-16 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <section>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              Hi, I’m <span className="text-primary">{name}</span>.
              <span className="block text-xl md:text-2xl mt-3 text-slate-400">
                {tagline}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.24 }}
              className="mt-6 text-lg text-slate-400"
            >
              I’m a{" "}
              <span className="font-semibold text-accent">
                {roles[roleIndex]}
              </span>{" "}
              focused on building memorable digital experiences — websites,
              interactions and experiments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.36 }}
              className="mt-8 flex gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center px-5 py-3 bg-primary text-white rounded-md shadow hover:brightness-95"
              >
                View projects
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center px-4 py-3 border rounded-md"
              >
                Download resume
              </a>
            </motion.div>
          </section>

          <section className="relative">
            <div className="w-full h-64 md:h-80 rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
              {/* Placeholder for video or Three.js canvas. Replace with <canvas> or <video> later. */}
              <div className="text-center px-6">
                <div className="text-sm text-slate-400">
                  Interactive preview
                </div>
                <div className="mt-4 text-white font-mono text-xs bg-black/20 px-3 py-2 rounded">
                  Your media or 3D canvas goes here
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </header>
  );
}
