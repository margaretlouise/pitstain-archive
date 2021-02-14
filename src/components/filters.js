import React from "react";
import filterStyles from "./filters.module.css";

const FilterButton = props => (
  <span key={props.tag}>
    <button className={filterStyles.btn} onClick={() => {props.onClick()}}>{props.title}</button>
  </span>
);

export default function Filters(props) {
  
  const handleAlert = (tag) => {
    console.log('clicked it', tag)
  }

  return (
    <div className={filterStyles.wrapper}>
      {props.tags.length > 0 && props.tags.map((tag) => {
        return (
          <FilterButton 
            key={tag} 
            onClick={() => {handleAlert(tag)}}
            title={tag}
          />
        );
      })}
    </div>
  );
}