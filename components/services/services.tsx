import Title2 from "../heading/title-2";
import Service from "./service";
import Section from "../section/section";

import service_image_1 from "../../assets/service-images/service-image-01.jpg";
import service_image_2 from "../../assets/service-images/service-image-02.jpg";
import service_image_3 from "../../assets/service-images/service-image-03.jpg";

const Services: React.FC = () => {
  return (
    <Section id="services" center>
      <Title2>My Services</Title2>
      <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-28 max-md:gap-8 max-sm:gap-4">
        <Service image={service_image_1.src} name="Web Development" />
        <Service image={service_image_2.src} name="UI Design" />
        <Service image={service_image_3.src} name="Graphic Design" />
      </div>
    </Section>
  );
};

export default Services;
