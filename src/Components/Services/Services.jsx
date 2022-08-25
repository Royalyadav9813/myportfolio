import React from "react";
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from './Resume.pdf';
import{motion} from 'framer-motion';
const Services=()=>{
  const transition={duration:1,type:'spring'}
    return(
        <div className="services" id='Services'>
             {/* Left side */}
            <div className="awesome">
          <span>My Awesome</span>
          <span>Services</span>
          <spane>
              Hii welcome to my new services join me to learn web development.
              <br/>
              Contact me for building your website.
          </spane>
          <a href={Resume} download>
          <button className="button s-button">Download CV</button>

          </a>
          <div className="blur s-blur" style={{background:"#ABF1FF94"}}>
            </div>
            </div>
            {/* Right side */}
            <div className="cards">
            {/* First card */}
              <motion.div 
              whileInView={{left:'14rem'}}
              initial={{left:'25rem'}}
              transition={transition}
              style={{left:'14rem'}}
              >
               <Card
                emoji={HeartEmoji}
                heading={'Frontend'}
                detail={"React js,Html, Css,Javascript,BootsTrap"}   
               />   
              </motion.div>
              {/* Second card */}
              <div
               style={{top:"12rem",left:"-5rem"}}
               >
               <Card
               emoji={Glasses}
               heading={"Backend"}
               detail={"Node js, Express js,Mongodb"} 
           />
           
              </div>
              {/* Third card */}
              <div style={{top:"19rem",left:"12rem"}}>
               <Card
               emoji={Humble}
               heading={"Computer Fundamentals"}
               detail={"Operating System,Computer Networking,Oops,DBMS"} 
               
           />
         
            </div>
            <div className="blur s-blur2" style={{background:"var(--purple"}}></div>
          </div>  
        </div>
    )
}
export default Services