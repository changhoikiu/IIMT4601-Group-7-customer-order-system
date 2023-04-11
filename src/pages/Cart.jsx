import * as React from 'react';
import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import { Box, Card, CardContent, IconButton, Paper } from "@mui/material";

import Button from '@mui/joy/Button';
import Typography from "@mui/joy/Typography";
import List from "@mui/joy/List";
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Input from '@mui/joy/Input';

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';

import { State } from "../context/Context"

const Cart = ({handleNext}) => {

  const {
    state: { cart },
    dispatch,
  } = State();

  const [total, setTotal] = React.useState();
  React.useEffect(() => {
    setTotal(cart.reduce((acc, book) => acc + book.price * book.qty, 0));
  }, [cart]);


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    variant: 'outlined',
  }));

  const Column = styled(Box)(({ theme }) => ({
    marginLeft: theme.spacing(2),
    textAlign: 'left',
  }));

  return (
    <>
      {cart.length > 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{flex: 2, mr: 4}}>
            <List
              variant="outlined"
              sx={{
                bgcolor: 'background.body',
                borderRadius: 'sm',
                boxShadow: 'sm',
                py: 2,
                '--ListItemDecorator-size': '48px',
                '--ListItem-paddingLeft': '1.5rem',
                '--ListItem-paddingRight': '1.5rem',
              }}
            >
              <ListItem>
                <Typography level='h4'>
                  Cart
                </Typography>
              </ListItem>
              {cart.map(book => (
                <Box>
                  <ListItem
                    key={book.id}
                    endAction={
                      <IconButton
                        aria-label="Delete"
                        size="sm"
                        onClick={() =>
                          dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: book,
                          })
                        }>
                        <DeleteRoundedIcon />
                      </IconButton>
                    }
                    sx={{
                      mr: 3,
                    }}
                  >
                    <ListItemDecorator sx={{ width: '10%' }}>
                      <img src={book.image} alt={book.title} />
                    </ListItemDecorator>
                    <Column sx={{ width: '50%' }}>
                      <Typography level="h5">{book.title}</Typography>
                      <Typography>{book.authors}</Typography>
                    </Column>
                    <Column>
                      <Typography level="h5">${book.price}</Typography>
                    </Column>
                    <Column>
                      <Typography>Qty:</Typography>
                    </Column>
                    <Column>
                      <Input
                        type="number"
                        value={book.qty}
                        sx={{width: 80}}
                        onChange={(e) =>
                          dispatch({
                            type: 'CHANGE_CART_QUANTITY',
                            payload: {
                              id: book.id,
                              qty: e.target.value,
                            },
                          })
                        }
                        slotProps={{
                          input: {
                            min: 1,
                            max: 100,
                            step: 1,
                          },
                        }}
                      />
                    </Column>
                  </ListItem>
                  <ListDivider inset="gutter" />
                </Box>
              ))}
            </List>
          </Box>
          <Item sx={{ flex: 1 }}>
                <Typography level="h4">
                  Subtotal: {cart.length} item(s)
                </Typography>
                <Typography level="h4" sx={{ mt: 'auto' }}>
                  Total: ${total}
                </Typography>
                <Button
                  variant="solid"
                  sx={{
                    width: '100%',
                  }}
                  onClick={handleNext}
                >
                  Checkout
                </Button>
          </Item>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Card
            sx={{ width: '50%' }}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 3
                }}
              >
                <Typography level="h5" component="div" sx={{ mb: 2 }}>
                  Your cart is empty.
                </Typography>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Button variant="solid" startDecorator={<NavigateBeforeRoundedIcon />}>Return</Button>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
    </>
  )
}

export default Cart