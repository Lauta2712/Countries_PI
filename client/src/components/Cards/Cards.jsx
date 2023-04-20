import styles from './Cards.module.css';
import Card from '../Card/Card';

const Cards = ({allCountries}) => {
    
    const countriesList = Array.isArray(allCountries) ? allCountries : [allCountries];

    if (countriesList.length === 0) {
        return (
            <div className={styles.notResult}>
                <h4>No se encontraron resultados.</h4>
            </div>
        );
    }

    return (
    <div className={styles.cardsContainer}>
        { countriesList.map( country => {
            return (
                <Card
                key={country.id}
                country= {country}
                />
                )
            } ) }
    </div>
        )
    }
    export default Cards;
    
    //* TERNARIO => algo ? () : ()
