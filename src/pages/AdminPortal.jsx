import React, { useEffect, useState } from 'react';
import TeaForm from '../components/TeaForm';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';


export default function AdminPortal() {
    const [teas, setTeas] = useState([]);


    const fetchData = async () => {
    const res = await fetch("http://localhost:3001/teas")
    const data = await res.json()
    setTeas(data)
  }

    useEffect(() =>{
        fetchData()
    }, [])

    const handleSubmit = async(tea) => {
        await fetch("http://localhost:3001/teas",{
            method: "Post",
            header: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tea),
        })
        fetchData(); //refresh list after adding
    };

  return (
    <div>
        <Navbar />        
        <TeaForm onSubmit={handleSubmit}/>

    </div>
  )
}
