import React, { useCallback, useContext } from 'react'
import GetLocation from './GetLocation'
import Result from './Result'


const Main = () => {

  
  return (
    <div className='flex   md:flex flex-col  py-5 items-center '>
      <div className=' bg-emerald-200 justify-center text-center text-2xl font-bold text-neutral-800 rounded-md  md: w-3/4 p-7  md:text-4xl  '>Weather App</div>
      <div className='w-full h-full gap-6 pt-7 flex flex-col md:flex-row'>
        <GetLocation/>
        <Result/>
      </div>
    </div>
  )
}

export default Main