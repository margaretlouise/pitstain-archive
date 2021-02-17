import React, {useState, useEffect} from "react"

import photoGalleryStyles from "./photo-gallery.module.css";

import Photos from "../components/photos";

export default function PhotoGallery(props) {
  const [activeFilters, setActiveFilters] = useState([]);
  const [photoSet, setPhotoSet] = useState(props.photos);

  const handleAddFilter = (tag) => {
    setActiveFilters(activeFilters.concat(tag));
  };

  const handleRemoveFilter = (tag) => {
    setActiveFilters(activeFilters.filter(t => t !== tag));
  }; 

  useEffect(() => {
    if (activeFilters.length === 0) {
      setPhotoSet(props.photos);
    } else {
      let updatedPhotoSet = [];

      props.photos.map(photo => {
        const tags = photo.node.tags;
        
        if (activeFilters.every(tag => tags.includes(tag))) {
          updatedPhotoSet.push(photo);
        }
  
        return setPhotoSet(updatedPhotoSet);
      })    
    }
  }, [activeFilters, props.photos]);

  return (
    <div>
      <div className={photoGalleryStyles.wrapper}>
        {props.tags.length > 0 && props.tags.map((tag) => {
          if (activeFilters.indexOf(tag) !== -1) {
            return (
              <span key={tag}>
                <button className={photoGalleryStyles.btnActive} onClick={() => handleRemoveFilter(tag)}>{tag}</button>
              </span>
            );
          } else {
            return (
              <span key={tag}>
                <button className={photoGalleryStyles.btn} onClick={() => handleAddFilter(tag)}>{tag}</button>
              </span>
            );
          }
        })}
      </div>

      <Photos photos={photoSet} />
    </div>
  )
};
