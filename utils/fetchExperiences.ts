import { Experience } from "../typings";
import axios from "axios";

export const fetchExperiences = async () => {
  const { data } = await axios.get(
    `${process.env.VERCEL_ENV === "production" ? "https" : "http"}://${
      process.env.NEXT_PUBLIC_VERCEL_URL
    }/api/getExperience`
  );

  const experiences: Experience[] = data.experiences;

  return experiences;
};
