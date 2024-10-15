import { useContext, useRef } from "react";
import { ToDoContext } from "../../context/ToDoContextProvider";
import "./ToDoForm.css";

const ToDoForm = () => {
  const inputRef = useRef([]);
  const { addTodo } = useContext(ToDoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = inputRef.current[0].value;
    const description = inputRef.current[1].value;
    const username = inputRef.current[2].value;

    addTodo(title, description, username);

    inputRef.current[0].value = "";
    inputRef.current[1].value = "";
    inputRef.current[2].value = "";
  };

  console.log("Form render");
  return (
    <div>
      <h2>ToDo Form</h2>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <label>
            Task Title:
            <input
              type="text"
              placeholder="Enter the Task Title"
              ref={(elem) => {
                inputRef.current.push(elem);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Task Description:
            <textarea
              placeholder="Enter the Task Description"
              ref={(elem) => {
                inputRef.current.push(elem);
              }}
            ></textarea>
          </label>
        </div>
        <div>
          <label>
            Username:
            <input
              type="text"
              placeholder="Enter the Username"
              ref={(elem) => {
                inputRef.current.push(elem);
              }}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export { ToDoForm };
