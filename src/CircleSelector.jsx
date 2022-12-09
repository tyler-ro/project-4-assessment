import React from "react";
import "./CircleSelector.css";

export default function CircleSelector(props) {
  const handleClick1 = () => {
    props.setCircle1(true);
    props.setCircle2(false);
    props.setCircle3(false);
    props.setCircle4(false);
  };
  const handleClick2 = () => {
    props.setCircle1(false);
    props.setCircle2(true);
    props.setCircle3(false);
    props.setCircle4(false);
  };
  const handleClick3 = () => {
    props.setCircle1(false);
    props.setCircle2(false);
    props.setCircle3(true);
    props.setCircle4(false);
  };
  const handleClick4 = () => {
    props.setCircle1(false);
    props.setCircle2(false);
    props.setCircle3(false);
    props.setCircle4(true);
  };

  return (
    <div className="CircleSelector">
      <button
        className={props.Circle1 ? "selected" : ""}
        onClick={handleClick1}
      >
        {props.Circle1 ? "Circle Selected" : "Select Circle 1"}
      </button>
      <button
        className={props.Circle2 ? "selected" : ""}
        onClick={handleClick2}
      >
        {props.Circle2 ? "Circle Selected" : "Select Circle 2"}
      </button>
      <button
        className={props.Circle3 ? "selected" : ""}
        onClick={handleClick3}
      >
        {props.Circle3 ? "Circle Selected" : "Select Circle 3"}
      </button>
      <button
        className={props.Circle4 ? "selected" : ""}
        onClick={handleClick4}
      >
        {props.Circle4 ? "Circle Selected" : "Select Circle 4"}
      </button>
    </div>
  );
}
