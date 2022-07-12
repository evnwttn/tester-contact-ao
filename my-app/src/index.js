import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ContactForm } from "./Components/ContactForm";

const App = () => {
  return <ContactForm />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
