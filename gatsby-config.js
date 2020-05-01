module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `My Blog Title`,
    author: `Modin Serge`,
    description: `My site description...`,
    social: [
      {
        name: `website`,
        url: `https://ya.ru`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/jetleebruce`,
      },
      {
        name: `github`,
        url: `https://github.com/jetleebruce`,
      },
    ],
  },
}
