import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Clock from "react-digital-clock";

const style = {
  textAlign: "center",
  margin: 10,
  backgroundColor: "aliceblue",
  height: 500,
};
const clock_css = {
  color: "red",
};

const list_ul = {
  textAlign: "initial",
};
const add_button = {
  backgroundColor: "#4118c3",
  margin: 10,
  padding: 5,
  width: 40,
  color: "black",
  alignItems: "flex-end",
  borderRadius: "5px",
  border: "none",
};

const close_button = {
  color: "red",
  backgroundColor: "transparent",
  margin: 10,
  border: "none",
  //   float: "right",
};
const refresh_button = {
  color: "red",
  backgroundColor: "transparent",
  padding: 5,
  borderRadius: "5px",
};
const card = {
  border: "1px solid grey",
  width: "30%",
  margin: "auto",
  padding: 15,
};

function TodoList() {
  const [inputList, setInputList] = useState("");
  const [items, SetItems] = useState([]);

  const itemEvents = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = () => {
    SetItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const refreshInput = () => {
    SetItems([]);
  };

  const deleteInput = () => {
    this.SetItems([]);
    console.log("deleted");
  };

  return (
    <>
      <div></div>
      <div style={style}>
        <div style={card}>
          <div className="card_header">Hello Heading</div>
          <br />
          <Clock style={{ color: "red" }} />
          <input
            type="text"
            placeholder="Add an Item"
            onChange={itemEvents}
            value={inputList}
          ></input>
          <button style={add_button} onClick={listOfItems}>
            <AddIcon />
          </button>

          <ul style={list_ul}>
            {items.map((itemV) => {
              return (
                <li style={{ listStyleType: "number" }}>
                  <button style={close_button} onClick={deleteInput}>
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </button>
                  {itemV}
                </li>
              );
            })}
          </ul>
          <button style={refresh_button} onClick={refreshInput}>
            <i class="fa fa-refresh" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoList;
