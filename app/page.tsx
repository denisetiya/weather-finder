"use client"

import { DropHalf, Thermometer, Cloud, MapPinLine, Wind, CalendarBlank, CloudSun, Sun, CloudRain, CloudLightning, CloudSnow, CloudFog, CloudMoon } from "@phosphor-icons/react";
import Clock from "./components/time/page";
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import axios from 'axios'
import About from "./components/aboutme/page";

interface Weather {
  name: string;
  wind: any;
  sys: any;
  main: {
    temp: number;
    humidity: number;
    sys: {
      country: string;
    };
    wind: {
      speed: number;
    }


  };
  weather: {
    description: string;
  }[];
}

export default function Home() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [city, setCity] = useState('');
  const date = new Date().getDate()

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherByCoordinates(latitude, longitude);
      });
    }
  }, []);

  const fetchWeatherByCoordinates = async (latitude: number, longitude: number) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=328a999c9199584ca8a1c676b673b9f3`);
      setWeather(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=328a999c9199584ca8a1c676b673b9f3`);
      setWeather(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getWeatherComponent = () => {
    if (weather && weather.weather && weather.weather.length > 0) {
      switch (weather.weather[0].description) {
        case "clear sky":
          return (
            <>
              <Sun size={32} />
            </>
          );
        case "few clouds":
          return (
            <>
              <CloudSun size={32} />
            </>
          );
        case "scattered clouds":
          return (
            <>
              <Cloud size={32} />
            </>
          );
        case "broken clouds":
          return (
            <>
              <Cloud size={32} />
            </>
          );
        case "overcast clouds":
          return (
            <>
              <Cloud size={32} /> 
            </>
          );
        case "light rain":
          return (
            <>
             <CloudRain size={32} />
            </>
          );
        case "moderate rain":
          return (
            <>
             <CloudRain size={32} />
            </>
          );
        case "heavy intensity rain":
          return (
            <>
              <CloudRain size={32} />
            </>
          );
        case "thunderstorm":
          return (
            <>
              <CloudLightning size={32} />  
            </>
          );
        case "light snow":
          return (
            <>
              <CloudSnow size={32} />
            </>
          );
        case "snow":
          return (
            <>
              <CloudSnow size={32} />
            </>
          );
        case "mist":
          return (
            <>
              <CloudFog size={32} />
            </>
          );
        default:
          return (
            <>
             <Cloud size={32} />    
            </>
          );
      }
    } else {
      return null;
    }
  };

  const [bg,setBg] = useState("flex flex-col w-full h-screen gap-10 justify-center items-center align-middle")

  const handleTheme = (e:any) => {
    const button = e.target

    if (button.classList.contains("bg-slate-400")) {
      setBg('flex flex-col w-full h-screen gap-10 justify-center items-center align-middle bg-slate-400')
    } else if(button.classList.contains("bg-white")) {
      setBg('flex flex-col w-full h-screen gap-10 justify-center items-center align-middle bg-white')
    } else if(button.classList.contains("bg-gray-600")) {
      setBg('flex flex-col w-full h-screen gap-10 justify-center items-center align-middle bg-gray-600 text-gray-200')
    }else if(button.classList.contains("bg-teal-600")) {
      setBg('flex flex-col w-full h-screen gap-10 justify-center items-center align-middle bg-teal-600 text-white')
    }
  }

  return (
    <div className={bg} >
      <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1.5,
        ease: "easeInOut" }}
       className="flex gap-2 relative">

        <p className="absolute text-[11px] top-3 ml-[11px] font-bold">{date}</p>
        <CalendarBlank size={35} />
        <p className="text-2xl font-semibold">Current weather</p>
      </motion.div>
      
      <motion.div
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
        ease: "easeInOut"
      }}
      className='flex flex-col p-3 py-10 sm:p-10 border-2 border-gray-200 rounded-2xl gap-14 shadow-2xl'>
        <motion.div
        initial={{ opacity: 0,  y:-50}}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay:1
        }}
        >
          <form action="" onSubmit={(e) => {
            e.preventDefault();
            fetchWeather();
          }}
            className="flex gap-4"
          >
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Insert City"
              className="border-2 rounded-3xl p-2 text-sm md:text-lg active:transition-all outline-none active:scale-95 duration-300 "
            />
            <button type="submit" className="border-2 rounded-3xl px-4 text-sm md:text-lg hover:bg-gray-800 hover:text-white transition-all duration-500 active:scale-50">
              Search
            </button>
          </form>
        </motion.div>
        {weather ? (
          <div>

            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              delay: 1
            }}
            className="flex gap-4 justify-center">
              <div className="flex gap-2">
                <Thermometer className="text-4xl md:text-7xl" />
                <p className="text-[25px] font-semibold md:text-7xl">{weather.main.temp}°F</p>
              </div>

              <motion.div
              initial={{ x:100 }}
              animate={{ x:0 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                delay: 1
              }}
              className="flex gap-2 flex-col border-l-2 px-2  border-gray-800">
                <div className="flex gap-2">
                  <DropHalf size={20} />
                  <p className="text-sm sm:text-base">{weather.main.humidity}%</p>
                </div>
                <div className="flex gap-2">
                  <MapPinLine size={25} />
                  <p className="text-sm sm:text-base">{weather.name} ({weather.sys.country})</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x:-50 }}
            animate={{ opacity: 1, x:0 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              delay: 1.3
            }}
            className="flex gap-4 mt-6 justify-center">
              <div className="flex gap-2">
                <motion.div
                animate={{scale: [1.1, 0.85, 1.1], y:[0,3,0,-3,0] }}
                transition={{
                  duration: 5,
                  delay: 3,
                  repeat: Infinity,
                  ease: "linear",
                  type: "tween",
                }}
                >
                  {getWeatherComponent()}
                </motion.div>
                <p>{weather.weather[0].description}</p>
                <motion.div
                animate={{ opacity: 1, x:[0,3,0,-3,0] }}
                transition={{
                  duration: 5,
                  delay: 2.4,
                  repeat: Infinity,
                  ease: "linear",
                  type: "tween",

                }}

                >
                  <Wind size={32} />
                </motion.div>
                <p>{weather.wind.speed} mph</p>
              </div>
            </motion.div>

          </div>
        ) : (
          <div>
            <p>Permission Location denied</p>
            <p>open in Chrome</p>
          </div>
        )}
      </motion.div>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 3,
        delay:1.5
      }}
      className="flex gap-5">
        <motion.button drag onClick={handleTheme} className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-slate-400 border-2 border-gray-500"></motion.button>
        <motion.button drag onClick={handleTheme} className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-gray-300"></motion.button>
        <Clock />
        <motion.button drag onClick={handleTheme} className="w-7 h-7 sm:w-10 sm:h-10  rounded-full bg-gray-600 border-2 border-gray-400"></motion.button>
        <motion.button drag onClick={handleTheme} className="w-7 h-7 sm:w-10 sm:h-10  rounded-full bg-teal-600 border-2 border-gray-400" ></motion.button>
      </motion.div>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 3,
        delay:1.5
      }}
      className="text-[9px]">Tap color to change theme</motion.div>
      <About/>
    </div>
  )
}