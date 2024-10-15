import { useState } from "react";
import "./App.css";
import { ToDoForm } from "./components/ToDoForm/ToDoForm";
import { ToDoList } from "./components/ToDoList/ToDoList";

function App() {
  return (
    <>
      <h1>Implementing Context API in a TODO List Application </h1>
      <ToDoForm />
      <ToDoList />
    </>
  );
}

export default App;
