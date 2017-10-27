module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `perfect.tribestaging.com`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato`]
      }
    }
  ]
};
