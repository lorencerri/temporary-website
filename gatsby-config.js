module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Plexi Development`,
        short_name: `plexidev`,
        start_url: `/`,
        display: `standalone`,
        icon: `static/logo.png`,
      },
    },
  ],
}
