import { getServerSideSitemap } from 'next-sitemap';
import {testGenerator} from "../utils/dummy";

export const getServerSideProps = async (ctx) => {
  const lastmod = new Date().toISOString();

  const defaultFields = testGenerator(lastmod);



  return getServerSideSitemap(ctx, defaultFields);
};

export default function Sitemap() {}
