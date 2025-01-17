const getDayAndNightForecast = (weatherData) => {
    const data = weatherData.forecast?.forecastday?.[0]?.day
    
    return data
}
export default getDayAndNightForecast;
