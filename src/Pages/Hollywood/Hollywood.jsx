import React, {useEffect, useState} from 'react'
import ReusableC from '../../Reusable/ReusableC'
import axios from 'axios'
import './Hollywood.css'

const Hollywood = (props) => {
  const [detail, setDetail]= useState([])
  useEffect(()=>{
    axios.get("https://node-blog-project-rqsn.onrender.com/hollywood")
    .then((res)=>(res.data))
    .then((res)=>{setDetail(res)})
  },[])
  return (
    <>
    <div className='home-hollywood'>
    <div className='hollywood-title'>
        <span>HollyWood Movies</span>
      </div>
      <div className='hollywood-container'>
      {detail && detail.map((iteam, index)=>{
        return(
          <>
          {/* <img src={iteam.img}/>{iteam.title} */}
          <ReusableC title={iteam.title}
          img={iteam.img}
          releaseDate={iteam.releaseDate}
          description={iteam.description.slice(0,50)}
          />
          </>
        )
      })}
      </div>
    </div>
    </>
  )
}

export default Hollywood
