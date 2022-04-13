import React from "react";
import { Button, TextField } from "@mui/material";

function Searchbrewry () {
    return (
        <div style={{marginTop: 70}}>
            <TextField 
            id="outlined-basic" 
            label="Search by city name" 
            variant="filled"
            style={{width: 500}}
            />            
            <Button 
            variant="contained"
            style={{height: 55}}
            >Search</Button>

        </div>
    ); 

}

export default Searchbrewry; 