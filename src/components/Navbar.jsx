import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between pl-8 pr-8 p-2.5 bg-green-200'>
        <NavLink 
            to="/"
            className={({isActive}) => isActive 
            ? "text-green-900 font-bold underline"
            : "text-amber-800"
            }
        >
            Home
        </NavLink>
        <NavLink 
            to="/shop"
            className={({isActive}) => isActive 
            ? "text-green-900 font-bold underline"
            : "text-amber-800"
            }
        >
            Shop
        </NavLink>
        <NavLink 
            to="/adminportal"
            className={({isActive}) => isActive 
            ? "text-green-900 font-bold underline"
            : "text-amber-800"
            }
        >
            Admin Portal 
        </NavLink>
    </div>
    
  )
}

export default Navbar