module.exports = {
  siteMetadata: {
    title: "Rotational Weight",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-flickr",
      options: {
        method: "flickr.photosets.getPhotos",
        api_key: "adacd6cd18d175e61385823b60fbd7b6",
        user_id: "67061766@N04",
        photoset_id: "72157632598057210",
      }
    }
  ],
};