import React from "react";

function ToDoItem(props) {
  function handelClick() {
    props.deleteItem(props.id);
  }
  return (
    <div>
      <li>
        <input type="checkbox" onChange={handelClick}></input>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
