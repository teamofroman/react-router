import React from "react";
import {Car} from "./Car";

export const Cars = (props) => {
  return (
    <>
      {
        props.cars.map((car, i)=>{
          return(
            <Car name={car.name} year={car.year} key={i}/>
          )
        })
      }
    </>
  )
}