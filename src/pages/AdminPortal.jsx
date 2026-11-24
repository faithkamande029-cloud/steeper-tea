import { useEffect, useState } from 'react';
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

        try{ 
            const response = await fetch("http://localhost:3001/teas",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(tea),
            });

            if(!response.ok){
                const text = await response.text();
                console.error("Failed to add tea:", response.status, text);
                return false;
            }

            await fetchData();
            return true;
        } catch (error) {
            console.error("Error adding tea:", error);
            return false;
        }
    };

  return (
    <div>
        <Navbar />        
        <TeaForm onSubmit={handleSubmit}/>

    </div>
  )
}
