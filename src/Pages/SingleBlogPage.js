import React from 'react'
import { useLocation } from 'react-router-dom'
import './singlePage.css'

const SingleBlogPage = () => {
const location = useLocation();
const {title, img, fulldescription} = location.state;
console.log(title)
  return (
    <div className='single__page'>
        <h1>{title}</h1>
        <img src={img} alt="" />
        <p>{fulldescription}</p>
      
    </div>
  )
}

export default SingleBlogPage