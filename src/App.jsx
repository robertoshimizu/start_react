import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <Header />
      <h1>Adopt Me!</h1>
      <Pizza name="Luna" />

      <Footer />
    </div>
  );
};

const Footer = () => {
  return <div>footer</div>;
};

const Header = () => {
  return <div>header</div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
