import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/Hero.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
        <h2>New ARRIVALS ONLY</h2>
   <div className='hero-headline'>
    <div className="hero-hand-icon">
        {/* <p>NEW</p> */}
        {/* <img src={hand_icon} alt="" /> */}
        </div>
        {/* <p>Collections</p>
        <p>for everyone</p> */}
    </div>
    <div className="hero-latest-btn">
        <h4>Latest Collection</h4>
        <img src={arrow_icon} alt="" />
    </div>
   </div>
   <div className="hero-right">
    <img src={hero_image} alt="" />
   </div>
        </div>
      

   

  )
}

export default Hero