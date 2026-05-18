import React from 'react'

export default function TeaCard({ tea}) {
    if(!tea) return null;
    
  return (
    <div className='bg-green-200 p-4 m2 h-screen'>

        <div className='bg-green-50 w-50 h-90 rounded-xl p-4 shadow-2xl flex flex-col gap-4'>
            <h2 className='font-bold text-xl'>{tea.name}</h2>
            <p>{tea.description}</p>
            <p>{tea.orgin}</p>
            <p className='font-bold'>{tea.price}</p>    

            <button
                onClick={() => onDelete(tea.id)}
                className='bg-red-500 text-white px-2 py-1 mt-2'
            >
                Delete            
            </button> 

        </div>
           
        
    </div>
  )
}