import React, {useRef}from 'react'
import './Testimonials.css'
import next_icon from '../../assets/edusity_assets/next-icon.png'
import back_icon from '../../assets/edusity_assets/back-icon.png'
import user_1 from '../../assets/edusity_assets/user-1.png'
import user_2 from '../../assets/edusity_assets/user-2.png'
import user_3 from '../../assets/edusity_assets/user-3.png'
import user_4 from '../../assets/edusity_assets/user-4.png'

const Testimonials = () => {

   const slider = useRef();
   let tx = 0;

    const slideForward =()=> {
        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward =()=> {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    
    

  return (
    <div className="testimonials">
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn'onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Loveness Peter</h3>
                                <span>Kampala, Uganda</span>
                            </div>
                        </div>
                        <p>Joining the Tek Juicee Foundation has been a game-changer for me. The foundations dedication to empowering individuals through technology and education is outstanding. The training programs and workshops are top-notch, providing the skills and confidence needed to thrive in the tech industry.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>John Doe</h3>
                                <span>Mukono, Uganda</span>
                            </div>
                        </div>
                        <p>Joining the Tek Juice Foundation has been a game-changer for me. The foundations dedication to empowering individuals through technology and education is outstanding. The training programs and workshops are top-notch, providing the skills and confidence needed to thrive in the tech industry.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Michelle Johnson</h3>
                                <span>Kampal, Uganda</span>
                            </div>
                        </div>
                        <p>Joining the Tek Juice Foundation has been a game-changer for me. The foundations dedication to empowering individuals through technology and education is outstanding. The training programs and workshops are top-notch, providing the skills and confidence needed to thrive in the tech industry.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Mbarara, Uganda</span>
                            </div>
                        </div>
                        <p>Joining the Tek Juicee Foundation has been a game-changer for me. The foundations dedication to empowering individuals through technology and education is outstanding. The training programs and workshops are top-notch, providing the skills and confidence needed to thrive in the tech industry.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials