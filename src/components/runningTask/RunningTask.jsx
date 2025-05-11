import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import c from "./RunningTask.module.css";

const RunningTask = () => {
  return (
    <div className={c.innerContainer}>
      <div>
        <h3 className={c.title}>Running Task</h3>
        <p className={c.runningTask}>65</p>
      </div>
      <div className={c.progressContainer}>
        <CircularProgressbar
          value={45}
          text={`45%`}
          styles={buildStyles({
            textColor: "#fff",
            pathColor: "#4A6CF7",
            trailColor: "#eee",
            textSize: "26px"
          })}
          className={c.circul}
        />
        <div>
          <p className={c.allTask}>100</p>
          <p className={c.worlTask}>Task</p>
        </div>
      </div>
    </div>
  );
};

export default RunningTask;
