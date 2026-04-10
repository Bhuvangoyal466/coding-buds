import type { Metadata } from "next";
import { League_Spartan, Poppins } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codingbuds.com"),
  title: {
    default: "Coding Buds - Fun & Personalized Coding Classes for Kids",
    template: "%s | Coding Buds",
  },
  description:
    "Expert-led coding classes for kids and teens aged 6-16. Learn Scratch, Python, Web Development, and Java with personalized support.",
  keywords: [
    "coding classes for kids",
    "coding for children",
    "scratch programming",
    "python for kids",
    "web development for teens",
    "java programming",
  ],
  authors: [{ name: "Coding Buds" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Coding Buds",
    title: "Coding Buds - Fun & Personalized Coding Classes for Kids",
    description:
      "Expert-led coding classes for kids and teens aged 6-16. Learn Scratch, Python, Web Development, and Java.",
    images: [
      {
        url: "/assets/images/kids-coding-1.webp",
        width: 1200,
        height: 630,
        alt: "Kids learning coding with Coding Buds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coding Buds - Fun & Personalized Coding Classes for Kids",
    description:
      "Expert-led coding classes for kids and teens aged 6-16. Learn Scratch, Python, Web Development, and Java.",
    images: ["/assets/images/kids-coding-1.webp"],
  },
  icons: {
    icon: "/assets/images/Updated%20logo.jpeg",
    apple: "/assets/images/Updated%20logo.jpeg",
  },
};

export const viewport = {
  themeColor: "#1B2D5B",
};

const schemaGraph = [
  {
    "@type": "Organization",
    "@id": "https://www.codingbuds.com/#organization",
    name: "Coding Buds",
    url: "https://www.codingbuds.com/",
    logo: "https://www.codingbuds.com/assets/images/Updated%20logo.jpeg",
    sameAs: [
      "https://instagram.com/coding_buds",
      "https://www.facebook.com/profile.php?id=61571017679574",
      "https://www.linkedin.com/company/codingbuds/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-77175-22189",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
  },
  {
    "@type": "WebSite",
    "@id": "https://www.codingbuds.com/#website",
    url: "https://www.codingbuds.com/",
    name: "Coding Buds",
    description: "Fun and personalized coding classes for kids and teens.",
    publisher: { "@id": "https://www.codingbuds.com/#organization" },
  },
  {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What age groups do you teach?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We teach kids and teens aged 6-16 with age-appropriate learning paths.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer 1:1 and group classes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We offer both personalized 1:1 and small group classes.",
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} ${poppins.variable}`}>
      <body>
        <SiteShell>{children}</SiteShell>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({ "@context": "https://schema.org", "@graph": schemaGraph }),
          }}
        />
      </body>
    </html>
  );
}