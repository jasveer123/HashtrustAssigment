//component for show cards

import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'
const Cards = (props) => {
  return (
    <>
      <div className="Card_container">
        <img
          src={props.data.img}
          alt="image not found"
          className="card_image"
        />
        <div className="card_heading">{props.data.headline}</div>
        <div className="card_heading_details">
          <span className="details">
            {props.data.name} : {props.data.date}
          </span>
          <span className="details">
            {/*This part redirect user to the read page (full article page)*/}
            <Link className="navfont" to={`/Read/${props.data.id}`}>
              Read More
            </Link>
          </span>
        </div>
      </div>
    </>
  )
}

export default Cards
