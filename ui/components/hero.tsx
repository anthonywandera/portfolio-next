import Button from "./button";
import Highlighted from "./highlighted";
import Section from "./section";
import Image from "next/image";

import profile_image from "../assets/profile.jpg";

const Hero: React.FC = () => {
  return (
    <Section id="home" className="flex justify-end relative h-screen">
      <Image
        src={profile_image}
        alt="Anthony Wandera"
        className="w-full h-full object-cover object-center grayscale-25 opacity-75"
        fill
        priority
      />
      <div className="font-bold flex flex-col gap-2 mr-24 max-md:mr-0 absolute top-1/2 max-md:top-full max-md:left-1/2 max-md:-translate-x-1/2 -translate-y-1/2 max-md:-translate-y-full bg-[#0003] p-4 rounded backdrop-blur-sm">
        <Highlighted>Hello!</Highlighted>
        <p className="text-6xl max-md:text-5xl w-min mb-6">
          I’m <Highlighted>Anthony Wandera</Highlighted>
        </p>
        <p className="mb-2">UI/UX Developer</p>
        <div className="flex gap-6 max-md:gap-4 items-center">
          <Button>HIRE ME</Button>
          <a href="#projects">MY WORK</a>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
