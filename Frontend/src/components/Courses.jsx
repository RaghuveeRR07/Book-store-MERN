import React, { useEffect, useState } from 'react'
import Cards from './Cards.jsx';

import { Link } from 'react-router-dom';
import axios from 'axios';

function Courses() {
    const [book, setBook]= useState([]);
    useEffect(()=>{
        const getBook = async()=>{
            try {
                const res = await axios.get('http://localhost:8000/api/v1/books/');
                // data is the key in the response object 
                console.log(res.data);
                setBook(res.data);
            } catch (error) {
                console.log(error);
            }

        }
        // function call 
        getBook();
    })
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
<div className='mt-48 justify-center items-center text-center'>
    <h1 className=' text-2xl md:text-4xl'>
        We're delighted to have to <span className='text-pink-600'>Here :)</span>
    </h1>
    <p className='mt-10  '>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Dignissimos vel dolor culpa eligendi, quia corrupti?
          Culpa labore voluptatibus aut saepe et dolorum architecto accusamus reprehenderit,
           tempora natus sit unde vel.</p>
           <button className='bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-800 mt-6 '><Link to="/">Back</Link></button>
</div> 
<div className='mt-12 grid grid-cols-1 md:grid-cols-4'>{
    book.map((item)=>(
        <Cards item={item} key={item.id} />
    ))
}</div>

    </div>
    </>
  )
}

export default Courses