import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Card, CardContent, Typography } from '@mui/material';


export default function Cards( { brewery }) {
    const moreDetail = () => {

    }
    
  return (
    <div style={{marginTop: 50}}>
        {brewery.map((brewery, index) => {
            return (
                <Grid 
                container 
                spacing={3}
                >
                    <Grid item xs={3} key={index} style={{marginTop: 50, marginLeft: 50}}>
                    <Card>
                        <CardContent>
                            <Typography>{brewery.name}</Typography>
                            <Typography>{brewery.brewery_type}</Typography>
                            <Typography>{brewery.city}</Typography>
                            <Button onClick={moreDetail}>More details</Button>
                        </CardContent>
                    </Card>
                    </Grid>
                </Grid>
            ); 
        })}
    </div>
  );
}





