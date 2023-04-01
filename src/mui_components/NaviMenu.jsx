import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import { Link } from 'react-router-dom';
import { alpha} from '@mui/material/styles';


export default function NaviMenu() {
  const iconColor = alpha('#1E4158', 0.7);
  const textColor = alpha('#1E4158', 0.7);

  return (
    <Box>
      <List
        role="menubar"
        orientation="horizontal"
        sx={{
          '--List-radius': '8px',
          '--List-padding': '4px',
          '--List-gap': '8px', 
        }}
      >
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            component={Link}
            to="/books"
            sx={{ color: textColor }}
          >
            <ListItemDecorator sx={{ color: textColor }}>
              <MenuBookRoundedIcon sx={{ color: iconColor }} />
            </ListItemDecorator>
            Books
          </ListItemButton>
        </ListItem>

        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            component={Link}
            to="/monthly-best-sellers"
            sx={{ color: textColor }}
          >
            <ListItemDecorator sx={{ color: textColor }}>
              <StarRoundedIcon sx={{ color: iconColor }} />
            </ListItemDecorator>
            Monthly Best Sellers
          </ListItemButton>
        </ListItem>

        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            component={Link}
            to="/enquiries"
            sx={{ color: textColor }}
          >
            <ListItemDecorator sx={{ color: textColor }}>
              <QuestionAnswerRoundedIcon sx={{ color: iconColor }} />
            </ListItemDecorator>
            Enquiries
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
