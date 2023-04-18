import React from "react";
import styles from './Landing.module.css';
import {Link} from "react-router-dom";
import imagen from '../../imagenes/istockphoto-175482512-612x612.jpg';

const Landing = () => {
    return (
        <div className={styles.landingContainer}>
            <h1>Landing Page</h1>
            {/* <div className={styles.imagen}>
                <img src={imagen}/>
            </div> */}
            <p>¡Bienvenido a nuestro sitio web de países! Aquí podrás explorar y descubrir todos los países del mundo, desde las playas tropicales del Caribe hasta las majestuosas montañas de los Alpes.!</p>
            <div className={styles.link}>
                <Link to="/Home">
                    <button className={styles.button}>Go Home!</button>
                </Link>
            </div>
        </div>
    )
}

export default Landing;