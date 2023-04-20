import * as React from "react";

import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";

import Typography from "@mui/joy/Typography";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import AspectRatio from "@mui/joy/AspectRatio";

import SubmitReservation from "../ui-components/SubmitReservation";
import { State } from "../context/Context";

const Checkout = ({ handleNext, handleSubmittedData }) => {
  const {
    state: { cart },
    dispatch,
  } = State();

  console.log(JSON.stringify(cart));
  function extractIdAndQty(books) {
    const result = [];
    for (const book of books) {
      const { id, qty } = book;
      result.push({ id, qty });
    }
    return result;
  }
  const cart_extracted = extractIdAndQty(cart);

  const [total, setTotal] = React.useState();
  React.useEffect(() => {
    setTotal(cart.reduce((acc, book) => acc + book.selling_price * book.qty, 0));
  }, [cart]);

  const handleCheckout = (fields) => {
    handleSubmittedData(fields);
    handleNext();
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    variant: "outlined",
  }));

  const Column = styled(Box)(({ theme }) => ({
    marginLeft: theme.spacing(2),
    textAlign: "left",
  }));

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ flex: 2, mr: 4 }}>
          <Item>
            <List
              sx={{
                bgcolor: "background.body",
                border: "none",
                "--ListItemDecorator-size": "48px",
              }}
            >
              <ListItem>
                <Typography level="h4">Cart</Typography>
              </ListItem>
              {cart.map((book) => (
                <Box>
                  <ListItem key={book.id}>
                    <ListItemDecorator sx={{ width: "10%" }}>
                      <AspectRatio ratio="6/9" sx={{ width: 50 }}>
                        <img src={book.book_cover} alt={book.book_title} />
                      </AspectRatio>
                    </ListItemDecorator>
                    <Column sx={{ width: "50%" }}>
                      <Typography level="h5">{book.book_title}</Typography>
                      <Typography>{book.author.join(", ")}</Typography>
                    </Column>
                    <Typography level="h5" sx={{ marginLeft: "auto" }}>
                      ${book.selling_price}x{book.qty}
                    </Typography>
                  </ListItem>
                  <ListDivider inset="gutter" />
                </Box>
              ))}
              <ListItem>
                <Typography level="h4">
                  Subtotal: {cart.length} item(s)
                </Typography>
                <Typography level="h4" sx={{ ml: "auto" }}>
                  Total: ${total}
                </Typography>
              </ListItem>
            </List>
          </Item>
        </Box>
        <Item sx={{ flex: 1 }}>
          <SubmitReservation onSubmit={handleCheckout} />
        </Item>
      </Box>
    </>
  );
};

export default Checkout;
