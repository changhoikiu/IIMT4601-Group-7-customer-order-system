import * as React from "react";
import { Popover, Divider } from "@mui/material";
import { Typography, Box } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import { State } from "../context/Context";
import { IconButton } from "@mui/material";

function CartPopover({ anchorEl, open, handlePopoverClose }) {
  const {
    state: { cart },
    dispatch,
  } = State();

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handlePopoverClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Container>
        {cart.length > 0 ? (
          <>
            <Typography
              level="body1"
              fontSize={30}
              pt={2}
              pl={1}
              color="text.secondary"
              sx={{ textAlign: "left" }}
            >
              Total items: {cart.reduce((acc, book) => acc + book.qty, 0)}
            </Typography>
            <Divider />
            {cart.map((book) => (
              <Box
                key={book.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: 3,
                  py: 1,
                  minWidth: "300px",
                  justifyContent: "space-between",
                }}
              >
                <img src={book.cover} alt={book.title} style={{ width: 50 }} />
                <Box sx={{ mx: 2, flexGrow: 1, maxWidth: "70%" }}>
                  <Typography variant="subtitle1">{book.title}</Typography>
                  <Typography variant="subtitle1">
                    {book.authors.join(" ")}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    ${book.price} x {book.qty}
                  </Typography>
                </Box>
                <IconButton
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: book,
                    })
                  }
                >
                  <DeleteRoundedIcon />
                </IconButton>
              </Box>
            ))}
          </>
        ) : (
          <Box py={5}>
            <Typography variant="subtitle1">Your cart is empty</Typography>
          </Box>
        )}
        <Link
          to={cart.length > 0 ? "/reserve" : "#"}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="solid"
            color="primary"
            sx={{
              width: "100%",
              mb: 3,
            }}
            onClick={handlePopoverClose}
            disabled={cart.length === 0}
          >
            Go to Cart
          </Button>
        </Link>
      </Container>
    </Popover>
  );
}

export default CartPopover;
