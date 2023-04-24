import {  useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getCountries } from '../../Redux/actions';
import {Link} from "react-router-dom";
import styles from './Home.module.css';
import SearchBar from '../searchBar/SearchBar';
import Cards from '../Cards/Cards';
import Buttons from '../Buttons/Buttons';


const Home = () => {
    const dispatch = useDispatch();
    const allCountries = useSelector( (state) => state.allCountries );

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])
    
    return (
        <div className={styles.homeContainer}>
            <h1>HOME</h1>
            
            <SearchBar/>
            
            <Buttons />
            
            <Cards 
                allCountries={allCountries}
            />
        
        </div>
    )
}

export default Home;