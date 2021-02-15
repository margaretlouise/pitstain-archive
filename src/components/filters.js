import React, {useState} from "react";
import filterStyles from "./filters.module.css";

export default function Filters(props) {
  const [activeFilters, setActiveFilters] = useState([]);

  const handleRemoveActiveTag = (tag) => {
    setActiveFilters(activeFilters.filter(e => e !== tag))
  }

  return (
    <div className={filterStyles.wrapper}>
      {props.tags.length > 0 && props.tags.map((tag) => {
        if (activeFilters.indexOf(tag) !== -1) {
          return (
            <span key={tag}>
              <button className={filterStyles.btnActive} onClick={() => handleRemoveActiveTag(tag)}>{tag}</button>
            </span>
          );
        } else {
          return (
            <span key={tag}>
              <button className={filterStyles.btn} onClick={() => setActiveFilters(activeFilters.concat(tag))}>{tag}</button>
            </span>
          );
        }
      })}
    </div>
  );
}