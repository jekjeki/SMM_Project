import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen w-screen bg-[url('/images/mainDesign.jpg')] bg-cover bg-center">
      {/* navbar */}
        <div className='p-5 flex justify-between items-center'>
          <div>
            <img className='w-48' src='/images/LogoPutih.png' />
          </div>
          <div>
            <Link to={'/login'} style={{textDecoration: 'none'}}>
              <button 
              style={{
                backgroundColor: 'rgb(255,187,67)',
                fontWeight: 'bold'
              }} className='text-white'>LOGIN</button>
            </Link>
          </div>
        </div>
        {/* first content */}
        <div className='flex items-center min-h-[calc(100vh-80px)]'>
          <div className='m-[20px]'>
            <div className='text-6xl text-white font-bold w-1/2'>
              <h3 className=''>SMM Terlengkap Pelayanan Terbaik</h3>
            </div>
            <div className='text-xl text-white w-1/2 mt-[20px]'>
              <p>Social Media Management layanan terbaik kami siap mendukung all social media kamu! CS kami siap membantu semua kebutuhanmu</p>
            </div>
            <div className='mt-5'>
              <button style={{
                backgroundColor: 'rgb(255,187,67)', 
                color: 'white', 
                fontWeight: 'bold'
              }}>Coba Sekarang</button>
              <button className='ml-5 bg-white'>Pelajari Lebih Lanjut</button>
            </div>
          </div>
        </div>
        {/* floating whatsapp button */}
        <FaWhatsapp
          className='fixed bottom-4 right-4 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300'
        />
    </div>
  )
}

export default LandingPage