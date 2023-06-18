import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { BsFillSunFill } from 'react-icons/bs'
import { WeatherContext } from './WeatherContext'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const HourlyForecast = () => {
    const { cityName } = useContext(WeatherContext);
    const [hourlyData, setHourlyData] = useState([])

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=4d866ccd787b74e8553c342ca38f1e8d&units=metric`

    useEffect(() => {
        fetchAPIData();
    }, [cityName])

    const fetchAPIData = () => {
        axios.get(url)
            .then((response) => {
                const data = response.data
                const listData = data.list.slice(0, 7)
                setHourlyData(listData);
            })
            .catch((e) => {
                console.log("Error", e)
            })
    }
    if (!hourlyData) {
        <p>
            Loading....
        </p>
    }
    else {
        console.log(hourlyData);
        return (
            <>
                <div className='w-[100%] mx-auto bg-[white] my-4 py-4 rounded-md '>
                    <p className='text-left text-2xl font-[600] px-10 text-gray-600'>Hourly Forecast<small className='text-sm'> (24hr Format)</small></p>


                    <div className='mx-auto mt-4 py-4 grid md:grid-cols-7 grid-cols-12 md:w-[100%] w-[90%] gap-2 gap-y-4 '>
                        {

                            hourlyData.map((info, index) => {
                                const date = new Date(info.dt_txt);
                                const month = date.getMonth() + 1;
                                const day = date.getDate();
                                const hour = date.getHours();
                                const { icon, description } = info.weather[0];
                                const imageUrl = `https://openweathermap.org/img/w/${icon}.png`;
                                const desc = description.charAt(0).toUpperCase() + description.slice(1);

                                return (
                                    <div key={index} className='md:col-span-1 col-span-4 md:w-[100%] md:border-none border border-solid-2 rounded-md px-2'>


                                        <div className='flex flex-col gap-1 items-center'>

                                            <span className='text-[14px] font-[500]'>{`${month}/${day}`}</span>
                                            <span className='text-[14px] font-[500]'>{`${hour}:00`}</span>

                                            <img src={imageUrl} alt="" className='h-[8vh]' />
                                            <p className='text-[18px] font-[500]'>{Math.round(info.main.temp)}°C</p>
                                            <p className='text-[16px] font-[400]'>{desc}</p>

                                        </div>

                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </div >
            </>
        )

    }

}

export default HourlyForecast