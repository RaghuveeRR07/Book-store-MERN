import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards.jsx';

import { useState, useEffect } from 'react';
import axios from 'axios';

function Freebooks() {
    const [book, setBook]= useState([]);
    useEffect(()=>{
        const getFreeBook = async()=>{
            try {
                const res = await axios.get('http://localhost:8000/api/v1/books/');
               
                const filterData = res.data.filter((data)=> data.price === 0);
                console.log(filterData);
                setBook(filterData);
            } catch (error) {
                console.log(error);
            }
        }
        // function call 
        getFreeBook();
    });

    
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
  return (
    <>
    <div className='mx-auto md:px-20 px-4'>
        <div><h1 className='font-bold text-xl pb-2'>Free Books </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea incidunt ipsa officiis assumenda minus</p>
    </div>
    
    <div>
    <Slider {...settings}>
        {book.map((item)=>(
            <Cards item={item} key={item.id} />
            ))}
        
      </Slider>
    </div>
    </div>
    
    </>
  )
}

export default Freebooks