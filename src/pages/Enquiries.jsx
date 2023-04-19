import * as React from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import { OtherEnquiry } from "../ui-components";
import EnquiryTab from "../mui_components/EnquiryTab";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
  display: "flex",
  flexDirection: "column",
  variant: "outlined",
}));

function Enquiries() {
  const [form, setForm] = React.useState(null);

  console.log(form);

  return (
    <>
      <Typography level="h4">
        <QuestionAnswerRoundedIcon />
        &nbsp;&nbsp;Enquiries
      </Typography>
      <Box
        className="template-box"
        sx={{
          marginTop: 2,
        }}
      >
        <Typography level="body1">
          You can copy a template according to your enquiry.
        </Typography>
        <EnquiryTab />
      </Box>
      <Box className="form-box">
        <Item>
          <OtherEnquiry
            onChange={(fields) => setForm(fields)}
            overrides={{
              type: [{ type: "Required" }]
            }}
          />
        </Item>
      </Box>
    </>
  );
}

export default Enquiries;
