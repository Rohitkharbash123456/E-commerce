import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { addToCart } from '../redux/CartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  const dispatch = useDispatch()


  const handleAddtoCart = (e,product) =>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))
    alert ("Product Added Sucessfully")

  }
  return (
    <Link to = {`/product/ ${product.id}`}>
    <div className='bg-white p-4 shadow rounded relative border
    transform transition-transform duration-300 hover:scale-105'>
      <img src = {product.image} alt= "" className='w-full h-48 object-contain mb-4'></img>
      <h3 className='text-lg font-semibold'>{product.name}</h3>
      <p className='text-gray-500'>{product.price}</p>
      <div className='flex items-center mt-2'>
        <FontAwesomeIcon icon = {faStar} className='text-yellow-500'></FontAwesomeIcon>
        <FontAwesomeIcon icon = {faStar} className='text-yellow-500'></FontAwesomeIcon>
        <FontAwesomeIcon icon = {faStar} className='text-yellow-500'></FontAwesomeIcon>
        <FontAwesomeIcon icon = {faStar} className='text-yellow-500'></FontAwesomeIcon>
      </div>
      <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600
      group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-100'
       onClick={(e) => handleAddtoCart(e,product)}>
        <span className='group-hover:hidden'>+</span>
        <span className='hidden group-hover:block'>Add to Cart</span>
      </div>
    </div></Link>
  )
}

export default ProductCard
