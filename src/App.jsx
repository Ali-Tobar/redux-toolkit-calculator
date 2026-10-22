import "./App.css";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, sub, mult, divi, reset } from "./features/calcs/calcSlice";
function App() {
  const resultState = useSelector((state) => state.calc.result);
  const dispatch = useDispatch();

  const [firstNumberInput, setFirstNumberInput] = useState("");
  const [secondNumberInput, setSecondNumberInput] = useState("");

  // EVENT HANDLERS
  function handleSumClick() {
    dispatch(add({ first: firstNumberInput, second: secondNumberInput }));
  }

  function handleSubClick() {
    dispatch(sub({ first: firstNumberInput, second: secondNumberInput }));
  }

  function handleMultClick() {
    dispatch(mult({ first: firstNumberInput, second: secondNumberInput }));
  }

  function handleDivClick() {
    dispatch(divi({ first: firstNumberInput, second: secondNumberInput }));
  }

  function handleResetClick() {
    dispatch(reset());
    setFirstNumberInput("");
    setSecondNumberInput("");
  }
  return (
    <div className="App">
      <div className="calculator">
        <label htmlFor="first-number">First Number</label>
        <input
          id="first-number"
          type="number"
          value={firstNumberInput ?? ""}
          onChange={(e) => setFirstNumberInput(e.target.value)}
        />

        <label htmlFor="second-number">Second Number</label>
        <input
          id="second-number"
          type="number"
          value={secondNumberInput ?? ""}
          onChange={(e) => setSecondNumberInput(e.target.value)}
        />

        <div className="calculator-buttons">
          <button onClick={handleSumClick}>Sum</button>
          <button onClick={handleSubClick}>Subtract</button>
          <button onClick={handleMultClick}>Multiply</button>
          <button onClick={handleDivClick}>Divide</button>
        </div>

        <div className="calculator-result">
          <span>Result</span>
          <h2>{resultState ?? "—"}</h2>
          <button onClick={handleResetClick}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
