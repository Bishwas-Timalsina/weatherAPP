import React, { useContext, useState } from 'react'
import HeaderComponent from './components/HeaderComponent'
import MainWeather from './components/MainWeather'
import WeekForecast from './components/WeekForecast'
import HourlyForecast from './components/HourlyForecast'
import WeatherInfo  from './components/WeatherInfo'
import { WeatherContext } from './components/WeatherContext'
import CarouselComponent from './components/CarouselComponent'

const App = () => {
  const {cityName} = useContext(WeatherContext);

  console.log(cityName)
  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <div className='px-4 py-12'>
          <div className='grid md:grid-cols-10 gap-6'>
            <div className='lg:col-span-7 col-span-10'>
              <HeaderComponent />
              <MainWeather />
              <HourlyForecast />
              <WeatherInfo />

              
            </div>
            <div className='lg:col-span-3 col-span-10 items-center'>
              <WeekForecast />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App