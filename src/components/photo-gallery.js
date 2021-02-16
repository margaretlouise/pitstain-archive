import React, {useState, useEffect} from "react"

import photoGalleryStyles from "./photo-gallery.module.css";

import Photos from "../components/photos";

export default function PhotoGallery(props) {
  const [activeFilters, setActiveFilters] = useState([]);
  const [photoSet, setPhotoSet] = useState(props.photos);

  const handleAddFilter = (tag) => {
    setActiveFilters(activeFilters.concat(tag));
    setPhotoSet(photoSet.filter(photo => photo.node.tags.includes(tag)));
  };

  const handleRemoveFilter = (tag) => {
    setActiveFilters(activeFilters.filter(t => t !== tag));
    updatePhotoSet();
  }; 

  useEffect(() => {
    if (activeFilters.length === 0) {
      setPhotoSet(props.photos);
    }
  }, [activeFilters]);

  // agh need this to run *AFTER* activeFilters is updated in state.
  // this isn't working, because when it runs as is, active Filters
  // are still set to what they were before the handleRemoveFilter
  // click.

  // wanted to use useEffect, but couldn't figure out how to get that
  // to run *only* when a filter is removed, i had it watching for
  // updates to activeFilters, but that would also update it if a 
  // filter was added. we don't need to do this eleborate of a
  // photoset construction when we are adding filters, only when
  // we remove them.
  const updatePhotoSet = () => {
    props.photos.map(photo => {
      const tags = photo.node.tags;
      
      let updatedPhotoSet = [];
      if (activeFilters.every(tag => tags.includes(tag))) {
        updatedPhotoSet.push(photo);
      }

      return updatedPhotoSet;
    })    
  }

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
