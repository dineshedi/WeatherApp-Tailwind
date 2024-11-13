import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/ContextHook'
import { memo } from 'react';
import { API_KEY } from '../Constant/constant';

const GetLocation = () => {

  const {setInputCity,inputCity,setWeatherData,setCityName,setError,error} = useContext(Context);

  const [flag,setFlag] = useState(true)

  console.log(error)


  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&appid=${API_KEY}`);
      const jsonData = await response.json();
      setWeatherData(jsonData.list); 
      setCityName(jsonData.city.name)
      setInputCity("")
      console.log(jsonData ) 
      console.log(response ? true : false)
    
    
    } catch (error) {
      console.log('Error fetching data:', error);
      setError(<div className='text-xl text-center'>No Data...</div>)
    }
  };



  // console.log(flag)
  useEffect(() => {
    fetchData();
  }, [flag]);


 
  
  
  return (
    <div className='p-12 bg-emerald-200 flex flex-col ml-5 gap-8 rounded-md w-[90%] md:w-1/4 md:h-[520px]'>
        <input className='px-4 py-1 outline-none rounded-sm focus:ring-2 ring-neutral-400' type='text' placeholder='Enter a city...' value={inputCity} onChange={(e)=>setInputCity(e.target.value)}  />
        <button onClick={()=>setFlag(!flag)}  className='bg-emerald-300 text-center py-2 rounded-lg hover:bg-emerald-400'>Search</button>
    </div>
  )
}

export default memo(GetLocation) 


