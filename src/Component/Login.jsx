import React from 'react'

const Login = ({openSignUp}) => {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4 text-left'>Login</h2>
      <form>
        <div className='mb-4'>
            <label htmlFor='' className='block text-gray-700 text-left'>Email</label>
            <input type = "email" className='w-full px-3 py-2 border' placeholder = "Enter Email"></input>
        </div>

        <div className='mb-4'>
            <label htmlFor='' className='block text-gray-700 text-left' >Password</label>
            <input type = "password" className='w-full px-3 py-2 border' placeholder = "Enter Password"></input>
        </div>

        <div className='mb-4 flex items-center justify-between'>
            <label htmlFor='' className='inline-flex items-center'>
            <input type = "checkbox" className='form-checkbox'></input>
            <span className='ml-2 text-gray-700'>Remember Me</span></label>
            <a href = "" className='text-red-800'> Forgot password ?</a>       
             </div>
             <div className='mb-4'>
<button type = "submit" className='w-full bg-red-600 text-white py-2'>Login</button>
             </div>
      </form>
      <div className='text-center'>
        <span className='ml-2 text-gray-700'>Don't have an account? </span>
        <button className='text-red-800' onClick={openSignUp}>Sign Up</button>
      </div>
    </div>
  )
}

export default Login
