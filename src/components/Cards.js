import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Card, CardContent, Typography } from '@mui/material';


export default function Cards( { brewery }) {
    const moreDetail = () => {

    }
    
  return (
    <div style={{display: 'grid', gridTemplateColumns:'repeat(3, 1fr)', gridGap: 50, margin: 100}}>
    {brewery.map((brewery) => {
        return (
                <Grid>
                <Card>
                    <CardContent>
                        <Typography>{brewery.name}</Typography>
                        <Typography>{brewery.brewery_type}</Typography>
                        <Typography>{brewery.city}</Typography>
                        <Button onClick={moreDetail}>More details</Button>
                    </CardContent>
                </Card>
                </Grid>
        ); 
    })}
    </div>
  );
}





