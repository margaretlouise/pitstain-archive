import React from "react";
import { graphql } from "gatsby";

import Header from "../components/header";
import Menu from "../components/menu";
import Filters from "../components/filters";
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
      <Header title={data.site.siteMetadata.title} />
      <Menu />
      <Filters tags={[...tags]} />
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