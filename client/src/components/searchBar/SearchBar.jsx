import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getByName } from "../../Redux/actions";

export default function SearchBar() {
    const dispatch = useDispatch()
    const [searchString, setSearchString] = useState('');
    const allCountries = useSelector((state)=> state.allCountries);
    const countries = Array.isArray(allCountries) ? allCountries : [allCountries]; //verifico que allCountries sea un array acá también


    const handleChange = (event) => {
        event.preventDefault();
        setSearchString(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const filteredCountries = countries.filter(
            (country) => country.name.toLowerCase() === searchString.toLowerCase()
            );
            if (filteredCountries.length > 0) {
                dispatch(getByName(filteredCountries[0].name));
            } else {
                alert("Country not found");
            }
        };
        
        return (
        <div>
            <div className={styles.searchBar}>
                <form onSubmit={handleSubmit}>
                    <input 
                    type='search' 
                    placeholder="Search country" 
                    onChange={handleChange} 
                    value={searchString}
                    />
                    <button type="submit" >Search</button>
                </form>
            </div>
        </div>
    );
}
// const handleSubmit = (event) => {
//     event.preventDefault();
//     const filteredCountries = allCountries.filter(country => country.name.toLowerCase() === searchString.toLowerCase());
//     dispatch(getByName(filteredCountries));
// };