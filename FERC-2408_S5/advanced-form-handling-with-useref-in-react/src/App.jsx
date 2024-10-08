import { useState } from "react";
import "./App.css";
import { DynamicForm } from "./components/DynamicForm";
import { FormValidation } from "./components/FormValidation";

function App() {
  return (
    <>
      <h1>Advanced Form Handling with useRef in React</h1>
      <DynamicForm />
      <FormValidation />
    </>
  );
}

export default App;
