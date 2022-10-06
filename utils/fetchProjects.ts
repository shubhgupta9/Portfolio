import { Project } from "../typings";
import axios from "axios";

export const fetchProjects = async () => {
  const { data } = await axios.get(
    `${process.env.VERCEL_ENV === "production" ? "https" : "http"}://${
      process.env.NEXT_PUBLIC_VERCEL_URL
    }/api/getProjects`
  );

  const projects: Project[] = data.projects;

  return projects;
};
