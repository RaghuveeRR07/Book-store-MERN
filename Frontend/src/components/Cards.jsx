import React from 'react'

function Cards({item}) {

  return (
    <div className='mt-4 mb-4 p-3'>
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-300 border">
  <figure>
    <img
      src={item.image}
      alt="image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="cursor-pointer badge badge-outline hover:bg-pink-600 hover:text-white duration-300">Buy Now</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards