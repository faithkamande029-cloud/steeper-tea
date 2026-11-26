import { useEffect, useState } from 'react';
import TeaForm from '../components/TeaForm';
import Navbar from '../components/Navbar';
import TeaList from '../components/TeaList';


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

    const handleDelete = async (id) => {
        if(!window.confirm("Remove this tea from the shop")) return;

        const res = await fetch(`http://localhost:3001/teas/${id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            setTeas((prev) => prev.filter((tea) => tea.id !== id));
        }
    };

  return (
    <div className='bg-[#e4bcd3a4] min-h-screen flow-root'>
        <Navbar /> 
        <div className="text-[#8D4B6E] border mt-2"></div>
         <div className='p-4 text-center'>
            <h1 
                className='font-Jacques text-3xl text-[#8D4B6E] font-bold '
            >
                Admin Portal
            </h1>
            <p className='text-[#8D4B6E] text-sm '>
                Add a tea to the shop, or remove one you no longer sell.
            </p>
            
        </div>  
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 max-w-7xl mx-auto px-4 sm:px-6 py-4 pt-3 items-start '>    
            <TeaForm onSubmit={handleSubmit}/>
            <TeaList teas={teas} onDelete={handleDelete}/>
        </div> 

    </div>
  )
}
