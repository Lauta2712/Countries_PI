import styles from './Cards.module.css';
import Card from '../Card/Card';

const Cards = ({allCountries}) => {
    
    const countriesList = allCountries;

    return (
        <div className={styles.cardsContainer}>
            { countriesList?.map( country => {
                return (
                <Card
                    key={country.id}
                    country= {country}
                />
                )
            })}
        </div>
    )
}

export default Cards;