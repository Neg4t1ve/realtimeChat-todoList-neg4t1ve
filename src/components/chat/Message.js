import React from "react";

function Message(props) {
  return (
    <div>
      <p>{props.username}</p>
      <h2>{props.text}</h2>
    </div>
  );
}

export default Message;
