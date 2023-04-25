import * as React from "react";
import { Link } from "react-router-dom";

import { Box, Paper, Typography } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { styled } from "@mui/material/styles";

import Button from "@mui/joy/Button";

import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";

import Cart from "./Cart";
import Checkout from "./Checkout";
import { State } from "../context/Context";

const steps = ["Confirm cart", "Input personal information", "Finish"];

export default function SubmitReservation() {
  const { dispatch } = State();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const Content = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(2),
    textAlign: "left",
  }));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    variant: "outlined",
  }));

  return (
    <Box>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 ? (
        <Content>
          <Cart handleNext={handleNext} />
        </Content>
      ) : activeStep === 1 ? (
        <Content>
          <Checkout handleNext={handleNext} />
        </Content>
      ) : (
        <Content>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Item>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 3,
                }}
              >
                <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                  Your reservation has been submitted.
                </Typography>
                <Typography variant="body2" component="div" sx={{ mb: 2 }}>
                  A record of the reservation has been sent to your mailbox.
                </Typography>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button
                    className="finishReturn"
                    variant="solid"
                    startDecorator={<NavigateBeforeRoundedIcon />}
                    onClick={() => dispatch({ type: "CLEAR_CART" })}
                  >
                    Finish
                  </Button>
                </Link>
              </Box>
            </Item>
          </Box>
        </Content>
      )}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        {activeStep === 1 ? (
          <Button
            variant="plain"
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
            startDecorator={<NavigateBeforeRoundedIcon />}
          >
            Back
          </Button>
        ) : undefined}
        <Box sx={{ flex: "1 1 auto" }} />
      </Box>
    </Box>
  );
}
