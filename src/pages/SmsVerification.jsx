import * as React from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Paper,
} from "@mui/material/";
import { styled } from "@mui/material/styles";

const SmsVerification = ({ handleNext, submittedData }) => {
  const [verificationCode, setVerificationCode] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isCodeSent, setIsCodeSent] = React.useState(false);
  const [resendCounter, setResendCounter] = React.useState(0);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    variant: 'outlined',
  }));

  React.useEffect(() => {
    let intervalId;
    if (resendCounter > 0 && resendCounter <= 30) {
      intervalId = setInterval(() => {
        setResendCounter((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [resendCounter]);

  const handleSendCode = () => {
    setIsLoading(true);
    setResendCounter(30);

    // You can replace this with your own SMS verification API call
    setTimeout(() => {
      setIsCodeSent(true);
      setIsLoading(false);
    }, 2000);
  };

  const handleVerifyCode = () => {
    handleNext();
  };

  const handleResendCode = () => {
    setVerificationCode("");
    setIsCodeSent(false);
    handleSendCode();
  };

  React.useEffect(() => {
    handleSendCode();
  }, []);

  return (
    <Item>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" align="center">
          SMS Verification
        </Typography>
        <Typography variant="body1" align="center" my={4}>
          A verification code is sent to your mobile number. Please enter the code writtenon the SMS to verify your idenitity.
        </Typography>

        <form>
          <Grid container spacing={2}>
            {isCodeSent ? (
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Verification Code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
              </Grid>
            ) : null}

            <Grid item xs={12}>
              {isLoading ? (
                <CircularProgress />
              ) : isCodeSent ? (
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={handleVerifyCode}
                    >
                      Verify Code
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    {resendCounter === 0 ? (
                      <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={handleResendCode}
                      >
                        Resend Code
                      </Button>
                    ) : (
                      <Button fullWidth disabled>
                        Resend in {resendCounter}s
                      </Button>
                    )}
                  </Grid>
                </Grid>
              ) : (
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSendCode}
                >
                  Send Code
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Item>
  );
};

export default SmsVerification;
