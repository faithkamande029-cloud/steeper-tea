import React from 'react'

function TeaList({ teas, onDelete }) {
    if (teas.length === 0) {
        return <p className='p-4 text-pink-700'>No teas in the shop yet.</p>
    }
  return (
    <div className='m-4 bg-[#CFB5C8] border rounded-xl p-5 w-full max-w-xl'>
        <h2 className='font-bold'>Current Teas</h2>

        <ul>
            {teas.map((tea) => (
                <li
                    key={tea.id}
                    className='flex items-center gap-3 border-b p-5 last:border-b-0' 
                >
                    {tea.photo && (
                        <img
                            src={tea.photo}
                            alt={tea.name}
                            className='w-12 h-12 rounded-lg object-cover'
                        />
                    )}

                    <div className='flex-1'>
                        <p className='font-bold text-pink-950'>{tea.name}</p>
                        <p>Ksh {Number (tea.price).toLocaleString()}</p>
                    </div>

                    <button
                        type='button'
                        onClick={() => onDelete(tea.id)}
                        className='bg-[#8D4B6E] hover:bg-pink-700 text-white text-sm rounded-3xl px-3 py-1'
                    >
                        Remove
                    </button>
                </li>
            ))}
        </ul>

    </div>
  )
}

export default TeaList