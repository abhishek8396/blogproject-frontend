import React, {useEffect, useState} from 'react'
import ReusableC from '../../Reusable/ReusableC'
import axios from 'axios'
import './Fitness.css'

const Fitness = () => {
  const [detail, setDetail]= useState([])
  useEffect(()=>{
    axios.get("https://node-blog-project-rqsn.onrender.com/fitness")
    .then((res)=>(res.data))
    .then((res)=>{setDetail(res)})
  },[])
console.log(detail)
  return (
    <div className='home-fitness'>
      <div className='fitness-title'>
            <span>Latest Fitness</span>
      </div>
      <div className='fitness-container'>
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

export default Fitness
