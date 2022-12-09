import Circles from "./Circles";
import CircleSelector from "./CircleSelector";
import React, { Component } from "react";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [Circle1, setCircle1] = useState(true);
  const [Circle2, setCircle2] = useState(false);
  const [Circle3, setCircle3] = useState(false);
  const [Circle4, setCircle4] = useState(false);

  return (
    <div className="App">
      <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
      <main>
        <CircleSelector
          Circle1={Circle1}
          Circle2={Circle2}
          Circle3={Circle3}
          Circle4={Circle4}
          setCircle1={setCircle1}
          setCircle2={setCircle2}
          setCircle3={setCircle3}
          setCircle4={setCircle4}
        />
        <Circles
          Circle1={Circle1}
          Circle2={Circle2}
          Circle3={Circle3}
          Circle4={Circle4}
        />
      </main>
    </div>
  );
}
