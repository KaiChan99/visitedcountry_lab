import {useState} from 'react';


// This logic doesn't quite work but the checkbox can be ticked


const CheckboxToggle = () => {
    let [checkboxTicked, setCheckboxTicked] = useState(false);


    const toggleCheckbox = ()=> {
        setCheckboxTicked(checkboxTicked);
}

return (
    <>
    <input type="checkbox" onClick={toggleCheckbox}/>

    </>
);

}

export default CheckboxToggle;