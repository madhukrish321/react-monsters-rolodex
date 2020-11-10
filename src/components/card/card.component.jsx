import React from 'react'
import './card.styles.css'

export const Card = (props) => (
  <div className='card-container'>
    <img className='card-img' src={`https://robohash.org/${props.monster.id}?set=set2`} alt='monster' />
    <h3>{props.monster.name}</h3>
    <p>{props.monster.email}</p>
  </div>
)