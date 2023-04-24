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
import Amplify, { API } from "aws-amplify";
import LinearProgress from "@mui/material/LinearProgress";

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
  const [submitting, setSubmitting] = React.useState(false);

  // console.log(form);

  function handleSubmit() {
    setSubmitting(true);
    const myAPI = "customer";
    const path = "/enquiry";
    const myInit = {
      body: form,
    };

    API.post(myAPI, path, myInit)
      .then((response) => {
        // console.log(response);
        setIsSubmitted(true);

        //Start of sending email to the user
        const enquiry_id = response.enquiry_id;
        let subject = `[Hong Kong Reader] #${enquiry_id} Your enquiry details`;
        let body = `
              <p>Dear customer,</p>
              <p>Below are enquiry you have made to us.</p>
              <p>######################################</p>
              <p>Enquiry_id ID: #${enquiry_id}</p>
              <p>
              Type of enquiry: ${form.type} <br>
              Name: ${form.name} <br>
              Email: ${form.email} <br>
              Phone Number: ${form.phoneNo} <br>
              Reservation ID: ${form.reservation_id} <br>
              Message: <br> ${form.message.replaceAll('\n','<br>')} <br>
              </p>
              <p>######################################</p>
              <p>Our staff will handle your enquiry soon. You will get another email notice once your enquiry is reviewed.</p>
              <p>Cheers,<br>Hong Kong Reader</p>
              `;
        window.Email.send({
          SecureToken: "85d846a2-2dd6-4d55-97fd-89b34f29f06c",
          To: form.email,
          From: "adm.hkreader@outlook.com",
          Subject: subject,
          Body: body,
        })
          .then((message) => {
            console.log(message);
            setSubmitting(false);
          })
          .catch((err) => console.log(err));
        //End of sending email to the user

      })
      .catch((err) => {
        console.log(err.response);
      });
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
              {submitting && (
                <LinearProgress
                  sx={{
                    my: 2,
                  }}
                />
              )}
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
                  Enquiry is submitted and well received.
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
