import { useRef } from "react";

const DOMInteraction = () => {
  const divRef = useRef(null);

  const randomColor = () => {
    return Math.floor(Math.random() * 257);
  };

  const handleClick = () => {
    console.dir(divRef);
    divRef.current.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  };

  return (
    <div ref={divRef}>
      <h1>DOM Interaction</h1>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
};

export { DOMInteraction };
