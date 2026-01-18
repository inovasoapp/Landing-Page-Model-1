import { Metadata } from "next";

import { Hero } from "./components/sections/Hero/hero";
import { CarrouselText } from "./components/elements/carrousels/carrousel-text";
import { Problems } from "./components/sections/Problems/problems";
import { Solution } from "./components/sections/Solution/solution";
import { TimeLine } from "./components/elements/time-line";
import { About } from "./components/sections/About/about";
import { CarrouselImage } from "./components/elements/carrousels/carrousel-image";
import { Testimonials } from "./components/sections/Testimonials/testimonials";
import { FAQ } from "./components/sections/FAQ/faq";
import { Contact } from "./components/sections/Contact/contact";
import { Footer } from "./components/sections/Footer/footer";

export const metadata: Metadata = {
  title: "Landing Page | Model 1",
  description: "Tenha uma Landing Page de alta conversão para o seu negócio.",
  keywords: ["Landing Page", "Model 1", "Landing Page | Model 1"],
  openGraph: {
    title: "Landing Page | Model 1",
    description: "Tenha uma Landing Page de alta conversão para o seu negócio.",
    type: "website",
    locale: "pt_BR",
    siteName: "Landing Page | Model 1",
    images: [
      {
        url: "https://www.advocaciasilviosouza.com.br/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Landing Page | Model 1",
      },
    ],
  },
  twitter: {
    title: "Landing Page | Model 1",
    description: "Tenha uma Landing Page de alta conversão para o seu negócio.",
    card: "summary_large_image",
    images: [
      {
        url: "https://www.advocaciasilviosouza.com.br/og-image.webp",
        width: 1200,
        height: 600,
        alt: "Landing Page | Model 1",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.advocaciasilviosouza.com.br/",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Landing Page | Model 1",
    description: "Tenha uma Landing Page de alta conversão para o seu negócio.",
    url: "https://www.advocaciasilviosouza.com.br/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.advocaciasilviosouza.com.br/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <main className="min-h-screen w-full bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Hero />
      <CarrouselText />
      <Problems />
      <Solution />
      <TimeLine />
      <About />
      <CarrouselImage />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
