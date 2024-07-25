import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


const App = () => {

   const [playState, setPlayState] = useState(false);


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='Our Services' title='What we offer'/>
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Memories'/>
        <Campus />
        <Title subTitle='Testimonials' title='What people say'/>
        <Testimonials />
        <Title subTitle='Contact us' title='Get in touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App