import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.target);
    formData.append("access_key", "2d4a3180-18a4-4081-a872-608176c0abf8");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const res = await response.json();

      if (res.success) {
        alert(res.message);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Theme pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="Email icon" aria-label="Email icon" /> <p>sonalikasubudhi2002@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="Phone icon" aria-label="Phone icon" /> <p>+91 8249878403</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="Location icon" aria-label="Location icon" /> <p>Bhubaneswar, Odisha</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' id="name" required />
            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' id="email" required />
            <label htmlFor="message">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message' id="message" required></textarea>
            <button type='submit' className="contact-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit now'}
            </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
