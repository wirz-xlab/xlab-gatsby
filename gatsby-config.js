/* Gatsby Config */

module.exports = {
  siteMetadata: {
    lang: "en",
    title: "xLab",
    description: "Kick off your next, great Gatsby project with this default starter.",
    url: "https://www.example.com", // No trailing slash allowed!
    image: "/images/og.png",
    tags: "Wirz, xLab, Technology",
    type: "website",
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-111111111-1",
        // Defines where to place the tracking script - "true" in the head and "false" in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 30,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        // defer: false,
        // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        // Setting a color is optional.
        color: "tomato",
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "xLab",
        short_name: "xLab",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#000000",
        display: "fullscreen",
        icon: "src/assets/images/xlab-icon.png",
        purpose: "any",
      },
    },
    "gatsby-plugin-offline",
  ],
}
