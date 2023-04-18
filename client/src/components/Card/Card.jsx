import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = (country) => {
    const {id, name, flags, region} = country.country;

    return (
    <>
        <div className={styles.cardContainer}>
            <Link to={`/Home/${id}`}>
                <h2>{name}</h2>
                <img src={flags} alt='country'/>
                <h3>{region}</h3>
            </Link>
        </div>
    </>
    )
}

export default Card;