import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify, Auth, Storage } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsconfig from './aws-exports';
import { studioTheme } from "./ui-components";

import Context from "./context/Context";

Amplify.configure({
  Auth: {
    identityPoolId: "ap-southeast-1:b92c18c5-b856-450c-92d3-ea2b9056045c", //REQUIRED - Amazon Cognito Identity Pool ID
    region: "ap-southeast-1", // REQUIRED - Amazon Cognito Region
    userPoolId: "ap-southeast-1_KJtJ7Oojp", //OPTIONAL - Amazon Cognito User Pool ID
  },
  Storage: {
    AWSS3: {
      bucket: "hkreader-book-cover", //REQUIRED -  Amazon S3 bucket name
      region: "ap-southeast-1", //OPTIONAL -  Amazon service region
    },
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={studioTheme}>
        <Context>
          <App />
        </Context>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
