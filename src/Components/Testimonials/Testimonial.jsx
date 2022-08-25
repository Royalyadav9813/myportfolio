import React from 'react'
import "./Testimonial.css"
import { Swiper,SwiperSlide } from 'swiper/react';
import Real from "../../img/Real.jpg";
import Vishkwarma from "../../img/vishwakrama.jpg";
import Quizz from "../../img/kbc.jpg";
import Supermarket from "../../img/supermarket-management-system.png";
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import { Link } from 'react-scroll';


const Testimonial = () => {
    const Clients=[
        {
            img:Real,
            review:
            "Using this website a Multiple users can join a room by accesing the room-id of the user and at a Real time he/she can write or make changes in the code of the others users and can edit their code in a Real time."
             ,
            button:"Github link"
            
        },
        {
            img:Vishkwarma,
            review:
            "This is a MERN E-commerce agriculture machinery website where a person can buy Machine which is used in agriculture.It is made by using React js,Node js,Express js and Mongo DB."
            ,  
            button:"Github link"

        },
       
        {
            img:Quizz,
            review:
            "Here he/she can register his/her name and start the game and won the prizes according to the number of right answer he/she gave once it gave a wrong answer it returns the total amount of money he Won during the game" ,
            button:"Github link"

        },
        {
            img:Supermarket,
            review:
            "In this project,there are various function like add function to add the number of products in the market and delete function to delete products if it is not there.Buyer can buy the products according to its availability. After buying the all products it returns the total amount" ,
            button:"Github link"

        },
    ]

    
  return (
      <center><div className="t-wrapper" id="Testimonials">
          <div className="t-heading">
          
          <span> MY Recent </span>
              <br></br>
              <span>Projects</span>
         
             
              {/* <span> from me...</span> */}
              <div className="blur t-blur1" style={{background:"var(--purple)"}}></div>
              <div className="blur t-blur2" style={{background:"#ABF1FF94"}}>
            </div>
          </div>
          {/* Slider */}
          <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{clickable:true}}
      
          >
  {Clients.map((client,index)=>{
      return(
          <SwiperSlide key={index}>
          <div className="testimonial">
          <img src={client.img} alt=""/>
              <span>{client.review}</span>
         <button className="button i-button" >
        {/* <Link spy={true} to='' smooth={true} activeClass="activeClass">
    {client.button}
    </Link> */}
    <a href="https://github.com/Royalyadav9813"style={{textDecoration:"none",color:"blue",fontWeight:"bold"}}>Github Link</a>
        </button>   
          </div>
          
             
          </SwiperSlide>
      )
  })}
          </Swiper>
      </div>
      </center>
  )
}

export default Testimonial