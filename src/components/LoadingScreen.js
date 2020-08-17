import React from "react";
import "./LoadingScreen.css";

export default function LoadingScreen() {
  return (
    <div className="loader">
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="wineglass left">
        <div className="top"></div>
      </div>
      <div className="wineglass right">
        <div className="top"></div>
      </div>
    </div>
  );
}
