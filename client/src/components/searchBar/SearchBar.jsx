// import React from "react";
// import styles from "./SearchBar.module.css";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { getByName } from "../../Redux/actions";

// export default function SearchBar() {
//     const dispatch = useDispatch();
//     const [name, setName] = useState('')

//     const handleChange = (event) => {
//         setName(event.target.value);
//     };
    
    
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         dispatch(getByName(name))
//     };
    
//     console.log(name);

//     return (
//         <div className={styles.searchBar}>
//             <input type='search' onChange={ event =>handleChange(event)} value={name} placeholder="Search country"/>
//             <button onClick={event => handleSubmit(event)}>Search</button>
//         </div>
//     );
// }