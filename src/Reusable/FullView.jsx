import React from 'react'
import { useLocation } from 'react-router-dom'

const FullView = () => {
  const location= useLocation().state.props;
  return (
    <div className='full-view'>
      
      <img src={location.img} alt="empty" className=''full-view-image/>
      <div>{location.title}</div>
      <p>{location.description}</p>
      <p>{location.releaseDate}</p>
    </div>
  )
}

export default FullView;
