import React, {useEffect, useState} from 'react'
import ReusableC from '../../Reusable/ReusableC'
import './Technology.css'
import axios from 'axios'

const Technology = () => {
  const [detail, setDetail]= useState([])
  useEffect(()=>{
    axios.get("https://node-blog-project-rqsn.onrender.com/technology")
    .then((res)=>(res.data))
    .then((res)=>{setDetail(res)})
  },[])
  return (
    <div className='home-technology'>
      <div className='technology-title'>
        <span>Latest Technology</span>
      </div>
      <div className='technology-div'>
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
  )
}

export default Technology
