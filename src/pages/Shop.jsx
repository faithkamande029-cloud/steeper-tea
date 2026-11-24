import React, { useEffect, useState } from 'react';
import TeaCard from "../components/TeaCard";
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom'

function Shop() {
    const [teas, setTeas] = useState([])
    const [search, setSearch] = useState("")
    
    useEffect(() => {
        fetch("http://localhost:3001/teas")
        .then(res => res.json())
        .then(data => setTeas(data))
    }, [])

    const filteredTeas = teas.filter((tea)=>
        tea.name.toLowerCase().includes(search.toLowerCase())
    )

    const handleDelete = async(id) => {
        await fetch(`http://localhost:3001/teas/${id}`,{
            method: "DELETE",
        });
        setTeas((prev) => prev.filter((tea) => tea.id !== id));
    }

  return (
    <div className='bg-pink-50 h-screen'>
        <Navbar />
        <div className='flex justify-center pt-3'>
            <input 
                type="text" 
                placeholder='Search...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='bg-white p-2 pl-5 rounded-2xl w-250 '
            />
            <button
                onClick={() => setSearch(search)} 
                className='bg-pink-900 px-2 rounded-2xl w-25 text-white font-bold'
            >
                Search
            </button>

        </div>
        
        <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 p-4'>
            {filteredTeas.map((tea) => (
            <TeaCard 
                key={tea.id} 
                tea={tea} 
                onDelete={handleDelete}
            />
            ))}

        </div>
        
    </div>
  );
}

export default Shop