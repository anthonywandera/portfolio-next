import { Project } from "../types";

// import images
import project_image_1 from "../../assets/service-images/service-image-01.jpg";
import project_image_2 from "../../assets/service-images/service-image-02.jpg";
import project_image_3 from "../../assets/service-images/service-image-03.jpg";

export const projects = [
  new Project({
    name: "Project 1",
    description: "Description for project 1",
    image: project_image_1.src,
    url: "https://example.com/project1",
  }),
  new Project({
    name: "Project 2",
    description: "Description for project 2",
    image: project_image_2.src,
    url: "https://example.com/project2",
  }),
  new Project({
    name: "Project 3",
    description: "Description for project 3",
    image: project_image_3.src,
    url: "https://example.com/project3",
  }),
  new Project({
    name: "Project 4",
    description: "Description for project 4",
    image: project_image_1.src,
    url: "https://example.com/project4",
  }),
  new Project({
    name: "Project 5",
    description: "Description for project 5",
    image: project_image_2.src,
    url: "https://example.com/project5",
  }),
  new Project({
    name: "Project 6",
    description: "Description for project 6",
    image: project_image_3.src,
    url: "https://example.com/project6",
  }),
];
