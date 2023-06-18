import React, { createContext, useState } from 'react'

export const WeatherContext = createContext();
const WeatherProvider =({children}) => {
    const [cityName, setCityName] = useState('Kathmandu');

    const contextData = {cityName, setCityName};
  return (
    <WeatherContext.Provider value={contextData}>
        {children}
    </WeatherContext.Provider>
  )
}
export default WeatherProvider;

