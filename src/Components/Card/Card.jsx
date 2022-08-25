import React from 'react'
import './Card.css';
const Card = ({emoji,heading,detail}) => {
  return (
    <div className="card-body">
     <div className="card">
  <img src={emoji} alt=""/>
  <span>{heading}</span>
  <span id='detail'>{detail}</span>
  <button className="c-button">Learn More</button>
      </div>
      </div>
  )
}

export default Card