import React, {useEffect, useState} from 'react'
import ReusableC from '../../Reusable/ReusableC'
import './Food.css'
import axios from 'axios'
const Food = () => {
  const [detail, setDetail]= useState([])
  useEffect(()=>{
    axios.get("https://node-blog-project-rqsn.onrender.com/food")
    .then((res)=>(res.data))
    .then((res)=>{setDetail(res)})
  },[])
console.log(detail)
  return (
    <div className='home-food'>
      <div className='food-title'>
        <span>Latest Food</span>
      </div>
      <div className='food-continer'>
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

export default Food
