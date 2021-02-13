import React from "react";
import { Link, graphql } from "gatsby";

import Filter from "../components/filter";
import Photos from "../components/photos";

export default function Home({ data }) {
  const photoData = data.allFlickrPhoto.edges;

  let tags = new Set();
  const findAllTags = photoData && photoData.map((photo) => {
    if (photo.node.tags) {
      const splitTags = photo.node.tags.split(' ');

      splitTags.map((tag) => {
        tags.add(tag);
      })
    }

    return tags;
  })

  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <Link to="/about/">About</Link>
      <Filter tags={[...tags]} />
      <Photos />
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFlickrPhoto {
      edges {
        node {
          id
          tags
          url_m
        }
      }
    }
  }
`