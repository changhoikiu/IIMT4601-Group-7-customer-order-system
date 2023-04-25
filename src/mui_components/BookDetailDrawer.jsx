import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";

import Button from "@mui/joy/Button";
import AspectRatio from "@mui/joy/AspectRatio";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Add from "@mui/icons-material/Add";

import CartSuccess from "./CartSuccess";

import { State } from "../context/Context";

import Amplify, { API } from "aws-amplify";

export default function BookDetailsDrawer({ isOpen, onClose, book }) {
  const {
    state: { cart },
    dispatch,
  } = State();

  const [isAddedToCart, setIsAddedToCart] = React.useState(false);
  const [selectedBook, setSelectedBook] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleAddToCart = (event) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: selectedBook,
    });
    setIsAddedToCart(true);
    onClose();
  };

  const handleCloseSnackbar = () => {
    setIsAddedToCart(true);
  };

  React.useEffect(() => {
    setIsLoading(true);
    const myAPI = "customer";
    const path = "/book/" + book.Book_id;

    API.get(myAPI, path)
      .then((response) => {
        setIsLoading(false);
        Object.values(response)[0].Selling_Price = Object.values(response)[0].Selling_Price.toFixed(2);
        setSelectedBook(Object.values(response)[0]);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [isOpen]);

  return (
    <>
      <Drawer anchor="right" open={isOpen} onClose={onClose}>
        {(!isLoading && selectedBook !== null) ? (
          <Box sx={{ width: "50vw", padding: 5 }}>
            <IconButton onClick={onClose} sx={{ mb: 2 }}>
              <ArrowBackIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <AspectRatio ratio="6/9" sx={{ width: "40%" }}>
                <img
                  src={selectedBook.Book_Cover_URL}
                  loading="lazy"
                  alt={selectedBook.Book_Title}
                  style={{ display: "block" }}
                />
              </AspectRatio>
            </Box>
            <Typography variant="h4" my={2}>
              {selectedBook.Book_Title}
            </Typography>
            <Typography variant="h6" mb={1}>
              Authors:
            </Typography>
            <Typography variant="body1" mb={2} ml={2}>
              {selectedBook.Author}
            </Typography>
            <Typography variant="h6" mb={1}>
              Publisher:
            </Typography>
            <Typography variant="body1" mb={2} ml={2}>
              {selectedBook.Publisher}
            </Typography>
            <Typography variant="h6" mb={1}>
              Genre:
            </Typography>
            <Typography variant="body1" mb={2} ml={2}>
              {selectedBook.Genre}
            </Typography>
            <Typography variant="h6" mb={1}>
              Description:
            </Typography>
            <Typography variant="body1" mb={2} ml={2} textAlign="justify">
              {selectedBook.Description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" my={2}>
                ${selectedBook.Selling_Price}
              </Typography>
              <Button
                color="primary"
                startDecorator={<Add />}
                onClick={() => handleAddToCart()}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              width: "50vw",
              padding: 5,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </Box>
        )}
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
