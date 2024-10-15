import { useContext } from "react";
import { ToDoContext } from "../../context/ToDoContextProvider";
import "./ToDoList.css";

const ToDoList = () => {
  const { todos } = useContext(ToDoContext);

  console.log("List Render");
  return (
    <div>
      <h2>To Do List</h2>
      <ol>
        {todos.map((ele, index) => (
          <li key={index}>
            <span>{ele.title}</span>, <span>{ele.description}</span>,{" "}
            <span>{ele.username}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export { ToDoList };
