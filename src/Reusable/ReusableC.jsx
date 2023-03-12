import React from 'react'
import { Link } from 'react-router-dom'

const ReusableC = (props) => {
  return (
    <div>
      <div className='resuable-tile'>
            <Link to={`${props.title}`} state={{props}}>
              <img src={props.img} alt="empty"/>
              <p className='title'>{props.title}</p>
              <p className='description'>{props.description}</p>
              <p className='date'>{props.releaseDate}</p>
            </Link>
        </div>
    </div>
  )
}

export default ReusableC
