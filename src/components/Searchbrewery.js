import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Card, CardContent, Typography } from '@mui/material';
import Detailbutton from "./Detailbutton";

function Searchbrewry ( { brewery }) {
    //creates a state to save input city value
    const [city, setCity] = useState('');
   

    const cityCanged = (event) => {
        setCity(event.target.value); 
    }

    return (
        <div>
        <div style={{marginTop: 70}}>
            <TextField
            value={city}
            onChange={cityCanged}
            id="outlined-basic" 
            label="Search by city name" 
            variant="filled"
            style={{width: 700}}
            />            
        </div>
        <div
          style={{
            display: 'grid', 
            gridTemplateColumns:'repeat(3, 1fr)',
             gridGap: 70,
             margin: 70
             }}
        >
        {brewery.filter((val) => {
            if(city === "") {
                return val
            } else if (val.city.toLowerCase().includes(city.toLowerCase())) {
                return val
            }
        }).map((val, key) => {
            return (
                <div>
                <Card>
                    <CardContent>
                        <Typography><b>Name:</b> {val.name}</Typography>
                        <Typography><b>Type:</b> {val.brewery_type}</Typography>
                        <Typography><b>City:</b> {val.city}</Typography>
                        <Detailbutton brewery={brewery}/>
                    </CardContent>
                </Card>
                </div>
              ); 
        })
        }
        </div>
        </div>
    ); 

}

export default Searchbrewry; 