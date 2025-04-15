import Title2 from "./title-2";
import Service from "./service";
import service_image_1 from "../assets/services/mohammad-rahmani-8qEB0fTe9Vw-unsplash.jpg";
import service_image_2 from "../assets/services/mehdi-mirzaie-kUe-dIOu5FE-unsplash.jpg";
import service_image_3 from "../assets/services/muhammad-rizki-hpEcXWOJjjc-unsplash.jpg";
import Section from "./section";

const Services: React.FC = () => {
  return (
    <Section id="services" center>
      <Title2>My Services</Title2>
      <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-28 max-md:gap-8 max-sm:gap-4">
        <Service image={service_image_1} name="Web Development" />
        <Service image={service_image_2} name="UI Design" />
        <Service image={service_image_3} name="Graphic Design" />
      </div>
    </Section>
  );
};

export default Services;
