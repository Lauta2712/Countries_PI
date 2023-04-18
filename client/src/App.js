import React from "react";
import {Route, Routes, useLocation} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Detail from './components/Detail/Detail.jsx';
import Create from './components/Create/Create.jsx'
import Landing from './components/Landing/Landing.jsx'
import SearchBar from "./components/searchBar/SearchBar.jsx";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from './Redux/actions.js';


function App() {
  const pathname = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
  <>
    <div>
      {pathname === '/home' && <SearchBar />}
    </div> 

    <Routes>
        <Route path="/" element={ <Landing/> } />

        <Route path="/Home" element={ <Home/> } />
        
        <Route path="/Home/:id" element={ <Detail/> } />
        
        <Route path="/Create" element={ <Create/> } />

    </Routes>

  </>
  );
}

export default App;
