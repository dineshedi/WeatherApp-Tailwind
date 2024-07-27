import React, { useContext } from 'react'
import { Context } from '../Context/ContextHook'
import { memo } from 'react';

const GetLocation = () => {

  const {setInputCity,InputCity,handleSubmit,setFlag} = useContext(Context);

  console.log("Getlocation")

  
  
  return (
    <div className='p-12 bg-emerald-200 flex flex-col ml-5 gap-8 rounded-md w-[90%] md:w-1/4 md:h-[520px]'>
        <input className='px-4 py-1 outline-none rounded-sm focus:ring-2 ring-neutral-400' type='text' placeholder='Enter a city...' value={InputCity} onChange={(e)=>setInputCity(e.target.value)}  />
        <button onClick={handleSubmit}  className='bg-emerald-300 text-center py-2 rounded-lg hover:bg-emerald-400'>Search</button>
    </div>
  )
}

export default memo(GetLocation) 



// <input className='w-[250px] md:w-[300px] h-10 p-5 outline-none ring-2 rounded-sm ring-emerald-200 ' type='text' placeholder='Enter a city...' />
// <div className='w-[250px] md:border border-emerald-300 md:w-[300px] text-neutral-700 rounded-lg font-medium bg-emerald-100 hover:bg-emerald-300 hover:ring-2 ring-emerald-300 '><button  className='w-[250px] md:w-[300px] h-10'>Search</button></div>