import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/edusity_assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
          <h1>Transforming Lives for better</h1>
          <p>Work with us to and support people in Kampala. Your help can foster lasting impact and positivity.</p>
          {/* <button className='btn'>Join us <img src={dark_arrow} alt="" /></button> */}
          <button className='btn'>Donate <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero