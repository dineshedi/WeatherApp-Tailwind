import React, { createContext, useEffect, useState } from 'react'
import { API_KEY } from '../Constant/constant';


export const Context = createContext();

const ContextHook = (props) =>   {

    const [weatherData,setWeatherData] = useState([]);
    const [cityName,setCityName] = useState("London")
    const [inputCity,setInputCity] = useState("London")
    const [flag,setFlag] = useState(false)

  const handleSubmit =()=>{
    setFlag(true)
  }
   

    console.log(flag)
    console.log(weatherData)

    useEffect(()=>{
    
    const fetchData = async () => {
        try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=chennai&appid=${API_KEY}`);
          const jsonData = await response.json();
          setWeatherData(jsonData.list); 
          setCityName(jsonData.city.name)
          setInputCity("")
        
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();

      return ()=>{
        setFlag(false)
      }
        
    },[flag])

    // console.log(weatherData)

    const content={
        weatherData,
        cityName,
        setInputCity,
        inputCity,
        handleSubmit
        
    }

  return (
    <Context.Provider value={content}>
        {props.children}
    </Context.Provider>
  )
}

export default ContextHook