import React, { useState } from "react";

function Form(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="pass"
      />
      <button onClick={() => props.handleClick(email, password)}>
        {props.title}
      </button>
    </div>
  );
}

export default Form;
