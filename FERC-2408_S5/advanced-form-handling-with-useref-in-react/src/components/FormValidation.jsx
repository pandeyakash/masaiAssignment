import { useRef, useState } from "react";

const FormValidation = () => {
  const inputRef = useRef([]);
  const [error, setError] = useState({});
  const [dataArray, setDataArray] = useState([]);

  const validateName = () => {
    const name = inputRef.current[0].value;

    if (!name) {
      setError((prev) => ({ ...prev, name: "Name is required!" }));
    } else if (name.length < 3) {
      setError((prev) => ({
        ...prev,
        name: "Name should be at least 3 characters!",
      }));
    } else {
      setError((prev) => ({ ...prev, name: "" }));
    }
  };

  const validateEmail = () => {
    const email = inputRef.current[1].value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError((prev) => ({ ...prev, email: "E-Mail is required" }));
    } else if (!emailPattern.test(email)) {
      setError((prev) => ({ ...prev, email: "Invalid email address" }));
    } else {
      setError((prev) => ({ ...prev, email: "" }));
    }
  };

  const validatePassword = () => {
    const password = inputRef.current[2].value;
    if (!password) {
      setError((prev) => ({ ...prev, password: "Password is Required!" }));
    } else if (password.length < 6) {
      setError((prev) => ({
        ...prev,
        password: "Password should be at least 6 characters!",
      }));
    } else {
      setError((prev) => ({ ...prev, password: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateName();
    validateEmail();
    validatePassword();

    if (!error.name && !error.email && !error.password) {
      const data = {
        name: inputRef.current[0].value,
        email: inputRef.current[1].value,
        password: inputRef.current[2].value,
      };

      setDataArray([...dataArray, data]);
      inputRef.current[0].value = "";
      inputRef.current[1].value = "";
      inputRef.current[2].value = "";
      alert("Form Submitted Successfully!!");
    }
  };

  return (
    <div>
      <h2>Form Validation</h2>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              ref={(elem) => inputRef.current.push(elem)}
              onBlur={validateName}
            />
          </label>
          {error.name && <span style={{ color: "red" }}>{error.name}</span>}
        </div>
        <div>
          <label>
            E-Mail:
            <input
              type="email"
              name="name"
              placeholder="Enter your name"
              ref={(elem) => inputRef.current.push(elem)}
              onBlur={validateEmail}
            />
          </label>
          {error.email && <span style={{ color: "red" }}>{error.email}</span>}
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="name"
              placeholder="Enter your name"
              ref={(elem) => inputRef.current.push(elem)}
              onBlur={validatePassword}
            />
          </label>
          {error.password && (
            <span style={{ color: "red" }}>{error.password}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {dataArray.map((ele, index) => (
          <div key={index}>
            <p> Name: {ele.name}</p>
            <p> Email: {ele.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { FormValidation };
