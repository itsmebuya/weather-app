import { useEffect, useState } from 'react';
import getAllCities from './utils/get-all-cities.js';
import countriesData from './data.jsx'
import Sun from "./components/Sun.jsx"
import Moon from "./components/Moon.jsx"
import Right from "./components/Pine_Right.jsx"
import Left from "./components/Pine_Left.jsx"
import Search from './components/Search.jsx';
import DarkRight from './components/Dark-Right.jsx';
import { use } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [allCities, setAllCities] = useState([])
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar, Mongolia");
  const [filteredData, setFilteredData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCountries = async () => {
    try {
      const response = await fetch(`https://countriesnow.space/api/v0.1/countries`);

      const result = await response.json();

      const countries = result.data;
      const cities = getAllCities(countries)
      setAllCities(cities)

    } catch (error) {
      console.log(error);
    }
  }

  const weatherApiKey = '2f2b2027f965496fbb375244251501'
  const getWeatherData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`)

      const result = await response.json();
      setWeatherData(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  };

  const handleClickCity = (city) => {

  }

  const onChange = (event) => {
    setSearchValue(event.target.value);
    const filtered = allCities.filter((el) => el.toLowerCase().startsWith(searchValue.toLowerCase())).slice(0, 5);
    console.log(filtered);
    

    setFilteredData(filtered)
  }

  useEffect(() => {
    getCountries();
    getWeatherData();
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
        <Search onChange={onChange} value={searchValue} filtered={filteredData} />
       

        <div className='flex justify-center items-center absolute w-full h-screen'>

          <div className='rounded-full w-[140px] h-[140px] border border-white absolute z-1 flex justify-center items-center bg-gray-100'>
            <div className='rounded-full w-[340px] h-[340px] border border-white absolute z-1 flex justify-center items-center'>
              <div className='rounded-full w-[540px] h-[540px] border border-white absolute z-1 flex justify-center items-center'>
                <div className='rounded-full w-[940px] h-[940px] border border-white absolute z-1 flex justify-center items-center'>
                  <div className='rounded-full w-[1340px] h-[1340px] border border-white absolute z-1 flex justify-center items-center'>
                    <div className='rounded-full w-[1740px] h-[1740px] border border-white absolute z-1 flex justify-center items-center'>
                      <div className='flex justify-around'>
                        <DarkRight/>
                        <div className='flex gap-4'>
                          <Left />
                          <Right />
                        </div>
                        {/* <LightLeft/> */}
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <DarkRight />
      </div>
    </>
  )
}

export default App