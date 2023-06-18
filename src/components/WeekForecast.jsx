import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { BsFillSunFill } from 'react-icons/bs'
import { WeatherContext } from './WeatherContext';
const WeekForecast = () => {

    const {cityName}= useContext(WeatherContext);
    const [weatherData, setWeatherData] = useState(null);
    const [weekData, setWeekData] = useState([]);

    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&key=21cc56d792fc4a2cb399721062206e33`
    useEffect(() => {
        fetchAPIData();
    }, [cityName])

    const fetchAPIData = () => {
        axios.get(url)
            .then((response) => {
                const data = response.data;
                setWeatherData(data)

            }).catch((e) => {
                console.log("Error", e)
            })
    }

    if (!weatherData) {
        <p>
            Loading....
        </p>
    }
    else {
        console.log(weatherData)
        console.log(weatherData.data)
        return (
            <>
                <div className='w-[100%] mx-auto bg-[white] h-full text-center py-4 rounded-lg'>
                    <p className='text-3xl font-[500]'>Weekly Forecast</p>
                    

                    {weatherData.data.map((info, index) => {
                        const date = new Date(info.datetime);
                        const month = date.getMonth() + 1;
                        const day = date.getDate();
                        const { icon, description } = info.weather;
                        const imgURL = `https://cdn.weatherbit.io/static/img/icons/${icon}.png`
                        return (
                            <div key={index} className='grid grid-cols-12 mt-6 justify-around gap-2 items-center'>
                                <p className='col-span-3 text-[14px] font-[500]'>{`${month}/${day}`}</p>
                                <p className='col-span-5 text-[16px] font-[400]'>{description}</p>
                                <img src={imgURL} alt="" className='col-span-1 h-[4vh]' />
                                <p className='col-span-3 text-[18px] font-[500]'>{Math.round(info.max_temp)}°C</p>

                            </div>
                        )

                    })

                    }
                    {/* <div className='grid grid-cols-12 mt-6'>
                        <p className='col-span-3'>Today</p>
                        <BsFillSunFill className='text-[16px] text-yellow-500 col-span-2' />
                        <p className='col-span-4'>Sunny</p>
                        <p className='col-span-3'>32/16</p>
                    </div> */}
                </div >
            </>
        )
    }


}

export default WeekForecast