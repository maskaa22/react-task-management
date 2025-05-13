import React from "react";
import c from "./Task.module.css";

const Task = () => {
  return (
    <div className={c.innerContainer}>
      <div className={c.fotoTask}>
        <img src="./tasks/task1.png" />
      </div>

      <div className={c.nameContainer}>
        <h4 className={c.title}>Creating Mobile App Design</h4>
        <p className={c.thema}>UI UX Design</p>
      </div>

      <div className={c.progressContainer}>
        <div className={c.positionTitleProgress}>
          <h5 className={c.progress}>Progress</h5>
          <p className={c.prosent}>75%</p>
        </div>
        <svg
          width="287"
          height="16"
          viewBox="0 0 287 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="287" height="8" rx="4" fill="#BAC8FF" />
          <path
            d="M0 8C0 5.79086 1.79086 4 4 4H215.25V12H4C1.79086 12 0 10.2091 0 8Z"
            fill="#546FFF"
          />
          <path
            d="M215.25 1C219.25 1.0001 222.45 4.1572 222.45 8C222.45 11.8428 219.25 14.9999 215.25 15C211.25 15 208.05 11.8429 208.05 8C208.05 4.15714 211.25 1 215.25 1Z"
            fill="#546FFF"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      </div>

      <div className={c.dataContainer}>
        <div className={c.data}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.2498 12.0005C21.2498 17.1095 17.1088 21.2505 11.9998 21.2505C6.89079 21.2505 2.74979 17.1095 2.74979 12.0005C2.74979 6.89149 6.89079 2.75049 11.9998 2.75049C17.1088 2.75049 21.2498 6.89149 21.2498 12.0005Z"
              stroke="#54577A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.4314 14.9429L11.6614 12.6939V7.84692"
              stroke="#54577A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>3 Days Left</p>
        </div>
        <div>
          <img src="./tasks/student.png" />
        </div>
      </div>
    </div>
  );
};

export default Task;
