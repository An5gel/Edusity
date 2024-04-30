
import React from 'react'
import './About.css'
import about_img from '../../assets/edusity_assets/about.png'
import play_icon from '../../assets/edusity_assets/play-icon.png'

// eslint-disable-next-line react/prop-types
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nuturing Tommorrow's leaders today</h2>
            <p>Edusity University is a premier institution offering a wide range of academic programs, including Master's degrees, graduation degrees, and post-graduation degrees. Our university is committed to providing high-quality education that empowers students to excel in their chosen fields and make meaningful contributions to society.</p>
            <p>At Edusity, we take pride in our diverse and experienced faculty who are dedicated to delivering comprehensive and industry-relevant curriculum. Our programs are designed to equip students with the knowledge, skills, and practical experience needed to succeed in today's competitive job market.</p>
            <p>As you explore our website, you'll discover a vibrant learning community that fosters innovation, collaboration, and lifelong learning. Join us at Edusity University and embark on a transformative educational journey that prepares you for a successful career and a fulfilling life ahead.</p>
        </div>
    </div>
  )
}

export default About