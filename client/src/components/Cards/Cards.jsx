import React, { useState } from "react";
import styles from "./Cards.module.css";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import { useSelector } from "react-redux";

const Cards = () => {
    const countries = useSelector((state) => {
        return state.searchResults.length > 0 ? state.searchResults : state.allCountries;
    });
    
    const countriesList = Array.isArray(countries) ? countries : [countries];
    
    const [currentPage, setCurrentPage] = useState(1);

    const paginatedCountries = countriesList.slice((currentPage - 1) * 10, currentPage * 10);

    const pages = Math.ceil(countriesList.length / 10);

    const handlePaginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (paginatedCountries.length === 0) {
        return (
            <div className={styles.notResult}>
                <h4>No se encontraron resultados.</h4>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            
            <Pagination
                currentPage={currentPage}
                pages={pages}
                handlePaginate={handlePaginate}
            />
            <div className={styles.cardsContainer}>
                {paginatedCountries.map((country) => (
                    <Card key={country.id} country={country} />
                ))}
            </div>
        </div>
    );
};

export default Cards;

//* TERNARIO => algo ? () : ()

// import { useState } from 'react';
// import styles from './Cards.module.css';
// import Card from '../Card/Card';

// const Cards = ({allCountries}) => {
//     const [currentPage, setCurrentPage] = useState(1);  //creo un estado local donde guardo la página actual
//     const [countriesPerPage, setCountriesPerPage] = useState(10); //otro estado local para manejar las cards x pag

//     const countriesList = Array.isArray(allCountries) ? allCountries : [allCountries];

//     if (countriesList.length === 0) {
//         return (
//             <div className={styles.notResult}>
//                 <h4>No se encontraron resultados.</h4>
//             </div>
//         );
//     }

//     return (
//     <div className={styles.cardsContainer}>
//         { countriesList.map( country => {
//             return (
//                 <Card
//                 key={country.id}
//                 country= {country}
//                 />
//                 )
//             } ) }
//     </div>
//         )
//     }
//     export default Cards;