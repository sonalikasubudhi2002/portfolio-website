import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Decorative pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="Sonalika Subudhi" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am Sonalika Subudhi, a dynamic full stack developer and Power BI analyst from Bhubaneswar, Odisha. Specializing in front-end development with React.js and back-end solutions using Firebase, I excel at crafting comprehensive and efficient web applications.</p>
                <p>My expertise in Power BI allows me to transform complex data into insightful and actionable visualizations. Driven by a passion for innovation and excellence, I am dedicated to leveraging my skills to deliver impactful results and contribute meaningfully to every project I undertake.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML, CSS, JS</p><hr className="skill-bar" style={{width:"70%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr className="skill-bar" style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Firebase</p><hr className="skill-bar" style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Power BI, SQL</p><hr className="skill-bar" style={{width:"70%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>4+</h1>
            <p>Full Stack Projects</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>Power BI Dashboards</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>6+</h1>
            <p>Certifications</p>
        </div>
      </div>
    </div>
  )
}

export default About
