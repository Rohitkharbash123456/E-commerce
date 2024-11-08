import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Checkout from './Checkout'
const Order = ({order}) => {
    const navigate = useNavigate()
 
 
    return (
      <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
        <h2 className='text-2xl font-semibold mb-4'>
          Thank you for your order
        </h2>
        <p >Your has been placed successfully you will recieve an email conformation soon!!!</p>
        <div className='mt-6 p-4 border rounded-lg bg-gray-100'>
          <h3 className='text-lg font-semibold mb-2  text-left '>Order Summary</h3>
          
          <p className=' text-left'>Order Number :{ order.orderNumber}</p>
          <div className='mt-4  text-left'>
              <h4 className='text-md font-semibold mb-2  text-left'>
                  Shipping Information
              </h4>
            
              <p>{order.shippingInformation.address}</p>
              <p>{order.shippingInformation.city}</p>
              <p>{order.shippingInformation.zip}</p>
             
          </div>
          <div className='mt-4  text-left'>
            <h4 className='text-md font-semibold mb-2  text-left'>Items Ordered</h4>
            {order.products.map(product => (
              <div key={product.id} className='flex justify-between mt-2'>
                <p>{product.name} (X{product.quantity})</p>
                <p>${product.price * product.quantity}</p>
                </div>
            ))}
          </div>
          <div className='mt-4 flex justify-between'>
            <span>Total Price :</span>
            <span className='font:semibold'>${order.totalPrice.toFixed(2)}</span>
          </div>
        </div>
        <div className='mt-6  text-left px-2'>
          <button className='bg-green-500 text-white py-2 px-4 mx-2 hover:bg-green-600'>
            Track Order
          </button>
          <button className='bg-red-600 text-white py-2 px-4 mx-2 hover:bg-red-800'>
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }
  
  export default Order