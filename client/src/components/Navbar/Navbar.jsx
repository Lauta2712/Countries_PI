import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.searchBar}>
            <form action="" >
                <input type="search" placeholder="Search" />
                <button type='Submit' >Buscar</button>
            </form>
        </div>
    )
}

export default Navbar;