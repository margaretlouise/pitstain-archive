import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Photos() {
  const data = useStaticQuery(
    graphql`
    query {
      allFlickrPhoto {
          edges {
            node {
              id
              tags
              url_m
              title
            }
          }
        }
      }
    `
  )

  const photoData = data.allFlickrPhoto.edges;

  return (
    <div>
      {photoData && photoData.map((photo) => {
        return (
          <div key={photo.node.id}>
            <img src={photo.node.url_m} alt={photo.title}></img>
          </div>
        );
      })}
    </div>
  )
}
