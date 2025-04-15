import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Pricing from "../components/pricing";
import Projects from "../components/projects";
import Reviews from "../components/reviews";

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
