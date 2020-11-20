module.exports = {
  siteMetadata: {
    title: `SEM Professional Paid Search and SEO`,
    description: `Steve Kaplan is an SEM wizard with 10 years experience. He specializes in consulting, training and managing paid search and SEO campaigns for companies of all sizes.`,
    author: `Steve Kaplan`,
    social_links: [
      {
        name: `facebook`,
        url: `https://www.facebook.com/TheSteveKaplan/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/thestevekaplan`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/histevekaplan`
      },
      {
        name: `upwork`,
        url: `https://www.upwork.com/fl/stevekaplan2`
      },
      {
        name: `fiverr`,
        url: `https://www.fiverr.com/ppcninja`
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `thestevekaplan`,
        short_name: `thestevekaplan`,
        start_url: `https://thestevekaplan.com/`,
        background_color: `#F6F6FF`,
        theme_color: `#F6F6FF`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`
      },
    },
  ],
}
