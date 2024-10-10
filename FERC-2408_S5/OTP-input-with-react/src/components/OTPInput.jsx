import { useRef, useEffect, useState } from "react";
import "./OTPInput.css";

const OTPInput = ({ length = 6 }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRef = useRef([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length === 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        if (index > 0) {
          const newOtp = [...otp];
          newOtp[index - 1] = "";
          setOtp(newOtp);
          inputRef.current[index - 1].focus();
        }
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    const digits = pastedData
      .split("")
      .filter((ele, i) => !isNaN(ele))
      .slice(0, length);
    if (digits.length === length) {
      setOtp(digits);
      inputRef.current[length - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOTP = otp.join("");
    alert(`Entered OTP: ${enteredOTP}`);
    console.log("Entered OTP: ", enteredOTP);
  };

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  useEffect(() => {
    const isFilled = otp.every((ele) => ele !== "");
    setIsDisabled(!isFilled);
  }, [otp]);

  return (
    <div className="otp-input">
      <h2>OTP Input</h2>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          {otp.map((ele, index) => (
            <input
              type="number"
              key={index}
              ref={(elem) => {
                inputRef.current.push(elem);
              }}
              maxLength={1}
              value={otp[index]}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              onPaste={handlePaste}
            />
          ))}
        </div>
        {isDisabled ? null : <button type="submit">Submit</button>}
      </form>
    </div>
  );
};

export { OTPInput };
