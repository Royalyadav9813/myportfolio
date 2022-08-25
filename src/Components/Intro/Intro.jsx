import React from "react";
import './Intro.css';
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Gaurav from '../../img/gaurav.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import {motion} from 'framer-motion'
import { Link } from 'react-scroll';

const Intro=()=>{
    const transition={duration:2,type:'spring'}
    return(
<div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>
                Gaurav Kumar</span>
                <span>Fullstack WebDeveloper with high level of experience in web desigining and development,producting the Quality Work</span>

            </div>
        <button className="button i-button">
        <Link spy={true} to='Contact' smooth={true} activeClass="activeClass">
    Hire me
    </Link>
        </button>  
        <div className="i-icons">
       
        <a  href="https://github.com/Royalyadav9813"><Github color='orange' size='5rem'/></a> 

              
               <a href='https://www.linkedin.com/in/gaurav-kumar-9310ba214'><Linkedin color='orange' size='5rem'/> </a> 
               
                 <a href='https://www.instagram.com/?hl=en'><Insta color='orange' size='5rem'/>
                  </a> 
         
        </div>  
        </div>
        <div className="i-right">
        <img src={Vector1} alt=""/>
        <img src={Vector2} alt=""/>
        <img src={Gaurav} alt=""/>
        <motion.img
        initial={{left:'-36%'}}
        whileInView={{left:'-24%'}}
        transition={transition}
         src={Glassesimoji} alt=""/>
        <motion.div 
        initial={{top:'-4%',left:'-74%'}}
        whileInView={{left:'68%'}}
        transition={transition}
        style={{top:'-4%',left:'63%',color:'orange'}}
        className='floating-div'
        >
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
        </motion.div>
        <motion.div 
        initial={{left:'9rem',top:'18rem'}}
        whileInView={{left:'0rem'}}
        transition={transition}
        style={{top:'17rem',left:'0rem',color:'orange'}}
        className='floating-div'
        >
            <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
        </motion.div>
        {/* Blur div */}
        <div className="blur" style={{background:"rgb(238,210,255)"}}></div>
        <div className="blur" style={{
            background:'#C1F5FF',
            top:'14rem',
            width:'21rem',
            height:'11rem',
            left:'-9rem'

        }}></div>
        </div>
    </div>
    )   
}
export default Intro