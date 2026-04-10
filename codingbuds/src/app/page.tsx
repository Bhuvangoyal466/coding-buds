import { AboutSection } from "@/components/sections/about";
import { BlogGrid } from "@/components/sections/blog-grid";
import { CategoriesSection } from "@/components/sections/categories";
import { ContactSection } from "@/components/sections/contact";
import { CoursesSection } from "@/components/sections/courses";
import { FaqSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { ShowcaseSection } from "@/components/sections/showcase";
import { StatsSection } from "@/components/sections/stats";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { blogPosts } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <AboutSection />
      <CoursesSection />
      <ShowcaseSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
      <FaqSection />
      <BlogGrid posts={blogPosts} limit={3} compact />
    </>
  );
}
