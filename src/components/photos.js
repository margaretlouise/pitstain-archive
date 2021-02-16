import React from "react"

import photoStyles from "./photos.module.css";

export default function Photos(props) {
  return (
    <div>
      {props.photos.length === 0 &&
          <h3 className={photoStyles.error}>
            Dang, no photos match your search criteria. Try removing a filter.
          </h3>
      }
      <div className={photoStyles.container}>
      {props.photos.length > 0 && props.photos.map((photo) => {
        return (
            <div className={photoStyles.photo} key={photo.node.id}>
              <img src={photo.node.url_m} alt={photo.title}></img>
            </div>
        );
      })}
      </div>
    </div>
  )
};