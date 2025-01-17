const getAllCities = (countries) => {
    const citiesAndCountries = countries.flatMap((country) => 
    country.cities.map((city) => `${city}, ${country.country}`));    

    return citiesAndCountries;
}
export default getAllCities;