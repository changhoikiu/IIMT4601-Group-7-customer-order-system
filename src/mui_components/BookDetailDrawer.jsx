import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Button from '@mui/joy/Button';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Add from '@mui/icons-material/Add';

import CartSuccess from './CartSuccess';

import { State } from '../context/Context';

export default function BookDetailsDrawer({ isOpen, onClose, book }) {
  const {
    state: { cart },
    dispatch,
  } = State();

  const [isAddedToCart, setIsAddedToCart] = React.useState(false);
  const [isAddToCartDisabled, setIsAddToCartDisabled] = React.useState(false);

  const handleAddToCart = (event) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: book
    });
    setIsAddedToCart(true);
    setIsAddToCartDisabled(true);
    onClose();
  }

  const handleCloseSnackbar = () => {
    setIsAddedToCart(false);
  }


  return (
    <>
      <Drawer anchor="right" open={isOpen} onClose={onClose}>
        <Box sx={{ width: '30vw', padding: 7 }}>
          <IconButton onClick={onClose} sx={{ mb: 2 }}>
            <ArrowBackIcon />
          </IconButton>
          <img
            src={book.cover}
            loading="lazy"
            alt={book.title}
            style={{ display: 'block' }}
          />
          <Typography variant="h4" my={2}>
            {book.title}
          </Typography>
          <Typography variant="h6" mb={1}>
            Authors:
          </Typography>
          <Typography variant="body1" mb={2} ml={1}>
            {book.authors.join(', ')}
          </Typography>
          <Typography variant="h6" mb={1}>
            Publisher:
          </Typography>
          <Typography variant="body1" mb={2} ml={1}>
            {book.publisher}
          </Typography>
          <Typography variant="h6" mb={1}>
            Description:
          </Typography>
          <Typography variant="body1" mb={2} ml={1} textAlign="justify">
            {book.description}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="h4" my={2}>
              ${book.price}
            </Typography>
            <Button
              color="primary"
              startDecorator={<Add />}
              onClick={handleAddToCart}
              disabled={isAddToCartDisabled}
            >
              Add to Cart
            </Button>
          </Box>
          {isAddToCartDisabled && (<Typography variant="body2" textAlign='right'>
            Change the quantity in Cart.
          </Typography>)}
        </Box>
      </Drawer>
      {isAddedToCart && (<CartSuccess isAddedToCart={isAddedToCart} onClose={handleCloseSnackbar} />)}
    </>
  );
}