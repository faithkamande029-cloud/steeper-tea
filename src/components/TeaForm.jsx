import { useState } from 'react'

function TeaForm( { onSubmit }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [origin, setOrigin] = useState("");
    const [price, setPrice] = useState("");
    const [photo, setPhoto] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        onSubmit({
            name: name.trim(),
            description: description.trim(),
            origin: origin.trim(),
            price: Number(price),
            photo
        });

        if (ok) {
            setName("")
            setDescription("")
            setOrigin("")
            setPrice("")
            setPhoto(null)
            form.reset();
        }
    };

    const handlePhoto = (e) => {
        const file = e.target.files[0];

        if (!file) {
            setPhoto(null);
            return;
        }

        if (file && file.size > 500 * 1024) {
            alert("Image must be smaller than 500 KB");
            e.target.value = "";
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => setPhoto(reader.result);
        reader.readAsDataURL(file);
    };
        

  return (
    <div className='h-screen w-full'>

        <div className='p-4'>
            <h1 
                className='font-bold text-2xl'
            >
                Admin Portal
            </h1>
            <p className='text-gray-500 text-sm'>
                Add a tea to the shop, or remove one you no longer sell.
            </p>
        </div>
            
        <form 
            onSubmit={handleSubmit}
            className='backdrop-blur-sm bg-pink-50/60 
            rounded-xl border w-150 flex flex-col p-5 gap-5 m-4 shadow-2xl '>

            <h1 className='pb-3 font-bold text-3xl flex justify-center'>Add New Tea</h1>
            <label htmlFor='name' className='font-bold'>Tea Name:</label>
            <input 
                type="text" 
                placeholder='e.g Kericho gold'
                className='bg-[#e0d1dd] p-2 rounded-xl'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            
            <label htmlFor='description' className='font-bold'>
                Description:</label>
            <textarea 
                type="text" 
                placeholder='description...'
                className='bg-[#e0d1dd] p-2 rounded-xl'
                value={description}
                rows="3"
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            
            <label htmlFor='origin' className='font-bold'> Origin: </label>            
            <input 
                type="text" 
                placeholder='Region, country'
                className='bg-[#e0d1dd] p-2 pl-3 rounded-xl'
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                required
            />
            
            <label htmlFor='price' className='font-bold'> Price(Ksh): </label>
            <input 
                type="number" 
                placeholder='Price'
                className='bg-[#e0d1dd] p-2 rounded-xl'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />

            <label htmlFor="photo" className='font-bold'> Photo: </label>
            <input 
                type="file"
                id="photo"
                accept="image/*" 
                placeholder='Upload photo'
                className='bg-[#e0d1dd] p-2 rounded-xl text-gray-500'
                onChange={handlePhoto}
                
            />            
            
            <button 
                className='bg-[#8D4B6E] p-2 font-bold text-white rounded-3xl w-full'
            >
                Submit
            </button>

        </form>
        
    </div>
  )
}

export default TeaForm