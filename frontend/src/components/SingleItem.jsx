import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext';

function SingleItem({id,name,price,image,category}) {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL ;
  const {addToCart} = useContext(StoreContext)
    console.log("ID",id);
  return (
    <div className='max-w-[300px] w-full mx-auto flex flex-col items-center p-2 border border-gray-200 rounded-2xl shadow-xl bg-white'>
      <Link to={`/product/${id}`} className = "w-full h-64">
      <img src= {`${BACKEND_URL}/images/${image}`}  alt='' className='w-full h-48 object-contain rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105'/>
      
      </Link>
      <p className='text-2xl text-center text-gray-800 font-bold  flex -mt-9'>{name}</p>
      <p className='text-lg text-center text-blue-600 font-bold '>{category}</p>
      <p className='text-xl text-center text-orange-500 font-bold '>${price}</p>
      <button onClick={()=> addToCart({id,name,price,image,category})} className='text-white bg-orange-500 w-full py-2 rounded-lg font-semibold mt-3 cursor-pointer duration-300'>Add To Cart</button>
    </div>
  )
} 

export default SingleItem
