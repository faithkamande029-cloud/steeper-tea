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
        await fetch(`http://localhost:3001/teas${id}`,{
            method: "DELETE",
        });
        setTeas((prev) => prev.filter((tea) => tea.id !== id));
    }

  return (
    <div className='bg-green-200'>
        <Navbar />
        <input 
            type="text" 
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='bg-white flex p-2 text-md rounded-2xl w-200 m-3'
        />
        {filteredTeas.map((tea) => (
            <TeaCard key={tea.id} tea={tea} onDelete={handleDelete}/>
        ))}
    </div>
  );
}

export default Shop