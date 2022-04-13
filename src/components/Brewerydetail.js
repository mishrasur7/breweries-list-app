import { Button, Card, CardContent, Typography } from "@mui/material";
import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";


function Brewerydetail () {
 
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
                <Typography>Showing detail about each brewery</Typography>
                <Typography>Name: {breweryDetail.name}</Typography>
                <Typography>Type: {breweryDetail.brewery_type}</Typography>
                <Typography> Street: {breweryDetail.street}</Typography>
                <Typography>Address-2: {breweryDetail.address_2}</Typography>
                <Typography>Address-3: {breweryDetail.address_3}</Typography>
                <Typography>City: {breweryDetail.city}</Typography>
                <Typography>State: {breweryDetail.state}</Typography>
                <Typography>Country province: {breweryDetail.country_province}</Typography>
                <Typography>Postal code: {breweryDetail.postal_code}</Typography>
                <Button>Go back</Button>
            </CardContent>
        </Card>
    ); 
}

export default Brewerydetail; 