import React from 'react';
import './Footer.scss';
import {useState, useEffect} from 'react'
import { AppWrap, MotionWrap } from '../../wrapper';
import {images} from '../../constants'
import {client} from '../../client'

const Footer = () => {

  const [formData, setFormData] = useState({name:'', email:'', message:''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
      <h2 className="head-text"> You can Contact Me whenever you want</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:romain.dessalles@ecam-strasbourg.eu"
            className='p-text'
          >
            romain.dessalles@ecam-strasbourg.eu
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +33 7 81 84 48 96"
            className='p-text'
          >
            +33 7 81 84 48 96
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        
        <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text'
                 type="text" 
                 placeholder='Your Name'
                 name = 'name'
                 value={name}
                 onChange={handleChangeInput}
          />
        </div>
        <div className='app__flex'>
          <input className='p-text'
                 type="email" 
                 placeholder='Your Email'
                 name = 'email'
                 value={email}
                 onChange={handleChangeInput}
          />
        </div>
        <div>
          <textarea 
            className='p-text'
            placeholder='Your message'
            name = "message"
            value = {message}
            onChange = {handleChangeInput}
            />
        </div>
        <button type = "button"
                className='p-text'
                onClick={handleSubmit}
        >
          {!loading ? 'Send Message' : 'Sending...'}
        </button>
      </div>

      ):(
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}      
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact', 'transparent',
)