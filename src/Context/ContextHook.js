import React, { createContext, useEffect, useState } from 'react'
import { API_KEY } from '../Constant/constant';


export const Context = createContext();

const ContextHook = (props) =>   {

    const [weatherData,setWeatherData] = useState([]);
    const [cityName,setCityName] = useState("London")
    const [inputCity,setInputCity] = useState("London")
    const [error,setError] = useState("")


    const content={
        weatherData,
        cityName,
        setInputCity,
        inputCity,
        setWeatherData,
        setCityName,
        setError,
        error

        
    }

  return (
    <Context.Provider value={content}>
        {props.children}
    </Context.Provider>
  )
}

export default ContextHook