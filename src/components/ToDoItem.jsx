import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);
  // 3

  function handleClick() {
    // 2
    setIsDone((prevValue) => {
      return !prevValue;
      // 4
    });
  }

  return (
    <div onClick={handleClick}>
      {/* 1 */}
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {/* 5 */}
        {props.text}
      </li>
      ;
    </div>
  );
}

export default ToDoItem;
