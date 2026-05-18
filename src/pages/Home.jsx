import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className='h-screen w-full bg-[url(./assets/Tea-leaves.jpg)] bg-cover bg-center'>
        <Navbar />
        <div className='flex h-screen flex-col justify-center text-center items-center'>
            <h1 className='text-6xl font-bold'>Steeper Tea House</h1>
            <p className='text-2xl'> Crafted for Tea Lovers</p>

            <Link 
                to="/shop"
                className='mt-5 border-black p-2 bg-green-600 hover:bg-green-700 rounded
                 text-white w-50 font-medium flex justify-center'
            >
            Explore Teas
            </Link>
        </div>
        
        
    </div>
  )
}
