import React, { useContext } from "react";
import { Context } from "../Context/ContextHook";
import { memo } from "react";

const Result = () => {
  const { weatherData, cityName, error } = useContext(Context);

  const cityTemp = weatherData ? (weatherData[0]?.main?.temp -273.15).toFixed(0) : null;
  const cityHumidity = weatherData ? weatherData[0]?.main?.humidity : null;
  const weatherIcon = weatherData ? weatherData[0]?.weather[0].icon : null;
  const date = weatherData ? weatherData[0]?.dt_txt : null;
  const climate =weatherData ?  weatherData[0]?.weather[0]?.main : null;
  

  console.log("result")
  console.log(error)

  return (
    <div className="p-12 bg-emerald-200  flex flex-col ml-5 gap-5 rounded-md w-[90%] md:w-3/4 md:mr-7 font-medium  md:h-[520px]">
      {weatherData ?<div className="flex flex-row   justify-between  text-sm border-emerald-500">
        <div className="w-3/4">
          <span className="font-bold text-base block">
            {cityName}
            <span className=" pl-2 text-xs">
              {date ? date?.slice(0, 10) : null}
            </span>
          </span>
          <h5 className="pt-2">Temperature :{cityTemp}&deg;C</h5>
          <h5 className="pt-2">Humidity : {cityHumidity}%</h5>
        </div>
        <div className="text-center shadow-md rounded-lg  ">
          <img
            src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
            alt="icon"
            className="w-20 h-20 "
          />
          <span className=" font-semibold text-[14px] ">{climate}</span>
        </div> 
      </div>: error}
      <div className=" space-y-4 md:grid grid-cols-3 overflow-y-auto">
      {weatherData ? weatherData?.map((data, index) => {
        const dateValue = data.dt_txt.slice(0, 10);
        const timeValue = data?.dt_txt.slice(11);
        const TempValue = (data?.main.temp -273.15).toFixed(0)

        return (
          <>
            <div key={index} className="text-xs bg-emerald-300 p-5 rounded-lg shadow-lg font-semibold md:w-[250px]  ">
                <div className="flex flex-row justify-between">
                        <span className=" bg-emerald-300 font-bold rounded-sm ">{dateValue}</span>
                        <span>{timeValue}</span>
                </div>
                
              <h4 className="pt-2 inline-block mt-1">Temp : {TempValue} &deg;C</h4>
              <h4 className="pt-2 inline-block mt-1 ml-5">Humidity : {data.main.humidity}%</h4>
              
            </div>
          </>
        );
      }) : null }
      </div>
    </div>
  );
};

export default memo(Result);
