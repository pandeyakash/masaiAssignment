import { useRef, useEffect } from "react";

const DynamicForm = () => {
  const inputRef = useRef([]);

  const handleFocus = (index) => {
    inputRef.current[index].focus();
  };

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);
  return (
    <div>
      <h2>Dynamic Form </h2>
      <form action="#">
        {[...Array(5)].map((_, index) => (
          <div key={index}>
            <label>
              Input {index + 1}:
              <input
                type="text"
                placeholder={`Input ${index + 1}`}
                ref={(elem) => {
                  inputRef.current.push(elem);
                }}
              />
              <button onClick={() => handleFocus(index)}>{`Focus Input: ${
                index + 1
              }`}</button>
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export { DynamicForm };
