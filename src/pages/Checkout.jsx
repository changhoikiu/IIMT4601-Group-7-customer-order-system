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

const Checkout = ({ handleNext }) => {
  const {
    state: { cart },
    dispatch,
  } = State();

  const [submittedData, setSubmittedData] = React.useState({});
    console.log(submittedData);

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
    setTotal(cart.reduce((acc, book) => acc + book.Selling_Price * book.qty, 0));
  }, [cart]);

  const handleCheckout = (fields) => {
    setSubmittedData(fields);
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
                  <ListItem key={book.Book_id}>
                    <ListItemDecorator sx={{ width: "10%" }}>
                      <AspectRatio ratio="6/9" sx={{ width: 50 }}>
                        <img src={book.Book_Cover} alt={book.Book_Title} />
                      </AspectRatio>
                    </ListItemDecorator>
                    <Column sx={{ width: "50%" }}>
                      <Typography level="h5">{book.Book_Title}</Typography>
                      <Typography>{book.Author}</Typography>
                    </Column>
                    <Typography level="h5" sx={{ marginLeft: "auto" }}>
                      ${book.Selling_Price}x{book.qty}
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
