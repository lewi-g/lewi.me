module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Lewi Gilamichael ',
    author: 'Lewi Gilamichael'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ]
}
 