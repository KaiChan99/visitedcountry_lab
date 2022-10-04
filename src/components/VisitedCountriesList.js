import { useState } from "react";

import CountryListItem from "./CountryListItem";




    

const VisitedCountriesList = ({onClick}) => {
    return(
        <>
            <h2>All the countries I've visited!</h2>
            {/* <CountryListItem/>
            <CountryListItem/> */}

        </>
    );
}

export default VisitedCountriesList;

// To move the countries to a VisitedCountriesList 
// Put checkboxes next to each country that can be ticked off if visited
// if ticked then it moves the state of countryListItem from CountriesList to VisitedCountriesList
// 