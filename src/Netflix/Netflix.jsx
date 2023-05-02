import React from "react";
import Cards from "../Cards";
import "./Netflix.css";
import "../index.css";
import sdata from "./Sdata";

const favUser = () => {
  if (favUser === "Lisa") {
    return {};
  } else {
  }
};
const ncard = (val) => {
  return (
    <div className="cards">
      <div className="card">
        <Cards
          key={val.id.value}
          title={val.name.first}
          imgSrc={val.picture.large}
          imgInfo={val.email}
          addDress={val.location.street}
        ></Cards>
      </div>
    </div>
  );
};

const Netflix = () => {
  return (
    <>
      <h1 className="heading_style"> Heading goes here</h1>
      <div className="main">{sdata.map(ncard)}</div>
    </>
  );
};

export default Netflix;
