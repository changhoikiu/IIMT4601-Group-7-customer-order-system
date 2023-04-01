import * as React from 'react';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Chip from '@mui/joy/Chip';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import { Link } from 'react-router-dom';


// const useRovingIndex = (options) => {
//   const {
//     initialActiveIndex = 0,
//     vertical = false,
//     handlers = {
//       onKeyDown: () => {},
//     },
//   } = options || {};
//   const [activeIndex, setActiveIndex] = React.useState(initialActiveIndex);

//   const targetRefs = React.useRef([]);
//   const targets = targetRefs.current;
//   const focusNext = () => {
//     let newIndex = activeIndex + 1;
//     if (newIndex >= targets.length) {
//       newIndex = 0;
//     }
//     targets[newIndex]?.focus();
//     setActiveIndex(newIndex);
//   };
//   const focusPrevious = () => {
//     let newIndex = activeIndex - 1;
//     if (newIndex < 0) {
//       newIndex = targets.length - 1;
//     }
//     targets[newIndex]?.focus();
//     setActiveIndex(newIndex);
//   };
//   const getTargetProps = (index) => ({
//     ref: (ref) => {
//       if (ref) {
//         targets[index] = ref;
//       }
//     },
//     tabIndex: activeIndex === index ? 0 : -1,
//     onKeyDown: (e) => {
//       if (Number.isInteger(activeIndex)) {
//         if (e.key === (vertical ? 'ArrowDown' : 'ArrowRight')) {
//           focusNext();
//         }
//         if (e.key === (vertical ? 'ArrowUp' : 'ArrowLeft')) {
//           focusPrevious();
//         }
//         handlers.onKeyDown?.(e, { setActiveIndex });
//       }
//     },
//     onClick: () => {
//       setActiveIndex(index);
//     },
//   });
//   return {
//     activeIndex,
//     setActiveIndex,
//     targets,
//     getTargetProps,
//     focusNext,
//     focusPrevious,
//   };
// };

export default function NaviMenu() {
  // const { targets, getTargetProps, setActiveIndex, focusNext, focusPrevious } =
  //   useRovingIndex();
  return (
    <Box sx={{ minHeight: 190 }}>
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
            // {...getTargetProps(0)}
            component={Link}
            to="/books"
          >
            <ListItemDecorator>
              <MenuBookRoundedIcon />
            </ListItemDecorator>
            Books
          </ListItemButton>
        </ListItem>

        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            // {...getTargetProps(1)}
            component={Link}
            to="/monthly-best-sellers"
          >
            <ListItemDecorator>
              <StarRoundedIcon />
            </ListItemDecorator>
            Monthly Best Sellers
          </ListItemButton>
        </ListItem>

        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            // {...getTargetProps(2)}
            component={Link}
            to="/enquiries"
          >
            <ListItemDecorator>
              <QuestionAnswerRoundedIcon />
            </ListItemDecorator>
            Enquiries
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}