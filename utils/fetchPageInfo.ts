import { PageInfo } from "../typings";
import axios from "axios";

export const fetchPageInfo = async () => {
  const { data } = await axios.get(
    `${process.env.VERCEL_ENV === "production" ? "https" : "http"}://${
      process.env.NEXT_PUBLIC_VERCEL_URL
    }/api/getPageInfo`
  );
  console.log(data);

  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
