import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../Redux/actions';
import styles from './Home.module.css';
import Navbar from '../Navbar/Navbar'
import Cards from '../Cards/Cards'


const Home = () => {
    const dispatch = useDispatch();
    const allCountries = useSelector( (state) => state.allCountries );

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    return (
        <div className={styles.homeContainer}>
            <h1>HOME</h1>
            <Navbar />
            <Cards allCountries={allCountries} />
        </div>
    )
}

export default Home;