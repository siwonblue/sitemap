import { getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps = async (ctx) => {
  const lastmod = new Date().toISOString();

  const defaultFields = [
    {
      loc: 'https://sitemap-five.vercel.app/',
      changefreq: 'daily',
      priority: '1',
      lastmod,
    },

  ];

  return getServerSideSitemap(ctx, defaultFields);
};

export default function Sitemap() {}
