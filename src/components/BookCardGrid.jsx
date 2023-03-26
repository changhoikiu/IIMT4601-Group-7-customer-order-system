import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BookCard } from './BookCard'
  
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  
  const theme = createTheme();
  
  export default function CardGrid() {
    return (
      <ThemeProvider theme={theme}>
          <Container sx={{ py: 4 }} maxWidth="md">
            <Grid container spacing={2}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={3}>
                    <BookCard />
                </Grid>
              ))}
            </Grid>
          </Container>
      </ThemeProvider>
    );
  }