import * as React from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";

import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";

import {
  OrderBook,
  OrderCancel,
  SelectEnquiries,
  OtherEnquiry,
} from "../ui-components";

function Enquiries() {
  const [enquiryType, setEnquiryType] = React.useState("");

  return (
    <>
      <Typography level="h4">
        <QuestionAnswerRoundedIcon />
        Enquiries
      </Typography>
      <Box
        className="selec-enquiry-box"
        sx={{
          marginTop: 2,
        }}
      >
        <SelectEnquiries onChange={(fields) => setEnquiryType(fields)} />
      </Box>
      <Box
        className="form-box"
        sx={{
          marginTop: 2,
        }}
      >
        {enquiryType.name === "Order a Book" && <OrderBook />}
        {enquiryType.name === "Cancel an Order" && <OrderCancel />}
        {enquiryType.name === "Other Enquiry" && <OtherEnquiry />}
      </Box>
    </>
  );
}

export default Enquiries;
