/* eslint-disable camelcase */
module.exports = {
  siteMetadata: {
    title: `Brandon Burrus | Software Engineer`,
    description: `Software Engineer who is passionate about creating user experiences, building products, and developing solutions to real-world problems.`,
    author: `Brandon Burrus`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brandon Burrus Portfolio`,
        short_name: `brandonburrus`,
        start_url: `/`,
        background_color: `#f2fbfe`,
        theme_color: `#44d7b6`,
        display: `minimal-ui`,
        icon: `src/assets/images/profile.min.jpg`,
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-postcss`,
  ],
};
