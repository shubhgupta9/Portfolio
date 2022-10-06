import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
  console.log(process.env);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getPageInfo`
  );

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
