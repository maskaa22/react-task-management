import React from "react";
import c from "./Mentor.module.css";

const Mentor = () => {
  return (
    <div className={c.card}>
      <div className={c.infoProfile}>
        <div className={c.allInfo}>
          <img
            src="./mentors/mentor1.png"
            alt="Curious George"
            className={c.foto}
          />
          <div className={c.profile}>
            <h4 className={c.name}>Curious George</h4>
            <p className={c.job}>UI UX Design</p>
          </div>
        </div>
        <p className={c.follow}>+Follow</p>
      </div>
      <div className={c.infoTask}>
        <div className={c.task}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.66 10.44L20.68 14.62C19.84 18.23 18.18 19.69 15.06 19.39C14.56 19.35 14.02 19.26 13.44 19.12L11.76 18.72C7.59 17.73 6.3 15.67 7.28 11.49L8.26 7.30001C8.46 6.45001 8.7 5.71001 9 5.10001C10.17 2.68001 12.16 2.03001 15.5 2.82001L17.17 3.21001C21.36 4.19001 22.64 6.26001 21.66 10.44Z"
              stroke="#54577A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.06 19.39C14.44 19.81 13.66 20.16 12.71 20.47L11.13 20.99C7.16001 22.27 5.07001 21.2 3.78001 17.23L2.50001 13.28C1.22001 9.30998 2.28001 7.20998 6.25001 5.92998L7.83001 5.40998C8.24001 5.27998 8.63001 5.16998 9.00001 5.09998C8.70001 5.70998 8.46001 6.44998 8.26001 7.29998L7.28001 11.49C6.30001 15.67 7.59001 17.73 11.76 18.72L13.44 19.12C14.02 19.26 14.56 19.35 15.06 19.39Z"
              stroke="#54577A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.64 8.53003L17.49 9.76003"
              stroke="#54577A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.66 12.4L14.56 13.14"
              stroke="#54577A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>40 Task</p>
        </div>
        <div className={c.star}>
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="#ffb054"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
              fill="#FFB054"
            />
          </svg>
          <p>4,7 (750 Reviews)</p>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
