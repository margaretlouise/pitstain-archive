import React from "react"

export default function Filter(props) {
  return (
    <div>
      {props.tags.length > 0 && props.tags.map((tag) => {
        return (
          <span key={tag}>
            <button>{tag}</button>
          </span>
        );
      })}
    </div>
  )
}