import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { WeatherContext } from './WeatherContext';



const MainWeather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const {cityName} = useContext(WeatherContext);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4d866ccd787b74e8553c342ca38f1e8d&units=metric`

    useEffect(() => {
        fetchAPIData();
    }, [cityName])

    const fetchAPIData = () => {
        axios.get(url)
            .then((response) => {
                const data = response.data
                setWeatherData(data);
            })
            .catch((e) => {
                console.log("Error", e)
            })
    }

    if (!weatherData) {
        <p>
            Loading.....
        </p>
    }
    else {
       

        const { name } = weatherData;
        const{temp, humidity} = weatherData.main;
        const {description, icon} = weatherData.weather[0];
        const{all:rainPercentge} = weatherData.clouds
        
        const imageUrl =   `https://openweathermap.org/img/w/${icon}.png`;
        const temperature = Math.round(temp);
        const desc = description.charAt(0).toUpperCase() + description.slice(1);
        return (
            <>
                <div className='max-w-7xl w-full mx-auto  gap-2  grid grid-cols-12 justify-between items-center my-4'>
                    <div className='col-span-6 grid gap-2 '>
                        <p className='text-4xl font-[600]'>{name}</p>
                        <p className='text-lg font-[500]'>{desc}</p>
                        <p className='text-md text-gray-600'>Rain Chance:{rainPercentge}%</p>
                        <p className='text-3xl font-[600]'>{temperature}°C</p>
                    </div>
                    <div className='col-span-6  flex justify-end'>
                        {/* <BsFillSunFill className='h-[16vh] w-[16vh] text-yellow-500' /> */}
                        <img src={imageUrl} alt="Image" className='h-[8vh] w-[10vh]'/>
                    </div>

                </div>

            </>
        )

    }
}

export default MainWeather