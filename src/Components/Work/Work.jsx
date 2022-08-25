import React from 'react'
import './Work.css';
// import Upwork from "../../img/Upwork.png";
// import Fiverr from "../../img/fiverr.png";
// import Amazon from "../../img/amazon.png";
// import Shopify from "../../img/Shopify.png";
// import Facebook from "../../img/Facebook.png";
// import { motion } from 'framer-motion';

export const Work = () => {
  return (
      <div className="works">
           <div className="awesome">
          <span>Works for All these</span>
          <span>Brands &Clients</span>
          <spane>
              We developed awesome website here we provide the client all the new feautres
              <br/>
             We make a website having awesome feautres. 
             <br/>
             We make a website for a client in a quick time.
             <br/>
             You can get all new feautres here.
          </spane>
          
          <button className="button s-button">Hire me</button>

          <div className="blur s-blur" style={{background:"#ABF1FF94"}}>
            </div>
            </div>
            {/* Right side */}
            {/* <div className="right-body">
            <div className="w-right">
                <motion.div 
                initial={{rotate:45}}
                whileInView={{rotate:0}}
                viewport={{margin:'-48px'}}
                transition={{duration:3.5,type:'spring'}}
                className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt=""/>
                </div>    
                <div className="w-secCircle">
                    <img src={Fiverr} alt=""/>
                </div>    
                <div className="w-secCircle">
                    <img src={Amazon} alt=""/>
                </div>    
                <div className="w-secCircle">
                    <img src={Shopify} alt=""/>
                </div>    
                <div className="w-secCircle">
                    <img src={Facebook} alt=""/>
                </div>    
                </motion.div> */}
                {/* Background circles */}
                {/* <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
      </div> */}
      </div>
  )
}
export default Work
