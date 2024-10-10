import { useState } from "react";
import "./App.css";
import { OTPInput } from "./components/OTPInput";

function App() {
  return (
    <div className="app">
      <h1>OTP Input with React</h1>
      <OTPInput />
    </div>
  );
}

export default App;
