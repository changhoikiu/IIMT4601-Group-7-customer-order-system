// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import InputBase from '@mui/material/InputBase';
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import Logo from './logo.png';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { styled, alpha } from '@mui/material/styles'; 
// import SearchIcon from '@mui/icons-material/Search';
// import NaviMenu from './NaviMenu';

// const theme = createTheme({
// 	palette: {
// 		primary: {
// 			main: '#F5E7D2',
// 		},
// 	},
// 	typography: {
// 		body1: {
// 			color: '#0d49a2'
// 		},
// 		h1: {
// 			color: '#0d49a2'
// 		},
// 		button: {
// 			color: '#0d49a2'
// 		}
// 	}
// });


// const pages = ['Books', 'Monthly Best Sellers', 'Enquiries'];

// function ResponsiveAppBar() {
// 	const [anchorElNav, setAnchorElNav] = React.useState(null);

// 	const handleOpenNavMenu = (event) => {
// 		setAnchorElNav(event.currentTarget);
// 	};

// 	const handleCloseNavMenu = () => {
// 		setAnchorElNav(null);
// 	};

// 	const Search = styled('div')(({ theme }) => ({
// 		position: 'relative',
// 		borderRadius: theme.shape.borderRadius,
// 		backgroundColor: alpha(theme.palette.common.white, 0.15),
// 		'&:hover': {
// 			backgroundColor: alpha(theme.palette.common.white, 0.25),
// 		},
// 		marginLeft: 0,
// 		width: '100%',
// 		[theme.breakpoints.up('sm')]: {
// 			marginLeft: theme.spacing(1),
// 			width: 'auto',
// 		},
// 		color: '#0d49a2',
// 	}));

// 	const SearchIconWrapper = styled('div')(({ theme }) => ({
// 		padding: theme.spacing(0, 2),
// 		height: '100%',
// 		position: 'absolute',
// 		pointerEvents: 'none',
// 		display: 'flex',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	}));

// 	const StyledInputBase = styled(InputBase)(({ theme }) => ({
// 		color: 'inherit',
// 		'& .MuiInputBase-input': {
// 			padding: theme.spacing(1, 1, 1, 0),
// 			// vertical padding + font size from searchIcon
// 			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
// 			transition: theme.transitions.create('width'),
// 			width: '100%',
// 			[theme.breakpoints.up('sm')]: {
// 				width: '12ch',
// 				'&:focus': {
// 					width: '20ch',
// 				},
// 			},
// 		},
// 	}));


// 	const style = {
// 		background: "#000055"
// 	};

// 	return (
// 		<ThemeProvider theme={theme}>
// 			<AppBar className={style} position="static">
// 				<Container maxWidth="xl">
// 					<Toolbar disableGutters>
// 						<Box sx={{ height: 50, display: { xs: 'none', md: 'flex' }, mr: 3 }}
// 							component="img"
// 							alt="Hong Kong Readers"
// 							src={Logo}
// 						/>

// 						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
// 							{pages.map((page) => (
// 								<Button
// 									key={page}
// 									onClick={handleCloseNavMenu}
// 									sx={{ my: 2, color: '#0d49a2', display: 'block' }}
// 								>
// 									{page}
// 								</Button>
// 							))}
// 						</Box>


// 						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
// 							<IconButton
// 								size="large"
// 								aria-label="account of current user"
// 								aria-controls="menu-appbar"
// 								aria-haspopup="true"
// 								onClick={handleOpenNavMenu}
// 								color="#0d49a2"
// 							>
// 								<MenuIcon />
// 							</IconButton>

// 							<Menu
// 								id="menu-appbar"
// 								anchorEl={anchorElNav}
// 								anchorOrigin={{
// 									vertical: 'bottom',
// 									horizontal: 'left',
// 								}}
// 								keepMounted
// 								transformOrigin={{
// 									vertical: 'top',
// 									horizontal: 'left',
// 								}}
// 								open={Boolean(anchorElNav)}
// 								onClose={handleCloseNavMenu}
// 								sx={{
// 									display: { xs: 'block', md: 'none' },
// 								}}
// 							>
// 								{pages.map((page) => (
// 									<MenuItem key={page} onClick={handleCloseNavMenu}>
// 										<Typography textAlign="center">{page}</Typography>
// 									</MenuItem>
// 								))}
// 							</Menu>
// 						</Box>

// 						<Search>
// 							<SearchIconWrapper>
// 								<SearchIcon />
// 							</SearchIconWrapper>
// 							<StyledInputBase
// 								placeholder="Search…"
// 								inputProps={{ 'aria-label': 'search' }}
// 							/>
// 						</Search>

// 						<ShoppingBagIcon sx={{ml: 3}}/>

// 						<Box sx={{ height: 30, display: { xs: 'flex', md: 'none' }, alignSelf: 'center' }}
// 							component="img"
// 							alt="Hong Kong Readers"
// 							src={Logo}
// 						/>

// 					</Toolbar>
// 				</Container>
// 			</AppBar>
// 		</ThemeProvider>
// 	);
// }
// export default ResponsiveAppBar;


import { AppBar, Toolbar, IconButton, InputBase, Badge } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import NaviMenu from './NaviMenu';
import { Search } from '@mui/icons-material';
import { ShoppingBag } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Logo from './logo.png';

const SearchContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
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
  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage: `linear-gradient(to right, ${alpha('#FFFFFF', 1)}, ${alpha(
          '#1E4158',
          0.5
        )})`,
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
        <IconButton color="inherit" sx={{ marginLeft: 3 }}>
          <Badge badgeContent={4} color="error">
            <ShoppingBag />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
