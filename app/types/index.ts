export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
}

export interface Review {
  id: string;
  name: string;
  review: string;
  rating: number;
  projectId: string;
  createdAt: string;
}
