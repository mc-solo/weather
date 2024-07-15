import React from 'react'
import { FaReact } from 'react-icons/fa'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TempAndDetails from './components/TempAndDetails'
import Forecast from './components/Forecast'
import getWeatherData from './services/weatherService'

const App = () => {
  const getWeather = async () => {
    const data = await getWeatherData('weather', {q:'berlin'})
    console.log(data)
  }

  getWeather();
  
  return (
    <div className='mx-auto max-w-screen-2xl min-w-full  py-2 px-20 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700 text-2xl'>

      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TempAndDetails />
      <Forecast />
      <Forecast />
    </div>
  )
}

export default App


