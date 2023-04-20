import * as React from "react";
import { AppBar, Toolbar, Badge, Box, IconButton } from "@mui/material";

import { ShoppingBag } from "@mui/icons-material";
import Logo from "../assets/logo.png";

import CartPopover from "./CartPopover";
import NaviMenu from "./NaviMenu";

import { State } from "../context/Context";

function Header() {
  const themeColor = "#0d4fa2";

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
        backgroundColor: themeColor,
      }}
    >
      <Toolbar>
        <a href="http://www.hkreaders.com/">
          <Box
            sx={{
              pl: 6,
              backgroundColor: "#FFFFFF",
              left: 0
          }}
          >
            <Box
              sx={{
                height: 50,
                display: { xs: "none", md: "flex" },
                mr: 5,
                backgroundColor: "#FFFFFF",
              }}
              component="img"
              alt="Hong Kong Readers"
              src={Logo}
            />
          </Box>
        </a>

        <NaviMenu />
        <IconButton
          color="primary"
          sx={{ marginLeft: "auto" }}
          onClick={handlePopoverOpen}
        >
          <Badge
            badgeContent={cart.reduce((acc, book) => acc + 1 * book.qty, 0)}
            color="error"
          >
            <ShoppingBag sx={{ color: "#FFFFFF" }} />
          </Badge>
        </IconButton>
        <CartPopover
          anchorEl={anchorEl}
          open={open}
          handlePopoverClose={handlePopoverClose}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
