import React, { useState } from 'react'

function TeaForm( { onSubmit }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [origin, setOrigin] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit =(e) => {
        e.preventDefault();

        onSubmit({
            name,
            description,
            origin,
            price: Number(price)
        });

        setName("")
        setDescription("")
        setOrigin("")
        setPrice("")
    };

  return (
    <div className='h-screen w-full bg-[url(./assets/tea-bag.jpg)] 
        bg-cover bg-center flex flex-col justify-center items-center'>
            
        <form 
            onSubmit={handleSubmit}
            className='backdrop-blur-sm bg-white/20 
            rounded-xl border w-150 flex flex-col p-5 gap-5'>

            <h1 className='pb-3 font-bold text-3xl flex justify-center'>Add New Tea</h1>
            <label htmlFor='name' className='font-bold'>Tea Name:</label>
            <input 
                type="text" 
                placeholder='tea name...'
                className='bg-white p-2'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            
            <label htmlFor='description' className='font-bold'>
                Description:</label>
            <textarea 
                type="text" 
                placeholder='description...'
                className='bg-white p-2'
                value={description}
                rows="3"
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            
            <label htmlFor='origin' className='font-bold'> Origin: </label>            
            <input 
                type="text" 
                placeholder='county, country'
                className='bg-white p-2'
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                required
            />
            
            <label htmlFor='price' className='font-bold'> Price: </label>
            <input 
                type="number" 
                placeholder='price'
                className='bg-white p-2'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />            
            
            <button className='bg-green-700 p-2 w-40 font-bold'>Submit</button>

        </form>
        
    </div>
  )
}

export default TeaForm