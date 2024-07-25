
import React from 'react'
import './About.css'
import about_img from '../../assets/Images/people.png'
import play_icon from '../../assets/edusity_assets/play-icon.png'

// eslint-disable-next-line react/prop-types
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT TEK JUICE FOUNDATION</h3>
            <h2>Making this world a better place</h2>
            <p>We are based in Kampala, Central Region, Uganda. Our non-profit organization is dedicated to serving our community with a range of vital services.</p>
            <p>We work to improve the lives of individuals and families through education, health support, and community initiatives. Our team is committed to making a positive impact, one step at a time.</p>
        </div>
    </div>
  )
}

export default About