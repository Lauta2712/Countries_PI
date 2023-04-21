import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, cardsPerPage, totalCards, handlePaginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
    
    <nav className={styles.container}>
        <ul className={styles.pagination}>
        <li className={styles.pageItem}>
            <button className={styles.pageLink} onClick={() => handlePaginate(currentPage - 1)}>
                Prev
            </button>
        </li>

        <li className={styles.pageItem}>
            <button className={styles.pageLink} onClick={() => handlePaginate(currentPage + 1)}>
                Next
            </button>
        </li>
    </ul>
    </nav>
    );
};

export default Pagination;