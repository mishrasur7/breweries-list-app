import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2078' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: 'lightblue',
  margin: 20
}));

export default function Cards( { brewery }) {
  return (
    <Box sx={{ flexGrow: 10 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(1)).map((_, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <Item xs={4}>Name: {brewery.name} <br /> Brewery type: {brewery.brewery_type} <br /> City: {brewery.city} <br /> <button>More details</button></Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
