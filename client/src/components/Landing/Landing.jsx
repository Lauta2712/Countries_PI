import React from "react";
import styles from './Landing.module.css';
import {Link} from "react-router-dom";
import imagen from '../../imagenes/0000000Led-0003973197Mundo.jpg';

const Landing = () => {
    return (
        <div className={styles.landingContainer}>
            <h1>Landing Page</h1>
            <p>¡Bienvenido a nuestro sitio web de países! Aquí podrás explorar y descubrir todos los países del mundo, desde las playas tropicales del Caribe hasta las majestuosas montañas de los Alpes.!</p>
            <div className={styles.imagen}>
                <img src={imagen}/>
            </div>
            <div className={styles.link}>
                <Link to="/Home">
                    <button className={styles.button}>Go Home!</button>
                </Link>
            </div>
        </div>
    )
}

export default Landing;