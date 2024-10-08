import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  let inputValue = "";

  const handleChange = () => {
    inputValue = inputRef.current.value;
    document.querySelector("h3").innerText = inputValue;
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Hello from UseRef</h1>
      <input
        type="text"
        onInput={handleChange}
        placeholder="Enter your name"
        ref={inputRef}
      />
      <h3>{inputValue}</h3>
    </div>
  );
};

export { UseRef };
