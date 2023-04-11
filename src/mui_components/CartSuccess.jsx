import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

import Alert from '@mui/joy/Alert';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function CartSuccess({ isAddedToCart, onClose }) {

  return (
    <Snackbar
      open={isAddedToCart}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      TransitionComponent={Slide}
    >
      <Alert
        key='Success'
        sx={{ alignItems: 'flex-start' }}
        startDecorator={React.cloneElement(<CheckCircleIcon />, {
          sx: { mt: '2px', mx: '4px' },
          fontSize: 'xl2',
        })}
        variant="soft"
        color='success'
        endDecorator={
          <IconButton variant="soft" size="sm" color='success' onClick={onClose}>
            <CloseRoundedIcon />
          </IconButton>
        }
      >
        <div>
          <Typography fontWeight="lg" mt={0.25}>
            Success
          </Typography>
          <Typography fontSize="sm" sx={{ opacity: 0.8 }}>
              Book added to cart successfully.
          </Typography>
        </div>
      </Alert>
    </Snackbar>
  );
}
