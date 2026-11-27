import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/Steeper-logo.png'

function Navbar() {
    const linkClass = ({isActive}) => 
            `rounded-3xl bg-[#8D4B6E] px-5 py-1 cursor-pointer 
            shadow-md transition-all duration-200 
            hover:bg-pink-700 hover:shadow-xl hover:translate-y-1 hover:text-white
            active:scale-95 active:translate-y-0 active:bg-pink-700 
            ${isActive 
                ? "text-white font-bold" 
                : "text-pink-950"
            }`;
  return (
    <div className='flex justify-between items-centerq w-full px-4 pr-10 gap-4'>
        <Link to="/">
            <img 
                src={logo} 
                alt="steeper tea logo"
                className='w-40 p-6' 
            />
        </Link>
        <div className='flex gap-7 justify-center items-center text-md'>
            <NavLink 
                to="/"
                className={linkClass}
            >
                Home
            </NavLink>
            <NavLink 
                to="/shop"
                className={linkClass}
            >
                Shop
            </NavLink>
            <NavLink 
                to="/adminportal"
                className={linkClass}
            >
                Admin 
            </NavLink>
        </div>
    </div>
    
  )
}

export default Navbar