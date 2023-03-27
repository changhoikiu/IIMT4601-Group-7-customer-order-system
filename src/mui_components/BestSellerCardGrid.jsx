import * as React from 'react';
import BestSellerCard from "./BestSellerCard";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function BestSellerCardGrid() {
  return (
    <Container sx={{ my: 2 }}>
      <Grid container spacing={2}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={12} md={12}>
            <BestSellerCard i={card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}



export default BestSellerCardGrid;
