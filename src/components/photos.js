import React from "react"

import photoStyles from "./photos.module.css";

export default function Photos(props) {
  return (
    <div className={photoStyles.container}>
      {props.photos && props.photos.map((photo) => {
        return (
          <div className={photoStyles.photo} key={photo.node.id}>
            <img src={photo.node.url_m} alt={photo.title}></img>
          </div>
        );
      })}
    </div>
  )
}
