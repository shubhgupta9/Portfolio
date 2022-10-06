import { Social } from "../typings";
import axios from "axios";

export const fetchSocial = async () => {
  const { data } = await axios.get(
    `${process.env.VERCEL_ENV === "production" ? "https" : "http"}://${
      process.env.NEXT_PUBLIC_VERCEL_URL
    }/api/getSocials`
  );

  const socials: Social[] = data.socials;

  return socials;
};
