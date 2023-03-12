import axios from 'axios'
import React, {useEffect, useState} from 'react'
import ReusableC from '../../Reusable/ReusableC'
// import ReusableComponent from '../ReusableComponent'
import './bollywood.css'



function Bollywood() {
  const [detail, setDetail]= useState([])
  useEffect(()=>{
    axios.get("https://node-blog-project-rqsn.onrender.com/bollywood")
    .then((res)=>(res.data))
    .then((res)=>{setDetail(res)})
  },[])
console.log(detail)
  return (
    <>
    <div className='bollywood-titles'>
      
        <div className='latest-bollywood'>Latest Bollywood News</div><hr/>
      </div>
    <div className='home-bollywood'>
      
      
      <div className='bollywoodTiles'>
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

export default Bollywood
