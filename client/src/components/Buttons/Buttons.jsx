import React from "react";
import styles from "./Buttons.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { filterContinent, filterActivity, sortByName, sortByPopulation } from "../../Redux/actions";
import { Link } from "react-router-dom";

const Buttons = () => {
    const dispatch = useDispatch();
    const activities = useSelector((state) => state.allActivities)

    const handleContinent = (event) => {
        const continent = event.target.value;
        dispatch(filterContinent(continent));
    };

    const handleActivity = (event) => {
        const activity = event.target.value;
        dispatch(filterActivity(activity));
    };

    const handleName = (event) => {
        const order = event.target.value;
        dispatch(sortByName(order));
    };

    const handlePopulation = (event) => {
        const order = event.target.value;
        dispatch(sortByPopulation(order))
    };

    return(
        <div className={styles.optionsContainer}>
            <div >
                <Link to="/Create">
                    <button >Create Activities</button>
                </Link>
            </div>
            <div>
                <select onChange={handleContinent}>
                    <option value="">Filter by Continent</option>
                    <option value="Antarctic">Antarctic</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
            
            <div>
                <select onChange={handleActivity}>
                    <option value="">Filter by Activity</option>
                    {/* {activities.map((a) => (
                    <option key={a.id} value={a.name}>
                        {a.name}
                    </option>
                ))} */}
                </select>
            </div>
            
            <div>
                <select onChange={handleName}>
                    <option value="">Sort by Name</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
            </div>
            
            <div>
                <select onChange={handlePopulation}>
                    <option value="">Sort by Population</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        </div>
    )
};

export default Buttons;