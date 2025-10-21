/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://runme.dev",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap-index.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://runme.dev/server-sitemap-index.xml"],
  },
};
