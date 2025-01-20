import { useEffect, useState } from "react";
import getAllCities from "./utils/get-all-cities.js";
import getDayAndNightForecast from "./utils/get-day-and-night-forecast.js";
import Sun from "./assets/svg/Sun.jsx";
import Moon from "./assets/svg/Moon.jsx";
import Search from "./components/Search.jsx";
import DarkRight from "./components/Dark-Right.jsx";
import LightLeft from "./components/Light-Left.jsx";
import { Background } from "./components/background.jsx";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [allCities, setAllCities] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tempData, setTempData] = useState({});
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar, Mongolia");

  const getCountries = async () => {
    try {
      const response = await fetch(
        `https://countriesnow.space/api/v0.1/countries`
      );

      const result = await response.json();

      const countries = result.data;
      const cities = getAllCities(countries);
      setAllCities(cities);
      setSearchValue("");
    } catch (error) {
      console.log(error);
    }
  };

  const weatherApiKey = "2f2b2027f965496fbb375244251501";
  const getWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`
      );
      const result = await response.json();

      const currentData = getDayAndNightForecast(result);

      setTempData({
        day: currentData.maxtemp_c,
        night: currentData.mintemp_c,
        dayCondition: currentData.condition.text,
      });

      // setWeatherData(result);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleClickCity = (city) => {
    setSelectedCity(city);

    setFilteredData([]);
  };

  const onChange = (event) => {
    setSearchValue(event.target.value);

    const filtered = allCities
      .filter((el) =>
        el.toLowerCase().startsWith(event.target.value.toLowerCase())
      )
      .slice(0, 5);

    setFilteredData(filtered);
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    getWeatherData();
  }, [selectedCity]);

  return (
    <>
      <div className="relative flex items-start justify-center w-full h-screen bg-gray-100">
        <div className="flex items-start justify-start w-1/2 h-screen bg-gray-100 ">
          <Sun />
        </div>
        <div className="flex justify-end items-end w-1/2 h-screen bg-[#0F131E] ">
          <Moon />
        </div>
        <Search
          onChange={onChange}
          value={searchValue}
          filtered={filteredData}
          handleClickCity={handleClickCity}
        />

        <Background />

        <LightLeft
          city={selectedCity}
          condition={tempData.dayCondition}
          data={tempData.day}
          isLoading={isLoading}
        />
        <DarkRight
          city={selectedCity}
          condition={tempData.dayCondition}
          data={tempData.night}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}

export default App;
