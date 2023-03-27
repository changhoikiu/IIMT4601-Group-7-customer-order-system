import * as React from 'react';

import ResponsiveAppBar from '../mui_components/Header';
import {
    OrderBook, OrderCancel, SelectEnquiries
} from '../ui-components';

import { Box } from '@mui/material';


function Enquiries() {
    const [enquiryType, setEnquiryType] = React.useState('');

    return (
        <div>
            <ResponsiveAppBar />
            <Box mx={10}>
                <SelectEnquiries
                    onChange={fields => setEnquiryType(fields)}
                />
                {(enquiryType.name === 'Order a Book') && <OrderBook />}
                {(enquiryType.name === 'Cancel an Order') && <OrderCancel />}
            </Box>
        </div>
    );
}



export default Enquiries;
