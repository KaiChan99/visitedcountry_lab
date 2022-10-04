import { useState, useEffect } from "react";
import CheckboxToggle from "../components/CheckboxToggle";

import CountriesList from "../components/CountriesList";
import VisitedCountriesList from "../components/VisitedCountriesList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);

    const fetchCountries = () => {
        console.log("Getting some country data");

        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((response) => setCountries(response));
    }
    

    useEffect(() => {
        fetchCountries();
    }, [])

    const addNewCountry = (VisitedCountriesList) => {
        
        
        const updatedCountries = [VisitedCountriesList]
        setCountries(updatedCountries);
        
}

// Add some sort of IF condition where if Checkbox is ticked then run addNewCountry




    return(
        <>
            {/* <h1>I'm a country container!</h1> */}
            <CountriesList countries={countries} />
            <VisitedCountriesList onClick={addNewCountry}/>
        </>
    );
}

export default CountriesContainer;

