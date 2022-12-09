import React from "react";
import "./Circles.css";

export default function Circles(props) {
  return (
    <div className="Circles">
      <div className={props.Circle1 ? "selected" : ""}>1</div>
      <div className={props.Circle2 ? "selected" : ""}>2</div>
      <div className={props.Circle3 ? "selected" : ""}>3</div>
      <div className={props.Circle4 ? "selected" : ""}>4</div>
    </div>
  );
}
