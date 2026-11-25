import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex gap-7 text-lg px-5 p-5 justify-end'>
        <NavLink 
            to="/"
            className={({isActive}) => 
                `rounded-3xl bg-[#8D4B6E] px-5 py-1 hover:text-white
                ${isActive 
                    ? "text-white font-bold" 
                    : "text-pink-950"
                }`
            }
        >
            Home
        </NavLink>
        <NavLink 
            to="/shop"
            className={({isActive}) => 
                `rounded-3xl bg-[#8D4B6E] px-5 py-1 hover:text-white
                ${isActive 
                    ? "text-white font-bold" 
                    : "text-pink-950" 
                }`
            }
        >
            Shop
        </NavLink>
        <NavLink 
            to="/adminportal"
            className={({isActive}) => 
                `rounded-3xl bg-[#8D4B6E] px-5 py-1 hover:text-white
                ${isActive 
                    ? "text-white font-bold" 
                    : "text-pink-950" 
                }`
            }
        >
            Admin Portal 
        </NavLink>
    </div>
    
  )
}

export default Navbar