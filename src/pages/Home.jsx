import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import pinkCap from '../assets/2.jpg'
import TeaCard from '../components/TeaCard'

export default function Home() {
  return (
    <div
      style={{backgroundImage: `url(${pinkCap})` }} 
      className='h-screen w-full bg-cover bg-top-left bg-no-repeat m-5'
    >
        <Navbar />
        <div 
          className='flex h-screen flex-col m-5'
        >
            <h1 className='text-3xl font-bold'>Steeper Tea House</h1>
            <p className='text-md'> Crafted for Tea Lovers</p>

            <Link 
                to="/shop"
                className='mt-5 border-black p-2 bg-pink-950 hover:bg-green-700 rounded-3xl
                 text-white w-50 font-medium flex justify-center'
            >
            Explore
            </Link>
        </div>

    <div className='shop'>
      <div className="flex justify-between items-center ">
      <h1 className='text-2xl font-bold'>Our unique Teas</h1>
      <Link 
        to='/shop'
        className='hover:underline '
      >
        See more
      </Link>
      </div>
    </div>
        
        
    </div>
  )
}
