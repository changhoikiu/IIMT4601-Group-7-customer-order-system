import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Button from '@mui/joy/Button';
import AspectRatio from "@mui/joy/AspectRatio";

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
        <Box sx={{ width: "50vw", padding: 7 }}>
          <IconButton onClick={onClose} sx={{ mb: 2 }}>
            <ArrowBackIcon />
          </IconButton>
          <AspectRatio ratio="6/9" sx={{ width: "fitContent" }}>
            <img
              src={book.book_cover}
              loading="lazy"
              alt={book.book_title}
              style={{ display: "block" }}
            />
          </AspectRatio>
          <Typography variant="h4" my={2}>
            {book.book_title}
          </Typography>
          <Typography variant="h6" mb={1}>
            Authors:
          </Typography>
          <Typography variant="body1" mb={2} ml={2}>
            {book.author.join(", ")}
          </Typography>
          <Typography variant="h6" mb={1}>
            Publisher:
          </Typography>
          <Typography variant="body1" mb={2} ml={2}>
            {book.publisher}
          </Typography>
          <Typography variant="h6" mb={1}>
            Genre:
          </Typography>
          <Typography variant="body1" mb={2} ml={2}>
            {book.genre}
          </Typography>
          <Typography variant="h6" mb={1}>
            Description:
          </Typography>
          <Typography variant="body1" mb={2} ml={2} textAlign="justify">
            {book.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" my={2}>
              ${book.selling_price}
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
          {isAddToCartDisabled && (
            <Typography variant="body2" textAlign="right">
              Change the quantity in Cart.
            </Typography>
          )}
        </Box>
      </Drawer>
      {isAddedToCart && (
        <CartSuccess
          isAddedToCart={isAddedToCart}
          onClose={handleCloseSnackbar}
        />
      )}
    </>
  );
}