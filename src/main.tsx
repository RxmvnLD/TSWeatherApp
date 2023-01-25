import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./config/Router";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Auth0Provider
    domain="dev-sdatlmpnj3nc46yl.us.auth0.com"
    clientId="voiAMNEkEs5to0Sx54f5qW828O1xhq5j"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Auth0Provider>
);
