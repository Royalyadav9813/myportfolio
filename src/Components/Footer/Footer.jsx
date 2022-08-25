import React from 'react'
import "./Footer.css"
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Wave from '../../img/wave1.png'
export const Footer = () => {
  return (
      <div className="footer">
          <img src={Wave} alt="" style={{width:'100%'}}/>
          <div className="f-content">
          <a href="mailto:gadarjee123@gmail.com" className='send-email'>Send email</a>
              <div className="f-icons">
               
               <a  href="https://github.com/Royalyadav9813"><Github color='white' size='3rem'/></a> 
              
               <a href='https://www.linkedin.com/in/gaurav-kumar-9310ba214'><Linkedin color='white' size='3rem'/> </a> 
                 <a href='https://www.instagram.com/?hl=en'><Insta color='white' size='3rem'/>
                  </a> 
                
                  
              </div>
          </div>
      </div>
  )
}
