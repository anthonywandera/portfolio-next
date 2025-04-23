import { projects } from "@/app/data/project";

export function GET() {
  return Response.json(projects);
}
