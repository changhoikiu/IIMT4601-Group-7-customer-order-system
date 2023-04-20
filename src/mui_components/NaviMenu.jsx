import * as React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";

import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";

export default function NaviMenu() {
  const themeColor = "#0d4fa2";

  return (
    <Box
      sx={{
        marginLeft: 2,
      }}
    >
      <List
        role="menubar"
        orientation="horizontal"
        sx={{
          py: 2,
          "--List-radius": "8px",
          "--List-padding": "4px",
          "--List-gap": "8px",
        }}
      >
        <ListItem role="none" sx={{}}>
          <ListItemButton
            role="menuitem"
            component={Link}
            to="/"
            sx={{
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#F5F5F5",
                color: themeColor,
                "& .MuiSvgIcon-root": {
                  color: themeColor,
                },
              },
            }}
          >
            <ListItemDecorator sx={{ color: "#FFFFFF" }}>
              <MenuBookRoundedIcon />
            </ListItemDecorator>
            Books
          </ListItemButton>
        </ListItem>

        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            component={Link}
            to="/monthly-best-sellers"
            sx={{
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#F5F5F5",
                color: themeColor,
                "& .MuiSvgIcon-root": {
                  color: themeColor,
                },
              },
            }}
          >
            <ListItemDecorator sx={{ color: "#FFFFFF" }}>
              <StarRoundedIcon />
            </ListItemDecorator>
            Monthly Best Sellers
          </ListItemButton>
        </ListItem>

        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            component={Link}
            to="/enquiries"
            sx={{
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#F5F5F5",
                color: themeColor,
                "& .MuiSvgIcon-root": {
                  color: themeColor,
                },
              },
            }}
          >
            <ListItemDecorator sx={{ color: "#FFFFFF" }}>
              <QuestionAnswerRoundedIcon />
            </ListItemDecorator>
            Enquiries
          </ListItemButton>
        </ListItem>

        {/* <ListItem role="none">
          <ListItemButton
            role="menuitem"
            component={Link}
            to="/test"
            sx={{ color: textColor }}
          >
            <ListItemDecorator sx={{ color: textColor }}>
              <QuestionAnswerRoundedIcon sx={{ color: iconColor }} />
            </ListItemDecorator>
            Test
          </ListItemButton>
        </ListItem> */}
      </List>
    </Box>
  );
}
