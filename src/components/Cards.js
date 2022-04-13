import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Detailbutton from './Detailbutton';
import Searchbrewry from './Searchbrewery';


export default function Cards( { brewery }) {
   
  return (
    <div 
    style={{
        display: 'grid', 
        gridTemplateColumns:'repeat(3, 1fr)',
         gridGap: 70,
         margin: 70
         }}>
    {brewery.map((brewery, index) => {
        return (
                <Card key={index}>
                    <CardContent>
                        <Typography><b>Name:</b> {brewery.name}</Typography>
                        <Typography><b>Type:</b> {brewery.brewery_type}</Typography>
                        <Typography><b>City:</b> {brewery.city}</Typography>
                        <Detailbutton brewery={brewery} />
                    </CardContent>
                </Card>
        ); 
    })}
    </div>
  );
}





