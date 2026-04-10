"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/site-data";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("Thank you for subscribing. We will share coding tips and updates.");
    setEmail("");
  }

  return (
    <footer className="mt-20 border-t border-white/10 bg-[#091123] text-white">
      <div
        className="bg-[center_top] bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/footer-bg.png')" }}
      >
        <div className="container-shell py-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
            <div>
              <Link href="/#home" className="inline-flex items-center gap-3">
                <Image
                  src="/assets/images/Updated%20logo.jpeg"
                  alt="Coding Buds logo"
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full object-cover ring-2 ring-white/10"
                />
                <span className="font-heading text-3xl font-semibold">Coding Buds</span>
              </Link>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
                At Coding Buds, we make coding fun and accessible for kids and teens worldwide.
                Join our community of young coders.
              </p>
              <div className="mt-6 space-y-3 text-sm text-white/80">
                <p className="flex items-center gap-3">
                  <MessageCircle className="h-4 w-4 text-[#E8511A]" />
                  <a href={siteConfig.whatsappHref} className="hover:text-white">
                    {siteConfig.phone}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#E8511A]" />
                  <a href={siteConfig.emailHref} className="hover:text-white">
                    {siteConfig.email}
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold">Quick Links</h3>
              <ul className="mt-5 space-y-3 text-sm text-white/75">
                <li><Link href="/#home" className="hover:text-white">Home</Link></li>
                <li><Link href="/#courses" className="hover:text-white">Courses</Link></li>
                <li><Link href="/#about" className="hover:text-white">About</Link></li>
                <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/blogs" className="hover:text-white">Blogs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold">Courses</h3>
              <ul className="mt-5 space-y-3 text-sm text-white/75">
                <li><Link href="/#courses" className="hover:text-white">Scratch for Kids</Link></li>
                <li><Link href="/#courses" className="hover:text-white">Python for Teens</Link></li>
                <li><Link href="/#courses" className="hover:text-white">Web Development</Link></li>
                <li><Link href="/#courses" className="hover:text-white">Java Programming</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold">Newsletter</h3>
              <p className="mt-5 text-sm leading-7 text-white/75">
                Subscribe to get updates on new courses and coding tips for kids.
              </p>
              <form className="mt-5 flex flex-col gap-3" onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email_address"
                  placeholder="Your email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/45 outline-none transition focus:border-[#E8511A]"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E8511A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#cf4514]"
                >
                  <Send className="h-4 w-4" />
                  Subscribe
                </button>
              </form>
              {message ? <p className="mt-3 text-sm text-[#FFD600]">{message}</p> : null}
              <div className="mt-6 flex gap-3">
                <a href={siteConfig.facebook} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:-translate-y-1 hover:text-white">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em]"><FaFacebook className="h-4 w-4" aria-hidden="true" /></span>
                </a>
                <a href={siteConfig.linkedin} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:-translate-y-1 hover:text-white">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em]"><FaLinkedin className="h-4 w-4" aria-hidden="true" /></span>
                </a>
                <a href={siteConfig.instagram} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:-translate-y-1 hover:text-white">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em]"><FaInstagram className="h-4 w-4" aria-hidden="true" /></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">
        © 2026 Coding Buds. All Rights Reserved.
      </div>
    </footer>
  );
}