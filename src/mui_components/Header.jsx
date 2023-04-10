import * as React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Popover, Divider } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import NaviMenu from './NaviMenu';
import { Search } from '@mui/icons-material';
import { ShoppingBag } from '@mui/icons-material';
import Logo from '../assets/logo.png';
import { State } from '../context/Context';
import { Typography, Box } from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import CartPopover from './CartPopover';

const SearchContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 'auto',
  width: 'auto',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: theme.spacing(1),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Header() {

  const {
    state: { cart },
    dispatch,
  } = State();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  
  const open = Boolean(anchorEl);

  return (
    <AppBar
      position="sticky"
      top={0}
      sx={{
        backgroundColor: "#FFFFFF"
      }}
    >
      <Toolbar>
        <Box sx={{ height: 50, display: { xs: 'none', md: 'flex' }, mr: 3 }}
          component="img"
          alt="Hong Kong Readers"
          src={Logo}
        />
        <NaviMenu />
        <SearchContainer>
          <SearchIconWrapper>
            <Search />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search..." />
        </SearchContainer>
        <IconButton
          color="primary"
          sx={{ marginLeft: 3 }}
          onClick={handlePopoverOpen}
        >
          <Badge badgeContent={cart.reduce((acc, book) => acc + book.qty, 0)} color="error">
            <ShoppingBag />
          </Badge>
        </IconButton>
        <CartPopover anchorEl={anchorEl} open={open} handlePopoverClose={handlePopoverClose} />
        {/* <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Container>

            <Typography level='body1' fontSize={30} pt={2} pl={1} color='text.secondary'>
              Total items: {cart.reduce((acc, book) => acc + book.qty, 0)}
            </Typography>
            <Divider />
            {cart.length > 0 ? (
              cart.map((book) => (
                <Box
                  key={book.id}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: 3,
                    py: 1,
                    minWidth: '300px',
                    justifyContent: 'space-between',
                  }}>
                  <img src={book.cover} alt={book.title} style={{ width: 50 }} />
                  <Box sx={{ mx: 2, flexGrow: 1, maxWidth: '70%'}}>
                    <Typography variant="subtitle1">{book.title}</Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {book.qty} x ${book.price}
                    </Typography>
                  </Box>
                  <IconButton
                    onClick={() =>
                      dispatch({
                        type: 'REMOVE_FROM_CART',
                        payload: book,
                      })
                    }
                  >
                    <DeleteRoundedIcon />
                  </IconButton>
                </Box>
              ))

            ) : (
              <Box py={1}>
                <Typography variant="subtitle1">Your cart is empty</Typography>
              </Box>
            )}
            <Link to={cart.length > 0 ? "/Cart" : "/"} style={{textDecoration: 'none'}}>
              <Button
                variant="solid"
                color="primary"
                sx={{
                  width: '100%',
                  mb: 3
                }}
                onClick={handlePopoverClose}
                disabled={cart.length === 0} 
              >
                Go to Cart
              </Button>
            </Link>
          </Container>
        </Popover> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
