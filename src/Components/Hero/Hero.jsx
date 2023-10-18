import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

import vdo from '../../assets/bgvdo.mp4'
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero">
      <video muted loop autoPlay>
        <source src={vdo} />
      </video>
      <div className="overlay">
        <div className="extra">
          <h1>Welcome to  <span className='brand'>Aviral Digital Solutions</span></h1>
          <div className="overcon">
            <p>At Aviral Digital Solutions, we believe in the magic of words. We are more than translators; we are architects of understanding in a diverse world. With a passion for transcending linguistic barriers, we weave words that resonate across cultures, languages, and borders. Join us in celebrating India's rich linguistic diversity and explore a world of seamless multilingual communication.</p>
            <div className="innerbtns">
              <div className="btncontainer">
                <button className='obtns'> Join Us</button>
              </div>
              <div className="btncontainer">
                <button className='obtns'> Join Us</button>
              </div>
            </div>
          </div>
        </div>
        <div className="extraa">
          <BsFacebook/>
          <BsInstagram />
          <BsLinkedin />
          <BsTwitter />
        </div>
      </div>
    </div>
  )
}

export default Hero
