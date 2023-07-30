import React from "react";

export const Car = (props) => {
  return (
    <div style={
      {
        width: '10vw',
        height: '12vw',
        textAlign: 'center',
        paddingTop: '1vw',
        border: '1px solid #ccc',
        margin: '10px',
      }}>
      <h2>{props.name}</h2>
      <h3>{props.year}</h3>
    </div>
  )
}