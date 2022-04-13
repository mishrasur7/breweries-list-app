import { Button, TextField } from "@mui/material";
import { flexbox } from "@mui/system";
import React, {useState, useEffect} from "react";
import Cards from "./Cards";
import Searchbrewry from "./Searchbrewery";

function Homepage() {
        //creates state for breweries
        const [breweries, setBreweries] = useState([]);

        //fetch breweries after the first render
        useEffect(() => {
            fetchBreweries(); 
        }, []);
    
        //creates fetchBreweries const
        const fetchBreweries = () => {
            fetch('https://api.openbrewerydb.org/breweries')
            .then(response => response.json())
            .then(responseData => setBreweries(responseData))
            .catch(err => console.error(err))
        }

        return(
            <>
            <Searchbrewry brewery={breweries}/>
            </>
        ); 
}

export default Homepage; 