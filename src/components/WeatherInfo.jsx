import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { WeatherContext } from './WeatherContext';
import { FaTemperatureHigh, FaWind } from 'react-icons/fa'
import { WiHumidity } from 'react-icons/wi'
import { MdOutlineCompress } from 'react-icons/md';



const MainWeather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const { cityName } = useContext(WeatherContext);

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
        const { temp, humidity, pressure, feels_like } = weatherData.main;
        const { description, icon } = weatherData.weather[0];
        const { all: rainPercentge } = weatherData.clouds
        const { speed: windSpeed } = weatherData.wind;

        const imageUrl = `https://openweathermap.org/img/w/${icon}.png`;
        const temperature = Math.round(temp);
        const desc = description.charAt(0).toUpperCase() + description.slice(1);
        return (
            <>
                <div className='w-[100%] mx-auto bg-[white] my-4 py-4 rounded-md '>
                    <p className='text-left text-2xl font-[600] px-10 my-4 text-gray-600'>More Information</p>
                    <div className='grid grid-cols-12 gap-y-8 gap-x-4 md:px-10 px-4 justify-between items-center '>

                        <div className='col-span-6 flex flex-row gap-x-4 items-start justify-start'>
                            <WiHumidity className='md:text-3xl text-xl text-gray-400' />
                            <div>
                                <p className='md:text-2xl text-[18px] text-gray-500'>Humidity</p>
                                <p className='text-md font-[600]'>{humidity}%</p>
                            </div>
                        </div>
                        <div className='col-span-6 flex flex-row gap-x-4 items-start justify-start'>

                            <FaWind className='md:text-3xl text-xl text-gray-400' />
                            <div>
                                <p className='md:text-2xl text-[18px] text-gray-500'>Wind Speed</p>
                                <p className='text-md font-[500]'>{windSpeed}km/h</p>
                            </div>
                        </div>
                        <div className='col-span-6 flex flex-row gap-x-4 items-start justify-start'>
                            <MdOutlineCompress className='md:text-3xl text-xl text-gray-400' />

                            <div>
                                <p className='md:text-2xl text-[18px] text-gray-500'>Pressure</p>
                                <p className='text-md font-[600]'>{pressure}mmhg</p>
                            </div>
                        </div>
                        <div className='col-span-6 flex flex-row gap-x-4 items-start justify-start'>
                            <FaTemperatureHigh className='md:text-3xl text-xl text-gray-400' />
                            <div>
                                <p className='md:text-2xl text-[18px] text-gray-500'>Feels Like</p>
                                <p className='text-md font-[600]'>{Math.round(feels_like)}°C</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

    }
}

export default MainWeather