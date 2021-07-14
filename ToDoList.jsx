import React from "react";
import "./index.css";

const ToDoLists = (props) => {
  const deleteItems = () => {
    console.log("deleted");
  };

  return (
    <>
      <div className="todo_style">
        <i
          className="fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li> {props.text} </li>;
      </div>
    </>
  );
};

export default ToDoLists;
