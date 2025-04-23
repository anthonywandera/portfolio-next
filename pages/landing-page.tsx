"use client";
import { useEffect } from "react";
import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Pricing from "../components/pricing/pricing";
import Projects from "../components/projects/projects";
import Reviews from "../components/reviews/reviews";
import StoreProvider from "@/store";

export default function LandingPage() {
  useEffect(() => {
    const linkElements = document.querySelectorAll("a");
    linkElements.forEach((linkEL) => {
      linkEL.addEventListener("click", (e) => {
        // prevent refresh
        e.preventDefault();

        const target = linkEL.getAttribute("href");

        // filter out the unwanted
        if (target && target.length === 1) return;

        // select the target destination elements
        const targetEl = document.querySelector(
          target as string
        ) as HTMLElement;

        targetEl.scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <>
      <StoreProvider>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Reviews />
        <Pricing />
        <Contact />
        <Footer />
      </StoreProvider>
    </>
  );
}
