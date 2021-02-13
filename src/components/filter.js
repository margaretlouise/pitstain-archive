import React from "react"

export default function Filter(props) {
  
  const handleAlert = (tag) => {
    console.log('clicked it', tag)
  }

  return (
    <div>
      {props.tags.length > 0 && props.tags.map((tag) => {
        return (
          <span key={tag}>
            <button onClick={() => {handleAlert(tag)}}>{tag}</button>
          </span>
        );
      })}
    </div>
  )
}