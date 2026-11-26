
export default function TeaCard({ tea, onBuy }) {
    if(!tea) return null;
    
  return (
    <div className='bg-white rounded-xl shadow-2xl overflow-hidden '>

        {/* Tea image */}
            <img
                src={tea.photo || 'placeholder-tea.jpg'}
                alt={tea.name}
                className='w-full h-48 object-cover'   
            />

            {/* product details */}
            <div className="p-4 flex flex-col gap-2 bg-[#E7D4D4]">
                <h2 
                    className='font-bold text-lg text-amber-800'
                >
                    {tea.name}
                </h2>
                <p 
                    className="text-sm text-gray-500"
                >
                    {tea.category} &middot; {tea.origin} 
                </p>
                <p 
                    className='line-clamp-2 text-sm text-gray-600'
                >
                    {tea.description}
                </p>
                
                <p className='font-bold text-yellow-600'> Ksh {Number(tea.price).toLocaleString()}</p>    

                <button
                    type="button"
                    onClick={() => onBuy?.(tea.id)}
                    className='bg-pink-900 rounded-3xl text-white p-1 pl-3 pr-3 mt-2 flex items-center justify-center'
                >
                    Buy Item         
                </button> 
            </div>

        
           
        
    </div>
  )
}