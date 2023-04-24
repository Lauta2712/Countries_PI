import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, pages, handlePaginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
        <nav className={styles.container}>
            <ul className={styles.pagination}>
                <li className={styles.pageItem}>
                    {currentPage > 1 && (
                        <button
                        className={styles.pageLink}
                        onClick={() => handlePaginate(currentPage - 1)}
                        >
                            Prev
                        </button>
                    )}
                </li>

                <li className={styles.pageItem}>
                    {currentPage < pages && (
                        <button
                            className={styles.pageLink}
                            onClick={() => handlePaginate(currentPage + 1)}
                        >
                            Next
                        </button>
                    )}
                </li>
            </ul>
        </nav>
        <div className={styles.span}>
            <p>
                Page {currentPage} of {pages}
            </p>
        </div>
        </div>
    );
};

export default Pagination;