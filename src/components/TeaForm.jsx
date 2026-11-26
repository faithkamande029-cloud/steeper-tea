import { useState } from 'react'
import { CATEGORIES } from '../constants/categories';

function TeaForm( { onSubmit }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [origin, setOrigin] = useState("");
    const [price, setPrice] = useState("");
    const [photo, setPhoto] = useState(null);
    const [category, setCategory] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        const ok = await onSubmit({
            name: name.trim(),
            description: description.trim(),
            origin: origin.trim(),
            category,
            price: Number(price),
            photo
        });

        if (ok) {
            setName("")
            setDescription("")
            setOrigin("")
            setPrice("")
            setPhoto(null)
            setCategory("")
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
    <div className='w-full'>

       
            
        <form 
            onSubmit={handleSubmit}
            className='backdrop-blur-sm bg-pink-50/60 
            rounded-xl border w-full flex flex-col p-5 gap-5 m-4 shadow-2xl '>

            <h1 className='pb-3 font-bold text-3xl flex justify-center'>Add New Tea</h1>
            <label htmlFor='name' className='font-bold'>Tea Name:</label>
            <input 
                id='name'
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
                id='description'
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
                id='origin'
                type="text" 
                placeholder='Region, country'
                className='bg-[#e0d1dd] p-2 pl-3 rounded-xl'
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                required
            />
            <label htmlFor='category' className='font-bold'>Category: </label>            
            <select 
                id="category" 
                className='bg-white p-2 pl-3 rounded-xl'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
            >
                <option value="" disabled>Select a category</option>
                {CATEGORIES.map((c) => (
                    <option 
                        key={c} 
                        value={c}
                    >
                        {c}
                    </option>
                ))}

            </select>
            
            <label htmlFor='price' className='font-bold'> Price(Ksh): </label>
            <input 
                id='price'
                type="number" 
                placeholder='Price'
                className='bg-[#e0d1dd] p-2 rounded-xl'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />

            <label htmlFor="photo" className='font-bold'> Photo: </label>
            <input
                id="photo" 
                type="file"                
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