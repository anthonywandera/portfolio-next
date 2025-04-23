import Heading from "../heading/heading";
import Section from "../section/section";
import Project from "./project";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useGetProjectsQuery } from "@/store/api";
import StoreProvider from "@/store";

const Projects: React.FC = () => {
  const { data: projects, isFetching } = useGetProjectsQuery();
  return (
    <StoreProvider>
      <Section id="projects" center>
        <Heading title1="What I have done" title2="My Work" />
        <div className="grid grid-cols-1 grid-rows-[auto_1fr] gap-4 bg-[var(--theme-color-background-shade)] p-4 rounded-3xl">
          <menu className="flex gap-16 max-sm:gap-2.5 justify-self-center items-center font-semibold">
            <button>
              <FaAngleLeft />
            </button>
            <button>Web</button>
            <button>UI/UX</button>
            <button>Graphics</button>
            <button>
              <FaAngleRight />
            </button>
          </menu>

          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-4">
            {isFetching
              ? "loading"
              : projects?.map((project) => (
                  <Project
                    key={project.id}
                    image={project.image}
                    name={project.name}
                    description={project.description}
                    url={project.url}
                  />
                ))}
          </div>
        </div>
      </Section>
    </StoreProvider>
  );
};

export default Projects;
