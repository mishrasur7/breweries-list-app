import { Card, CardContent, Typography } from "@mui/material";
import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";


function Brewerydetail (brewery) {
      //creates state for breweries
      const [breweries, setBreweries] = useState([]);
      const { id } = useParams();
      const breweryDetail = breweries.find((brewery) => brewery.id === Number(id)); 

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



    return (
        <Card>
            <CardContent>
                <Typography>{breweryDetail.name}</Typography>
                <Typography>Go Back</Typography>
            </CardContent>
        </Card>
    ); 
}

export default Brewerydetail; 