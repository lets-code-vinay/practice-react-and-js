import React, {useState} from "react";
import "./style.css";

const ValidPhoneNumber = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  /**
   * Handle Input text
   * */
  const handleInput = (e) => {
    e.preventDefault();
    setIsSubmit(false);
    setInput(e.target.value);
    setError(false);
    setMessage("");
  };

  /**
   * Hanldle Submit the value
   */
  const handleSubmit = () => {
    //if Number is less than or greater than 10
    if (input.length !== 10) {
      setError(true);
      setMessage(
        input.length > 1 && input.length > 10
          ? "Enter less than 10 chracters."
          : "Enter only 10 chracters."
      );
      setIsSubmit(true);
      return;
    }

    // If first letter is not 7,8,9
    if (input[0] !== "9" && input[0] !== "8" && input[0] !== "7") {
      setError(true);
      setIsSubmit(true);
      setMessage("First number must be 7, 8, 9");
      return;
    }

    // if sum of 5th, 6th, 7th nuumber is greater than 25s
    if (Number(input[4]) + Number(input[5]) + Number(input[6]) > 25) {
      setError(true);
      setMessage("sum of 5th, 6th, 7th number should be less than 25");
      setIsSubmit(true);
      return;
    }
  };

  return (
    <>
      <div className="js-page" style={{ display: "flex", flexDirection: "column" }}>
          <div>
              <h4>Problem</h4>
          Write a javascript function to check whether the given input is a valid phone number. It should check the following conditions
            Every digit should contain 10 characters. Look onto the internet for string conversion.
        The first number should start from 9 or 8 or 7.
        The sum of 5, 6, 7 digits should not be greater than 25.
          </div>

        <div className="App">   
          <label> Enter any 10 digit numbers</label>
          <br />
          <input
            value={input}
            placeholder="Enter Here!!"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <input type="submit" onClick={handleSubmit} />
      </div>
      {input && isSubmit && (
        <>
          {" "}
          <p>Your Entered number is </p>
          <h4>{input}</h4>{" "}
        </>
      )}
      {error && (
        <div>
          <p style={{ color: "red" }}>{message}</p>
        </div>
      )}
    </>
  );
}

export default ValidPhoneNumber;
