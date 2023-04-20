import * as React from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import { OtherEnquiry } from "../ui-components";
import EnquiryTab from "../mui_components/EnquiryTab";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import Button from "@mui/joy/Button";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
import Amplify, {API} from "aws-amplify"

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
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  console.log(form);

  function handleSubmit() {
    setIsSubmitted(true);
    const myAPI = "customer";
    const path = "/enquiry";
    const myInit = {
      body: form
    };

    API.post(myAPI, path, myInit)
      .then((response) => {
      console.log(response)
      })
      .catch((err) => {
        console.log(err.response);
    })
  }
  const themeColor = "#0d4fa2";
  return (
    <>
      {!isSubmitted ? (
        <>
          <Typography level="h4" sx={{ color: themeColor }}>
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
                onSubmit={handleSubmit}
                overrides={{
                  type: [{ type: "Required" }],
                }}
              />
            </Item>
          </Box>
        </>
      ) : (
        <Box
          className="empty-cart"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card sx={{ width: "50%" }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 3,
                }}
              >
                <Typography level="h5" component="div" sx={{ mb: 2 }}>
                  Enquiry submitted.
                </Typography>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button
                    variant="solid"
                    startDecorator={<NavigateBeforeRoundedIcon />}
                    onClick={() => setIsSubmitted(false)}
                  >
                    Return
                  </Button>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
    </>
  );
}

export default Enquiries;
