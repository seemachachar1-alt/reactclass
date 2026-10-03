import { useState } from "react";
import "./Style.css";


function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <h1>This is My Counter</h1>

      <h2>{count}</h2>

      <button
        className="btn increase"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
      <button className="btn decrease" onClick={() =>count  >0 && setCount(count -1)}>
Decearse

      </button>
      <button className="btn reset"onClick={() =>setCount(0)}>
reset
      </button>
    </div>
  );
}

export default Counter;
