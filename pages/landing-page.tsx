import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Pricing from "../components/pricing/pricing";
import Projects from "../components/projects/projects";
import Reviews from "../components/reviews/reviews";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Reviews />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
