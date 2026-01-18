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

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background">
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
