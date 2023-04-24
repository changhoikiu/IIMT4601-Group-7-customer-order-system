import * as React from "react";

import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

import Typography from "@mui/joy/Typography";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import AspectRatio from "@mui/joy/AspectRatio";

import SubmitReservation from "../ui-components/SubmitReservation";
import { State } from "../context/Context";

import Amplify, { API } from "aws-amplify";

function extractIdAndQty(books) {
  const result = [];
  for (const book of books) {
    book["book_id"] = book["Book_id"];
    delete book["Book_id"];
    book["quantity"] = book["qty"];
    delete book["qty"];
    const { book_id, quantity } = book;
    result.push({ book_id, quantity });
  }
  return result;
}

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
const themeColor = "#0d4fa2";

const Checkout = ({ handleNext }) => {
  const {
    state: { cart },
    dispatch,
  } = State();

  const [total, setTotal] = React.useState();
  React.useEffect(() => {
    setTotal(
      cart.reduce((acc, book) => acc + book.Selling_Price * book.qty, 0)
    );
  }, [cart]);

  const [quantity, setQuantity] = React.useState(0);
  React.useEffect(() => {
    setQuantity(cart.reduce((acc, book) => acc + 1 * book.qty, 0));
  }, [cart]);

  const [submitting, setSubmitting] = React.useState(false);

  function createReservation(form) {
    const myAPI = "customer";
    const path = "/reservation";
    const myInit = {
      body: form,
    };

    API.post(myAPI, path, myInit)
      .then((response) => {
        const reservation_id = response.reservation_id;
        const cartItems = extractIdAndQty(cart);
        // console.log(cart);
        cartItems.forEach((cartItem) => {
          // console.log(cartItem);
          let cartInit = {
            body: cartItem,
          };
          API.post(myAPI, path + "Book/" + reservation_id, cartInit)
            .then((response) => {
              console.log(response);
              setSubmitting(false);

              //Sending email to the user
              let cartList = "";
              cart.forEach((cartItem) => {
                cartList =
                  cartList +
                  "<li>" +
                  cartItem.Book_Title +
                  ", by " +
                  cartItem.Author +
                  ", " +
                  cartItem.Publisher +
                  "</li>";
              });
              let subject = `[Hong Kong Reader] #${reservation_id} Your reservation details`;
              let body = `
              <p>Dear customer,</p>
              <p>Below are the books that you have reserved.</p>
              <p>######################################</p>
              <p>Reservation ID: #${reservation_id}</p>
              <ol>${cartList}</ol>
              <p>Quantity: ${quantity}</p>
              <p>Total: ${total}</p>
              <p>######################################</p>
              <p>Our staff will review the reservation soon. You will get another confirmation email once your reservation is ready.</p>
              <p>Cheers,<br>Hong Kong Reader</p>
              `;
              window.Email.send({
                SecureToken: "85d846a2-2dd6-4d55-97fd-89b34f29f06c",
                To: form.email,
                From: "adm.hkreader@outlook.com",
                Subject: subject,
                Body: body,
              })
                .then((message) => {
                  console.log(message);
                  handleNext();
                })
                .catch((err) => console.log(err));
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

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
                <Typography level="h4" sx={{ color: themeColor }}>
                  Cart
                </Typography>
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
                <Typography level="h4">Quantity: {quantity} item(s)</Typography>
                <Typography level="h4" sx={{ ml: "auto" }}>
                  Total: ${total}
                </Typography>
              </ListItem>
            </List>
          </Item>
        </Box>
        <Item sx={{ flex: 1 }}>
          <SubmitReservation
            onSubmit={(fields) => {
              setSubmitting(true);
              const { agreement, ...form } = fields;
              createReservation(form);
              // console.log(form);
            }}
          />
          {submitting && (
            <LinearProgress
              sx={{
                my: 2,
              }}
            />
          )}
        </Item>
      </Box>
    </>
  );
};

export default Checkout;
