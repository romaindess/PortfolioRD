import React from 'react'
import {BsInstagram} from 'react-icons/bs';
import {FaLinkedin, FaGithub} from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://github.com/romaindess">
            <FaGithub/>
          </a>
            
        </div>
        <div>
          <a href="https://www.linkedin.com/in/romain-dessalles-64312a223/">
            <FaLinkedin/>
          </a>
            
        </div>  
    </div>
  )
}

export default SocialMedia