// import { StrictMode } from "react";
import { BrowserRouter  } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>

  // </StrictMode>,
);
