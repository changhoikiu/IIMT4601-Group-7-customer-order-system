import * as React from "react";
import { AppBar, Toolbar, Badge, Box, IconButton } from "@mui/material";

import { ShoppingBag } from "@mui/icons-material";
import Logo from "../assets/logo.png";

import CartPopover from "./CartPopover";
import NaviMenu from "./NaviMenu";

import { State } from "../context/Context";

function Header() {
  const iconColor = "#0d4fa2";

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
        backgroundColor: "#FFFFFF",
      }}
    >
      <Toolbar>
        <a href="http://www.hkreaders.com/">
          <Box
            sx={{ height: 50, display: { xs: "none", md: "flex" }, mr: 3 }}
            component="img"
            alt="Hong Kong Readers"
            src={Logo}
          />
        </a>

        <NaviMenu />
        <IconButton
          color="primary"
          sx={{ marginLeft: "auto" }}
          onClick={handlePopoverOpen}
        >
          <Badge
            badgeContent={cart.reduce((acc, book) => acc + book.qty, 0)}
            color="error"
          >
            <ShoppingBag sx={{ color: iconColor }} />
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
