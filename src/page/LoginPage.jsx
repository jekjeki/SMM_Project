import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className="min-h-screen w-screen bg-[url('/images/LoginBackground.jpg')] bg-cover bg-center flex items-center justify-end">
        <div 
        style={{
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)'
        }}
        className='w-2/5 h-96 bg-white rounded mr-[50px]'>
            <div className='text-center p-3'>
              <h3 className='text-xl font-bold'>Login</h3>
            </div>
            <div className='px-5 w-full'>
              <label className="block font-medium text-gray-700">Username</label>
              <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className='px-5 w-full py-3'>
              <label className="block mb-2 font-medium text-gray-700">Password</label>
                <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                />
            </div>
            <div className='px-5 w-full py-5'>
              <Link to={'/dashboard'} style={{textDecoration: 'none'}}>
                <button 
                style={{
                  backgroundColor: "rgb(23, 31, 66)"
                }}
                  className='w-full rounded text-white cursor-pointer'
                >Login</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default LoginPage