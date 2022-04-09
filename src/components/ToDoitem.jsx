import React from "react";

function ToDOitem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}>
      <li>{props.text}</li>
    </div>
  );
}

export default ToDOitem;
