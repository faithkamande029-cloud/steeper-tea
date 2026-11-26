import { NavLink } from 'react-router-dom'

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
    <div className='flex m-4  justify-between'>
        <h1 className='text-[#955838] font-Intel font-bold flex items-center justify-center px-2'>
            Steeper Tea
        </h1>
        <div className='flex gap-7 p-3 text-md'>
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