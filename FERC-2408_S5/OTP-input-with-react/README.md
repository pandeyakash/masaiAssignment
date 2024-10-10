# OTP Input Component

This project is a simple, customizable OTP (One Time Password) input component built using React. The component allows users to input and paste a 6-digit OTP, with built-in features for navigation, validation, and submission.

## Features

- **Single-digit input fields**: Each box accepts one digit.
- **Auto-focus**: Moves to the next input box automatically when a digit is entered.
- **Backspace navigation**: Moves to the previous box when backspace is pressed.
- **Paste support**: Users can paste the entire OTP, and it will fill the input boxes correctly.
- **Form validation**: Submit button is disabled until all input boxes are filled with valid digits.
- **OTP submission**: Upon form submission, the OTP is displayed in an alert and logged to the console.

---

````markdown
## Usage

To use the `OTPInput` component, follow these steps:

1. Import the `OTPInput` component into your React application:

````javascript
import { OTPInput } from './OTPInput';

<OTPInput length={6} />


---

```markdown
## Example

Here’s an example of how to use the OTPInput component:

```jsx
import React from "react";
import { OTPInput } from "./OTPInput";
import "./OTPInput.css";

function App() {
  return (
    <div className="App">
      <h1>Enter OTP</h1>
      <OTPInput length={6} />
    </div>
  );
}

export default App;


---

```markdown
## Component Breakdown

### `OTPInput` Component

- **Props**:
  - `length`: Defines the number of OTP input boxes (default: 6).

- **States**:
  - `otp`: An array to store the OTP digits.
  - `isDisabled`: A boolean that controls the submit button state.

- **Refs**:
  - `inputRef`: An array of refs to manage focus between input fields.

- **Event Handlers**:
  - `handleChange()`: Handles changes in each input box and moves to the next box automatically.
  - `handleBackspace()`: Handles the backspace event to clear digits and move to the previous box.
  - `handlePaste()`: Handles the paste event to populate the input boxes with the pasted OTP.
  - `handleSubmit()`: Collects the OTP, displays it in an alert, and logs it to the console.
````
````
