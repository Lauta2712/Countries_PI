import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getCountries } from '../../Redux/actions';
import {Link} from "react-router-dom";
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
            <div className={styles.link}>
                <Link to="/Create">
                    <button className={styles.button}>Create Activities</button>
                </Link>
            </div>
            <Cards allCountries={allCountries}/> 
        </div>
    )
}

export default Home;