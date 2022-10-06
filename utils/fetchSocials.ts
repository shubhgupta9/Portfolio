import { Social } from "../typings";

export const fetchSocial = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getSocials`
  );

  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};
