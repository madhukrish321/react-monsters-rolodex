import React from 'react'
import './search-box.styles.css'

export const SearchBox = ({ searchHandler, placeholder }) => (
  <input className='input' type='search' placeholder={placeholder} onChange={(e) => {
    searchHandler(e.target.value)
  }} />
)