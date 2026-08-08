import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import router from "./router";

// Handle GitHub Pages SPA redirect
const searchParams = new URLSearchParams(window.location.search);
const redirectPath = searchParams.get('p');
if (redirectPath) {
  // Replace the URL with the actual path without the query parameter
  const newPath = redirectPath.replace(/~and~/g, '&');
  window.history.replaceState(null, '', newPath + window.location.hash);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
