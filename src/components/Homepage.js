import React, {useState, useEffect} from "react";
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
            fetch(process.env.REACT_APP_API_URL)
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