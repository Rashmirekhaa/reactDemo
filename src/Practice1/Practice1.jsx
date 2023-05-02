import React, { useState } from "react";

const style = {
  color: "blue",
  fontSize: 10,
  textAlign: "center",
  margin: 20,
};
const user_name = {
  fontSize: 30,
};
const countNumberText = {
  color: "red",
};
const button_test = {
  backgroundColor: "ffffff",
  width: 100,
  height: 40,
  padding: 10,
  margin: 10,
};
const timeButton_test = {
  backgroundColor: "transparent",
  width: "200px",
  height: 40,
  padding: 15,
  margin: 10,
  color: "black",
  textAlign: "center",
};
const input_style = {
  padding: 10,
  textAlign: "center",
};

const Practice1 = () => {
  let newTime = new Date().toLocaleTimeString();
  const state = useState();
  const [count, setCount] = useState(0);
  const [cTime, setTime] = useState(newTime);
  const [inputValue, setinputValue] = useState();
  const [fName, setfName] = useState();
  const [lName, setlName] = useState();
  const [fullName, setfullName] = useState("Rashmi");

  const inputEvent = (event) => {
    setfName(event.target.value);
  };

  const inputEventTwo = (event) => {
    setlName(event.target.value);
  };

  const incCount = () => {
    setCount(count + 10);
  };
  const decCount = () => {
    setCount(count - 10);
  };

  const resetCount = () => {
    setCount(0);
  };

  const timeButton = () => {
    newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };
  const formSubmits = (e) => {
    e.preventDefault();
    console.log(fName + lName);
    setfullName(`${fName} ${lName}`);
  };

  return (
    <>
      <div style={style}>
        <h1>
          Count Value:<span style={countNumberText}>{count}</span>
        </h1>
        <br></br>
        <button style={button_test} onClick={incCount}>
          Add
        </button>

        <button style={button_test} onClick={decCount}>
          Sub
        </button>
        <br></br>

        <button style={button_test} onClick={resetCount}>
          Reset
        </button>
      </div>

      <div style={style}>
        <h4> {newTime}</h4>
        <button style={timeButton_test} onClick={timeButton}>
          Get Time
        </button>
      </div>

      <br></br>
      <div style={style}>
        {/* <h2> {inputValue}</h2> */}
        <br></br>
        <form onSubmit={formSubmits}>
          <h4 style={user_name}>Hello {fullName}</h4>
          <br></br>
          <input
            style={input_style}
            type="text"
            placeholder="Enter your Name"
            name="fname"
            onChange={inputEvent}
          ></input>
          <br></br>
          <br></br>
          <input
            style={input_style}
            type="text"
            placeholder="Enter your Name"
            name="lname"
            onChange={inputEventTwo}
          ></input>

          <br></br>
          <button style={timeButton_test} type="submit">
            Get Form Data
          </button>
        </form>
      </div>
    </>
  );
};

export default Practice1;
