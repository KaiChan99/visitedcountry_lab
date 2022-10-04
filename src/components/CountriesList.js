import CountryListItem from "./CountryListItem";

const CountriesList = ({countries}) => {



    return(
        <>
            <h2>List of Countries!</h2>
            {
            countries.map((country, index) => {
                return <CountryListItem key={index} name={country.name.common} flag={country.flag} population={country.population}/>
            })
        }
            {/* <CountryListItem countries={countries}/> */}
            {/* <CountryListItem/> */}
        </>
    );
}

export default CountriesList;