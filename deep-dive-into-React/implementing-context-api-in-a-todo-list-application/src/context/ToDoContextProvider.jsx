import { createContext, useState } from "react";

const ToDoContext = createContext();

const ToDoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title, description, username) => {
    const obj = {
      title,
      description,
      username,
    };
    setTodos([...todos, obj]);
  };

  return (
    <ToDoContext.Provider value={{ todos, addTodo }}>
      {children}
    </ToDoContext.Provider>
  );
};

export { ToDoContext, ToDoContextProvider };
