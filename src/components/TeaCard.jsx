
export default function TeaCard({ tea, onDelete }) {
    if(!tea) return null;
    
  return (
    <div className='bg-white rounded-xl'>

        {/* Tea image */}
            <img
                src={tea.image}
                alt={tea.name}
                className='w-full h-40 object-cover rounded-t-2xl'   
            />

            {/* product details */}
            <div className="p-4 flex flex-col gap-2">
                <h2 
                    className='font-bold text-lg text-amber-800'
                >
                    {tea.name}
                </h2>
                <p 
                    className='line-clamp-2 text-sm text-gray-600'
                >
                    {tea.description}
                </p>
                <p 
                    className="text-sm text-gray-500"
                >
                    {tea.origin}
                </p>
                <p className='font-bold text-yellow-600'>Ksh {tea.price}</p>    

                <button
                    onClick={() => onDelete(tea.id)}
                    className='bg-pink-900 rounded-3xl text-white p-1 pl-3 pr-3 mt-2 flex items-center justify-center'
                >
                    Buy Item         
                </button> 
            </div>

        
           
        
    </div>
  )
}