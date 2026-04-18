import type { Metadata } from "next";
import { BlogGrid } from "@/components/sections/blog-grid";
import { BlogHero } from "@/components/sections/blog-hero";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read the latest blogs from Coding Buds about coding for kids, programming tips, and educational content.",
  alternates: {
    canonical: "/blogs",
  },
};

export default function BlogsPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
    </>
  );
}