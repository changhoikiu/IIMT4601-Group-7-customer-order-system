import * as React from 'react';
import Typography from '@mui/joy/Typography';

import {
  OrderBook, OrderCancel, SelectEnquiries
} from '../ui-components';


function Enquiries() {
  const [enquiryType, setEnquiryType] = React.useState('');

  return (
    <>
      <Typography level="h5" fontSize="">
        Enquiries
      </Typography>
      <SelectEnquiries
        onChange={fields => setEnquiryType(fields)}
      />
      {(enquiryType.name === 'Order a Book') && <OrderBook />}
      {(enquiryType.name === 'Cancel an Order') && <OrderCancel />}
    </>
  );
}



export default Enquiries;
