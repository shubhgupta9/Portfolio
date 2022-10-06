import { Skill } from "../typings";
import axios from "axios";

export const fetchSkills = async () => {
  const { data } = await axios.get(
    `${process.env.VERCEL_ENV === "production" ? "https" : "http"}://${
      process.env.NEXT_PUBLIC_VERCEL_URL
    }/api/getSkills`
  );

  const skills: Skill[] = data.skills;

  return skills;
};
