import React from 'react'

const Modal = ({isModelOpen, setIsModelOpen,children}) => {
    if (!isModelOpen) return null;
  return (
    <div className=' fixed inset-0 bg-gray-400 bg-opacity-70 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md'>
        <button className='absolute top-4 right-4 text-gray-800 text-3xl  bg-red-600 px-4 py-2' onClick={() => setIsModelOpen(false)}>&times;</button>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Modal
