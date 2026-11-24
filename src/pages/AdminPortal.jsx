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

        console.log(tea);
        console.log(tea.photo?.length);

        const response = await fetch("http://localhost:3001/teas",{
            method: "POST",
            header: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tea),
        });

        if (!response.ok) {
            console.log("Error:", await response.text());
            return;
        }

        await fetchData();
    };

  return (
    <div>
        <Navbar />        
        <TeaForm onSubmit={handleSubmit}/>

    </div>
  )
}
