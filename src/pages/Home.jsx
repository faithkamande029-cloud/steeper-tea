import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HomeNavbar from '../components/HomeNavbar'
import pinkCap from '../assets/hero-img-1.jpg'
import TeaCard from '../components/TeaCard'
import Footer from '../components/Footer'
import logo from '../assets/Steeper logo.png'

export default function Home() {
  const [teas , setTeas] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/teas")
      .then(res => res.json())
      .then(data => setTeas(data));
  }, []);

  return (
    <div className='min-h-screen w-full bg white'>
      <div
        style={{backgroundImage: `url(${pinkCap})` }} 
        className='bg-cover bg-top-left bg-no-repeat '
      >
          <HomeNavbar />

          {/* Hero section */}
          <div 
            className='flex h-[58vh] flex-col px-10 justify-center'
          >
              
              <img 
                src={logo} 
                alt="steeper tea logo"
                className='w-40 pb-6' 
              />
              <h1 className='text-4xl font-bold'>Crafted For Tea Lovers</h1>
              <p className='text-sm text-gray-500 w-70'>Single-origin teas, sourced slowly and steeped well.</p>

              <Link 
                  to="/shop"
                  className='mt-5 border-black p-2 bg-[#8D4B6E] hover:bg-pink-900 rounded-3xl
                  text-white w-50 font-medium flex justify-center'
              >
              Explore
              </Link>
          </div>
      </div>
      {/* Tea display */}
      <div className='shop px-6 bg-white pt-3 '>
        <div className="flex justify-between items-center w-full px-4 pr-10 gap-4">
          <h1 className='text-2xl font-bold'>Our unique Teas</h1>
          <Link 
            to='/shop'
            className='hover:underline whitespace-nowrap text-pink-800'
          >
            See more
          </Link>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6'>
          {teas.slice(0, 4).map((tea) => (
            <TeaCard
              key={tea.id}
              tea={tea}
            />
          ))}
        </div>
      </div>

      <Footer/>
          
          
      
    </div>
  )
}
