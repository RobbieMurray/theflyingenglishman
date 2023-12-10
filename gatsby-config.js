/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: "TFE Productions",
    description: "A super-fast site using GatsbyJS",
    author: "The Flying Englishman",
    youtubeUsername: "the_flying_englishman",
    instagramUsername: "the_flying_englishman",
    tiktokUsername: "the_flying_englishman",
    emailUsername: "contact@theflyingenglishman.com",
    image: "/macbook-color.jpg",
    siteUrl: "https://theflyingenglishman.com",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
  ],
};
