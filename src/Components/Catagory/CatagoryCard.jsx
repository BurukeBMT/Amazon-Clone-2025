import React from 'react'
import classes from "./catagory.module.css"

function CatagoryCard({data}) {
    console.log(data)
  return (
    <div className={classes.catagory}>
      <div>
        <span><h2>{data.title}</h2></span>

        <img src={data.imgLink} alt="" />
        <p>shop now</p>
      </div>
    </div>
  )
}

export default CatagoryCard

