import { useEffect, useState } from 'react';
import getAllCities from './utils/get-all-cities.js';
import getDayAndNightForecast from './utils/get-day-and-night-forecast.js';
import Sun from "./components/Sun.jsx"
import Moon from "./components/Moon.jsx"
import Right from "./components/Pine_Right.jsx"
import Left from "./components/Pine_Left.jsx"
import Search from './components/Search.jsx';
import DarkRight from './components/Dark-Right.jsx';
import LightLeft from './components/Light-Left.jsx';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [allCities, setAllCities] = useState([])
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar, Mongolia");
  const [filteredData, setFilteredData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [condition, setCondition] = useState('');
  const [tempData, setTempData] = useState({})

  const getCountries = async () => {
    try {
      const response = await fetch(`https://countriesnow.space/api/v0.1/countries`);

      const result = await response.json();

      const countries = result.data;
      const cities = getAllCities(countries)
      setAllCities(cities)
      setSearchValue("")
    } catch (error) {
      console.log(error);
    }
  }

  const weatherApiKey = '2f2b2027f965496fbb375244251501'
  const getWeatherData = async () => {

    try {

      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`)
      const result = await response.json();

      const currentData = getDayAndNightForecast(result)

      setTempData({ day: currentData.maxtemp_c, night: currentData.mintemp_c, dayCondition: currentData.condition.text })

      setWeatherData(result);
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error);
    }
  };

  const handleClickCity = (city) => {
    setSelectedCity(city)

    setFilteredData([]);
  }

  const onChange = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
    
    const filtered = allCities.filter((el) => el.toLowerCase().startsWith(event.target.value.toLowerCase())).slice(0, 5);
    console.log(filtered);
    

    setFilteredData(filtered)
  }

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    getWeatherData();
  }, [selectedCity])



  return (
    <>
      <div className='flex justify-center items-start w-full h-screen bg-gray-100 relative'>
        <div className='flex justify-start items-start w-1/2 h-screen bg-gray-100 '>
          <Sun />
        </div>
        <div className='flex justify-end items-end w-1/2 h-screen bg-[#0F131E] '>
          <Moon />
        </div>
        <Search onChange={onChange} value={searchValue} filtered={filteredData} handleClickCity={handleClickCity} />


        <div className='flex justify-center items-center absolute w-full h-screen'>

          <div className='rounded-full w-[140px] h-[140px] border border-white absolute z-1 flex justify-center items-center bg-gray-100'>
            <div className='rounded-full w-[340px] h-[340px] border border-white absolute z-1 flex justify-center items-center'>
              <div className='rounded-full w-[540px] h-[540px] border border-white absolute z-1 flex justify-center items-center'>
                <div className='rounded-full w-[940px] h-[940px] border border-white absolute z-1 flex justify-center items-center'>
                  <div className='rounded-full w-[1340px] h-[1340px] border border-white absolute z-1 flex justify-center items-center'>
                    <div className='rounded-full w-[1740px] h-[1740px] border border-white absolute z-1 flex justify-center items-center'>
                      <div className='flex gap-4'>
                        <Left />
                        <Right />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <LightLeft city={selectedCity} condition={tempData.dayCondition} data={tempData.day} isLoading={isLoading} />
        <DarkRight city={selectedCity} condition={tempData.dayCondition} data={tempData.night} isLoading={isLoading} />
      </div>
    </>
  )
}

export default App