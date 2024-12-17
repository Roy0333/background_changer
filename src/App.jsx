import { useState } from "react";

function App() {
  const [colour, setColour] = useState("colour--default");
  return (
    <main className={`main-body ${colour}`}>
      <h1>Hellooo! </h1>
      <ul className="buttons-wrapper">
        <li className="button-item">
          <button
            type="button"
            onClick={() => {
              setColour("colour--red");
            }}
            className="colour-btn colour--red"
          >
            red
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              setColour("colour--green");
            }}
            className="colour-btn colour--green"
          >
            green
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              setColour("colour--blue");
            }}
            className="colour-btn colour--blue"
          >
            blue
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              setColour("colour--black");
            }}
            className="colour-btn colour--black"
          >
            black
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              setColour("colour--default");
            }}
            className="colour-btn colour--default"
          >
            default
          </button>
        </li>
      </ul>
    </main>
  );
}

export default App;
