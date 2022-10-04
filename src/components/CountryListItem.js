import CheckboxToggle from "./CheckboxToggle";

const CountryListItem = ({name, flag, population}) => {
    return (
        <>
        <ul>
            <li> Country name : {name} </li>
            <li> Country flag : {flag} </li>
            <li> Country population : {population} </li>
            <CheckboxToggle/>

        </ul>
        
        </>

        // <li>Country : {name} {flag}, Population : {population}</li>
    );
}

export default CountryListItem;