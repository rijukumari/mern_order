import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext';

function SingleDetails() {
  const {products} = useContext(StoreContext)
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL ;
  const {id} = useParams();
  const product = products.find((item)=> item._id === id);
  return (

    <div className='flex flex-col gap-3 max-w-xl  w-full mx-auto  border border-gray-300 shadow-lg rounded p-5'>
      <div className='mt-12 flex flex-col gap-3'>

      <img src={`${BACKEND_URL}/images/${product.image}`} alt='' className='w-full h-full'/> 
      <p className='text-lg md:text-3xl font-bold text-gray-900 my-2 text-center'>{product.name}</p>
      <div className='flex flex-col gap-3'>
        <p className='text-gray-900 text-2xl font-bold'>Category: <span className='text-blue-500'>{product.category}</span></p>
        <p className='text-gray-900 font-bold text-2xl'>Price:<span>{product.price}</span></p>
        <p className='text-gray-800 text-lg landing-6'>{product.description}</p>
      </div>
      <button className='bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold mt-3 cursor-pointer duration-300'>Add to Cart</button>
      </div>
    </div>
  )



}


export default SingleDetails
