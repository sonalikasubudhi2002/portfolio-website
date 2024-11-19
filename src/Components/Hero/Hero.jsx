import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Sonalika Subudhi's profile" className='profile-img' />
      <h1><span>I'm Sonalika Subudhi,</span> a full stack developer and Power BI analyst.</h1>
      <p>With a strong passion for technology and data, I am eager to work and serve, contributing my skills and expertise to create innovative solutions and drive impactful results.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <div className="hero-resume">
          <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">My resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
