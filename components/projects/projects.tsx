import Heading from "../heading/heading";
import Section from "../section/section";
import Service from "../services/service";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import service_image_1 from "../../assets/service-images/service-image-01.jpg";
import service_image_2 from "../../assets/service-images/service-image-02.jpg";
import service_image_3 from "../../assets/service-images/service-image-03.jpg";

const Projects: React.FC = () => {
  return (
    <Section id="projects" center>
      <Heading title1="What I have done" title2="My Work" />
      <div className="grid grid-cols-1 grid-rows-[auto_1fr] gap-4 bg-black p-4 rounded-3xl">
        <menu className="flex gap-16 max-sm:gap-2.5 justify-self-center items-center font-semibold">
          <button>
            <FaAngleLeft />
          </button>
          <button>Web</button>
          <button>UI/UX Design</button>
          <button>Graphic Design</button>
          <button>
            <FaAngleRight />
          </button>
        </menu>

        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-4">
          <Service image={service_image_3.src} name="Graphic Design" />
          <Service image={service_image_2.src} name="UI Design" />
          <Service image={service_image_1.src} name="Web Development" />
          <Service image={service_image_2.src} name="UI Design" />
        </div>
      </div>
    </Section>
  );
};

export default Projects;
