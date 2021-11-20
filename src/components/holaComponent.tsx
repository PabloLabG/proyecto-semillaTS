import React from "react";
import { holaMundo } from "../services/holaService";
import classes from "../styles/mystyles.scss";

export const HolaComponent = () => {
  return (
    <div>
      <div id="dvTitle" className={classes.title}>
        Hello WebPack
      </div>
      <span>Saludo Service: {holaMundo()}</span>
    </div>
  );
};
