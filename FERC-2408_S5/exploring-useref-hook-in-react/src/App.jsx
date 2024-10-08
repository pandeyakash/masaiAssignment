import { useState } from "react";
import "./App.css";
import { UseRef } from "./components/UseRef";
import { DOMInteraction } from "./components/DOMInteraction";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <UseRef />
      <DOMInteraction />
    </>
  );
}

export default App;
