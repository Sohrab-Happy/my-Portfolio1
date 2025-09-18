"use client"; // needed if using Next.js App Router

import { motion } from "framer-motion";
import HeroNavbar from "@/components/Navbar";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 10, y: 40 }} // start slightly down and invisible
      animate={{ opacity: 10, y: 20 }} // fade in and move up to normal position
      transition={{ duration: 3 }} // animation duration in seconds
      className="min-h-screen flex flex-col items-center justify-start p-4"
    >
      <HeroNavbar />

      <h1 className="text-3xl font-bold text-primary">
        Tailwind is working! 🎉
      </h1>
    </motion.div>
  );
}
