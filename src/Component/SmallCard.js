import React from 'react'
import { Link } from 'react-router-dom'

const SmallCard = (props) => {
  const { imgUrl, title, description, articleid,fulldescription } = props;
  return (
    <Link state={{ title: title, img: imgUrl, description: description, fulldescription:fulldescription,  id: articleid }} to={`/article/${articleid}`}>
      <div className='card__small' >
        <div className="card__data" >
          <div className="smallCard__image">
            <img src={imgUrl} alt=" not found" />
          </div>
          <div className='small'  >
            <h6>{title} .....</h6>
          </div>
        </div>
      </div></Link>
  )
}

export default SmallCard
