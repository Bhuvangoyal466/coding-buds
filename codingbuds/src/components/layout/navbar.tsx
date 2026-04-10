"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/lib/site-data";

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sectionActive, setSectionActive] = useState("home");
  const active = isHomePage ? sectionActive : pathname === "/blogs" ? "blogs" : "home";

  const darkNavbar = isHomePage || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const sections = navItems
      .filter((item) => item.href.startsWith("/#"))
      .map((item) => item.href.replace("/#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) {
          setSectionActive(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.05 },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        darkNavbar
          ? "border-b border-white/10 bg-[#0d1630]/85 shadow-[0_12px_40px_rgba(7,10,20,0.22)] backdrop-blur-xl"
          : "border-b border-slate-200/90 bg-white/92 shadow-[0_10px_35px_rgba(15,28,56,0.08)] backdrop-blur-xl"
      }`}
    >
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/#home" className="flex items-center gap-3">
          <span className="rounded-full bg-white p-1 shadow-lg shadow-[#1B2D5B]/10">
            <Image
              src="/assets/images/Updated%20logo.jpeg"
              alt="Coding Buds logo"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover"
              priority
            />
          </span>
          <span className="hidden flex-col sm:flex">
            <span className={`font-heading text-lg font-semibold leading-none ${darkNavbar ? "text-white" : "text-[#1B2D5B]"}`}>
              Coding Buds
            </span>
            <span className={`text-xs uppercase tracking-[0.25em] ${darkNavbar ? "text-white/60" : "text-[#1B2D5B]/55"}`}>
              {siteConfig.shortName}
            </span>
          </span>
        </Link>

        <nav className={`hidden items-center gap-2 rounded-full px-3 py-2 text-sm backdrop-blur-xl lg:flex ${
          darkNavbar
            ? "border border-white/10 bg-white/10 text-white/90"
            : "border border-slate-200/90 bg-white/75 text-[#1B2D5B]"
        }`}>
          {navItems.map((item) => {
            const hrefId = item.href.startsWith("/#") ? item.href.replace("/#", "") : "blogs";
            const isActive = hrefId === active || (item.href === "/blogs" && active === "blogs");
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-4 py-2 transition ${
                  isActive
                    ? darkNavbar
                      ? "bg-white text-[#1B2D5B]!"
                      : "bg-[#1B2D5B] text-white!"
                    : darkNavbar
                      ? "hover:bg-white/10 hover:text-white"
                      : "hover:bg-[#1B2D5B]/10 hover:text-[#1B2D5B]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden rounded-full bg-[#E8511A] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E8511A]/30 transition hover:-translate-y-0.5 hover:bg-[#cf4514] md:inline-flex"
          >
            Book a Free Trial
          </Link>
          <button
            type="button"
            aria-label="Open navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl lg:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-[#08101f]/80 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.aside
              initial={{ x: 280, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 280, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 32 }}
              className="absolute right-0 top-0 flex h-full w-[min(88vw,22rem)] flex-col bg-[#0d1630] p-6 text-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-heading text-2xl font-semibold">Menu</span>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10"
                  onClick={() => setMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-lg font-medium transition hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#E8511A] px-5 py-4 font-semibold text-white"
              >
                Book a Free Trial Class
              </Link>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}