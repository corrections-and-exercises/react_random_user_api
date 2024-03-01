import "./styles.css";
import Instructions from "./instructions/Instructions";
import Container from "./components/Container";
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Instructions />
      <div className="block">
        <button onClick={() => setShow(!show)}>Show</button>
        <Container />
      </div>
    </div>
  );
}
