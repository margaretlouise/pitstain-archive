import React from "react";
import { graphql } from "gatsby";

import Header from "../components/header";
import PhotoGallery from "../components/photo-gallery";

export default function PitstainArchive({ data }) {
  const photoData = data.allFlickrPhoto.edges;

  let tags = new Set();
  photoData.forEach((photo) => {
    if (photo.node.tags) {
      const splitTags = photo.node.tags.split(' ');

      splitTags.map((tag) => {
        return tags.add(tag);
      })
    }

    return tags;
  })

  return (
    <div>
      <Header title={data.site.siteMetadata.title} />
      <PhotoGallery tags={[...tags]} photos={photoData}/>
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