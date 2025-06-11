import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_MyF3tZSQX",
  client_id: "4r9cfc0m1dh4b9dje8i95uksqo",
  redirect_uri: "https://d19o6330lu6a6h.cloudfront.net/",
  response_type: "code",
  scope: 'openid email profile',
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);