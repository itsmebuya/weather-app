const getDayAndNightForecast = (countries) => {
    const dayAndNight = countries.flatMap((country) => 
    country.cities.map((city) => `${city}, ${country.country}`));

    return dayAndNight;
}
export default getDayAndNightForecast;