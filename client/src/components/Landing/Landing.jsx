import React from "react";
import styles from './Landing.module.css';
import {Link} from "react-router-dom";


const Landing = () => {
    return (
        <div className={styles.landingContainer}>
            <h1>Landing Page</h1>
            <img src="" alt="" />
            <p>¡Bienvenido a nuestro sitio web de países! Aquí podrás explorar y descubrir todos los países del mundo, desde las playas tropicales del Caribe hasta las majestuosas montañas de los Alpes.

Nuestra página de países del mundo ofrece una vista completa y detallada de cada uno de los países que hay en el planeta. Aquí encontrarás información detallada sobre su cultura, historia, gastronomía, clima, y mucho más. También podrás ver fotografías espectaculares de los paisajes más impresionantes de cada país.

Pero eso no es todo, también podrás agregar actividades turísticas asociadas a cada país en nuestro sitio web. Desde tours en bote por los canales de Venecia hasta safaris en el Serengeti, hay algo para todos los gustos y presupuestos.

Además, nuestro sitio web es muy fácil de usar. Puedes explorar los países y actividades turísticas en una sola página, o utilizar nuestro buscador para encontrar lo que buscas rápidamente.

Así que, si estás planeando un viaje o simplemente quieres conocer más sobre el mundo, ¡nuestra página de países del mundo es el lugar perfecto para empezar!</p>
            <div className={styles.link}>
                <Link to="/Home" className={styles.Link}>Go Home!</Link>
            </div>
        </div>
    )
}

export default Landing;