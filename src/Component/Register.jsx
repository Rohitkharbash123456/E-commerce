import React from 'react'

const Register = ({openLogin}) => {
  return (
    <div>
    <h2 className='text-2xl font-bold mb-4 text-left'>Sign Up</h2>
    <form>
    <div className='mb-4'>
          <label htmlFor='' className='block text-gray-700 text-left'>Name</label>
          <input type = "text" className='w-full px-3 py-2 border' placeholder = "Enter Name"></input>
      </div>
      <div className='mb-4'>
          <label htmlFor='' className='block text-gray-700 text-left'>Email</label>
          <input type = "email" className='w-full px-3 py-2 border' placeholder = "Enter Email"></input>
      </div>

      <div className='mb-4'>
          <label htmlFor='' className='block text-gray-700 text-left' >Password</label>
          <input type = "password" className='w-full px-3 py-2 border' placeholder = "Enter Password"></input>
      </div>

     
           <div className='mb-4'>
<button type = "submit" className='w-full bg-red-600 text-white py-2'>Sign Up</button>
           </div>
    </form>
    <div className='text-center'>
      <span className='ml-2 text-gray-700'>Already have an account? </span>
      <button className='text-red-800' onClick={openLogin}>Login</button>
    </div>
  </div>
  )
}

export default Register
