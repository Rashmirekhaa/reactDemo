import React, { useRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { render } from "react-dom";
import { apiCall } from "../services/UserService";
import "./Practice.css";

function Practice() {
  const fname = "Rashmi";
  const lname = "Siddharth";
  const img1 = "https://picsum.photos/id/237/200/300";
  const img2 = "https://picsum.photos/200/300?grayscale";
  const img3 = "https://picsum.photos/seed/picsum/200/300";
  const currDate = new Date();
  const currTime = currDate.getHours();
  let greeting = "";
  const cssStyle = {};

  if (currTime >= 1 && currTime < 12) {
    greeting = "Good Morning ";
    cssStyle.color = "green";
  } else if (currTime >= 16 && currTime < 19) {
    greeting = "Good Night ";
    cssStyle.color = "blue";
  } else if (currTime >= 12 && currTime < 16) {
    greeting = "Good Afternoon ";
    cssStyle.color = "red";
  }

  const heading = {
    color: "#fa9191",
    // background: "#fa9191",
    textAlign: "center",
  };

  return (
    <>
      <div className="wrap">
        {/* <h1>{` My name is ${fname} and ${lname}`}</h1>
        <img src={img1}></img>
        <img src={img2}></img>
        <img src={img3}></img> */}

        <h1>{` MGodd Morning  ${fname} and ${lname}`}</h1>
        <h1>
          Time is : <span style={cssStyle}> {greeting} </span>
        </h1>
      </div>
    </>
  );
}

export default Practice;
