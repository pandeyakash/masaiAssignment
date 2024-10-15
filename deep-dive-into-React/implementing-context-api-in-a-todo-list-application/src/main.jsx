import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToDoContextProvider } from "./context/ToDoContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToDoContextProvider>
      <App />
    </ToDoContextProvider>
  </StrictMode>
);
