/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import './Category.css'
import axios from 'axios';

export default function Category() {
  const [categoryList,setCategory] = useState([])
   async function getCategory(){
  let {data} = await axios.get(`https://api.escuelajs.co/api/v1/categories`);
    setCategory(data)
   }
   useEffect(()=>{
  getCategory()

   },[]);
   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <div className='p-5' >
      <Slider {...settings}>
       {
        categoryList.map((Category)=>{
          return <>
          <div >
            <h5 id='h55'>{Category.name}</h5>
          <img src={Category.image}  className='w-100 p-2 ' height={200}/>
          </div>
          </>
        })
       }
      </Slider>
    </div>
  )
}


