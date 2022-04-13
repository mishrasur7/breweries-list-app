import React, { useState } from "react";
import { TextField, IconButton} from "@mui/material";
import { Card, CardContent, Typography } from '@mui/material';
import Detailbutton from "./Detailbutton";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

function Searchbrewry ( { brewery }) {
    //creates a state to save input city value
    const [city, setCity] = useState('');
   
    //updates the searched city value to the city state
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
            label="Search..." 
            variant="filled"
            style={{width: 600}}
            InputProps={{
                endAdornment: (
                    <IconButton>
                        <SearchSharpIcon />
                    </IconButton>
                )
            }}
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
        {brewery.filter((value) => {
            if(city === "") {
                return value
            } else if (value.city.toLowerCase().includes(city.toLowerCase())) {
                return value
            }
        }).map((value, key) => {
            return (
                <div>
                <Card>
                    <CardContent>
                        <Typography><b>Name:</b> {value.name}</Typography>
                        <Typography><b>Type:</b> {value.brewery_type}</Typography>
                        <Typography><b>City:</b> {value.city}</Typography>
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