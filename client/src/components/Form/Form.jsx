import React, { useEffect } from "react";
import styles from './Form.module.css';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createActivity, getCountries } from "../../Redux/actions";


const Form = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.allCountries)
    const [form, setForm] = useState({
        name : '',
        dificulty : '',
        duration: '',
        season: '',
        countries: []
    })

    const [errors, setErrors] = useState({
        name : '',
        dificulty : '',
        duration: '',
        season: '',
        countries: ''
    })

    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(()=>{
        dispatch(getCountries())
    } ,[dispatch] )

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setForm({...form, [property]:value});
        validate({...form, [property]:value});
    }

    const handleCountry = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        if (property === 'countries'){
            setForm({
                ...form, countries: form.countries.includes(value)
                ? [...form.countries] 
                : [...form.countries, value]
            })
            validate({
                ...form, countries: form.countries.includes(value)
                ? [...form.countries] 
                : [...form.countries, value]
            })
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let activity = form;
        dispatch(createActivity(activity))
        setIsSuccess(true);
    };

    const handleDelete = (id) => {
        setForm({
            countries: [...form.countries].filter((element) => element !== id)
        })
    }
    
    const validate = (form) => {
        let errors = {};
        const regexLettersOnly = /^[a-zA-Z\s]*$/;
        const regexNumbersOnly = /^[0-9]*$/;
    
        if (!form.name.trim()) {
            errors.name = 'Name is required';
        } else if (!regexLettersOnly.test(form.name)) {
            errors.name = 'Name can only contain letters and spaces';
        }
    
        if (!form.dificulty.trim()) {
            errors.dificulty = 'Difficulty is required';
        } else if (!regexNumbersOnly.test(form.dificulty)) {
            errors.dificulty = 'Difficulty can only contain numbers';
        } else if (form.dificulty < 1 || form.dificulty > 5) {
            errors.dificulty = 'Difficulty must be between 1 and 5';
        }
    
        if (form.duration && !regexNumbersOnly.test(form.duration)) {
            errors.duration = 'Duration can only contain numbers';
        }
        if (form.duration && form.duration < 0) {
            errors.duration = 'Duration must be greater than zero';
        }
    
        if (!form.season.trim()) {
            errors.season = 'Season is required';
        } else if (!['Summer', 'Autumn', 'Winter', 'Spring'].includes(form.season)) {
            errors.season = 'Season must be one of these: Summer, Autumn, Winter, Spring';
        }
        
        if (!form.countries || !form.countries.length) {
            errors.countries = 'You must select at least one country';
        }
    
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    console.log(errors);
    return (
    <div className={styles.formContainer}>
        
        <h2 className={styles.formTitle}>
            Complete the next Form to create activities
        </h2>
        
        <form onSubmit={handleSubmit} >
            <div className={styles.divContainer}>
            <label className={styles.formTitle}>Name</label>
            <input type="text" value={form.name} onChange={handleChange} name="name"/>
            {errors.name && <span>{errors.name}</span>}
            </div>

            <div className={styles.divContainer}>
            <label className={styles.formTitle}>Dificulty</label>
            <input type="text" value={form.dificulty} onChange={handleChange} name="dificulty"/>
            {errors.dificulty && <span>{errors.dificulty}</span>}
            </div>

            <div className={styles.divContainer}>
            <label className={styles.formTitle}>Duration</label>
            <input type="text" value={form.duration} onChange={handleChange} name="duration"/>
            {errors.duration && <span>{errors.duration}</span>}
            </div>

            <div className={styles.divContainer}>
            <label className={styles.formTitle}>Season</label>
            <input type="text" value={form.season} onChange={handleChange} name="season"/>
            {errors.season && <span>{errors.season}</span>}
            </div>

            <div className={styles.divContainer}>
            <label className={styles.formTitle}>Country/Countries</label>
            <select value={form.countries} onChange={handleCountry} name="countries" >
                <option value="">Select a country</option>
                {
                    countries.map((country) => (
                        <option key={country.alpha3Code} value={country.id} >{country.id}</option>
                    ))
                }
            </select>
            {errors.countries && <span>{errors.countries}</span>}
            </div>

            {
                form.countries?.map((id) => (
                    <div>
                        <input type="button" value="X" onClick={()=>handleDelete(id)} />
                        <p>{countries.find(country => country.id === id).name}</p>
                    </div>
                ))
            }
            {
                Object.keys(errors).length > 0 ?(
                    <div className={styles.formTitle}>
                        <span>The Form must be completed successfully</span>
                    </div>
                ):(
                    <div>
                        <button className={styles.button}>CREATE</button>
                    </div>
                )
            }
            
            {isSuccess === true && <p className={styles.success}>Activity created successfully!</p>}
        </form>
    </div>
    )
};

export default Form;

{/* <div>
<button className={styles.button}>CREATE</button>
</div> */}
{/* <input type="text" value={form.countries} onChange={handleChange} name="countries"/> */}