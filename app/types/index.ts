import { generateRandomId } from "../utils";

export class Project {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies: string[] = [];
  reviews: Review[] = [];
  url?: string;

  constructor({
    name,
    description,
    image,
    url,
  }: {
    name: string;
    description: string;
    image: string;
    url?: string;
  }) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.url = url;
    this.id = generateRandomId(10);
  }
}

export class Review {
  id: string;
  name: string;
  review: string;
  rating: number;
  projectId: string;
  createdAt: string;

  constructor({
    name,
    review,
    rating,
    projectId,
  }: {
    name: string;
    review: string;
    rating: number;
    projectId: string;
  }) {
    this.name = name;
    this.review = review;
    this.rating = rating;
    this.projectId = projectId;
    this.id = generateRandomId(10);
    this.createdAt = new Date().toISOString();
  }
}
