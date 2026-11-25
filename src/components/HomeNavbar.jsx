import { NavLink } from 'react-router-dom'

function HomeNavbar() {
  return (
    <div className='flex gap-7 text-lg px-5 p-5'>
        <NavLink 
            to="/"
            className={({isActive}) => isActive 
            ? "text-black font-bold underline"
            : "text-amber-800"
            }
        >
            Home
        </NavLink>
        <NavLink 
            to="/shop"
            className={({isActive}) => isActive 
            ? "text-black-900 font-bold underline"
            : "text-amber-800"
            }
        >
            Shop
        </NavLink>
        <NavLink 
            to="/adminportal"
            className={({isActive}) => isActive 
            ? "text-black-900 font-bold underline"
            : "text-amber-800"
            }
        >
            Admin Portal 
        </NavLink>
    </div>
    
  )
}

export default HomeNavbar