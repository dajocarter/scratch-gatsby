require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `scratchgatsby.wpengine.com`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        auth: {
          htaccess_user: process.env.HTACCESS_USER,
          htaccess_pass: process.env.HTACCESS_PASS,
          htaccess_sendImmediately: false
        }
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato`]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
};
