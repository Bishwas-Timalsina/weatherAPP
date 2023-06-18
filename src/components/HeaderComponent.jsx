import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { WeatherContext } from './WeatherContext'



const HeaderComponent = (props) => {
  
  const {cityName, setCityName} = useContext(WeatherContext)
  const [inputValue, setInputValue] = useState('')


  const handleInputChange =(event) =>{
    setInputValue(event.target.value);
  }
  const handleSubmit =(event)=>{
    event.preventDefault();
    setCityName(inputValue)
    setInputValue('');
  }


  return (
    <div className='max-w-5xl mx-auto'>
      <h1 className='text-4xl font-[500] text-blue-500'>Weather360</h1>
      <form action="" className='grid grid-cols-12 w-full gap-2 relative' 
      onSubmit={handleSubmit}>
        <input type="text"
          className='h-[20px] bg-[white] py-5 px-3 rounded-lg col-span-12 w-full outline-none'
          placeholder='Enter the City Name'
          onChange={handleInputChange}  
          value={inputValue}
        />
        <button type='submit' className='text-2xl font-[500] absolute right-4 bottom-0 h-full'>
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  )
}

export default HeaderComponent