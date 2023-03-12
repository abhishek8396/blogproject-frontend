import React from 'react'

import Bollywood from './bollywood/Bollywood'
import Fitness from './Fitness/Fitness'
import Food from './Food/Food'
import Hollywood from './Hollywood/Hollywood'
import './Page.css'
import Technology from './Technology/Technology'



function Home() {
  
  return (
  
    <>
    <div className='main-box'>
      <div className='home-container'>
        <div className='my-img'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1280px-24701-nature-natural-beauty.jpg' alt='empty' className='first'></img>
      </div>
      <div className='small-pic'>
      <img src='https://www.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg' alt='empty' className='second'></img>
      <img src='https://i.insider.com/5e83756d487c225d3b6e1c86?width=1000&format=jpeg&auto=webp' alt='empty' className='third'></img>
      </div>
      
      
      </div>
      <Bollywood />
      <Hollywood/>
      <Technology/>
      <Food/>
      <Fitness/>
   
      </div>
      
      
    </>
    
  )
}

export default Home
