import React, { useState } from "react";
import "./global.scss";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Hello App!</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      >
        Increase
      </button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
      {counter}
    </>
  );
}
