module.exports = {
  siteUrl: process.env.SITE_URL || "https://impulsorestaurantero.com",
  generateRobotsTxt: true, // (optional)
  exclude: ["/manuales-de-procesos"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/manuales-de-procesos" },
      { userAgent: "*", allow: "/" },
    ],
  },
  outDir: "./out",
};
