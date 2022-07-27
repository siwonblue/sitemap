

export const testGenerator = (lastmod)=>{
  return [
    {
      loc: 'https://sitemap-five.vercel.app/',
      changefreq: 'daily',
      priority: '1',
      lastmod,
    },
    {
      loc : 'test',
      changefreq: 'daily',
      priority: '1',
      lastmod,
    },
    {
      loc: 'test',
      changefreq: 'daily',
      priority: '1',
      lastmod,
    },
    {
      loc: 'test?sick=head',
      changefreq: 'daily',
      priority: '1',
      lastmod,
    },
  ]
}
