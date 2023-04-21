import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {  getById } from '../../Redux/actions';

import styles from './Detail.module.css';



const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const countries = useSelector( (state) => state.countriesDetail);

    
    useEffect ( () => {
        dispatch(getById(id))
    }, [dispatch, id] )
    
    return (
        <div className={styles.detailContainer}>
            {countries && countries.map( (country) => (
                    
                    <div key={country.id}>
                        <h3>ID: {country.id}</h3>
                        <h2>{country.name}</h2>
                        <img src={country.flags} alt="country" className={styles.detailImage}/>
                        <p>Continent: {country.region}</p>
                        <p> Capital: {country.capital}</p>
                        <p>Subregion: {country.subregion}</p>
                        <p>Area: {country.area}</p>
                        <p> Population: {country.population} people</p>
                        {
                            country.Activities && country.Activities.map( (activity) => (
                                <div key={activity.id}>
                                    <h4>Activity Name: "{activity.name}"</h4>
                                    <h4>Season: {activity.season}</h4>
                                </div>
                            ) )
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Detail;
{/* <p>Activities: {country.Activities.name}</p>
<p>Activity Season: {country.Activities.season}</p> */}