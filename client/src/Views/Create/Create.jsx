import styles from './Create.module.css';
import React from 'react';
import Form from "../../components/Form/Form";
import {Link} from "react-router-dom";


const Create = () => {
    return (
        <div>
            
            <Form />
            
            <div className={styles.link}>
            <Link to="/Home">
                <button className={styles.button}>Go Home!</button>
            </Link>
            </div>
        </div>
    )
}

export default Create;