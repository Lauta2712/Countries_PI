import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getCountries } from '../../Redux/actions';
import styles from './Home.module.css';
import SearchBar from '../searchBar/SearchBar'
import Cards from '../Cards/Cards'


const Home = () => {
    const dispatch = useDispatch();
    const allCountries = useSelector( (state) => state.allCountries );
    //const allCountriesCopy = useSelector((state) => state.allCountriesCopy);

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])
    
    return (
        <div className={styles.homeContainer}>
            <h1>HOME</h1>
            <SearchBar />
            <Cards allCountries={allCountries}/> 
        </div>
    )
}

export default Home;