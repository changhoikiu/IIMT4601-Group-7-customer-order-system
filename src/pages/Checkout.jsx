import * as React from 'react';

import ResponsiveAppBar from '../mui_components/Header';
import { SubmitReservation } from '../ui-components';

import { Box, Typography } from '@mui/material';
import CartSummary from '../mui_components/CartSummary';


function Checkout() {

    return (
        <div>
            <ResponsiveAppBar />
            <Box 
                mx={10} 
                display={'flex'}
                justifyContent={'space-evenly'}
            >
                <div>
                <Typography 
                    variant='h5'
                    padding={'24px'}
                >
                    Cart Summary
                </Typography>
                <CartSummary />
                </div>
                <div>
                    <SubmitReservation />
                </div>
            </Box>
        </div>
    );
}



export default Checkout;
