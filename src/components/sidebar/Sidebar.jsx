import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

const Sidebar = ({ open, close }) => {
  return (
    // <div className={open ? `container-menu is-open` : 'container-menu'}>
    <div className={`container-menu is-open`}>
      <IoCloseOutline className="icon-close" onClick={close} />
      <div className="logo-container">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.9834 3.33333H13.0167C6.95004 3.33333 3.33337 6.95 3.33337 13.0167V26.9667C3.33337 33.05 6.95004 36.6667 13.0167 36.6667H26.9667C33.0334 36.6667 36.65 33.05 36.65 26.9833V13.0167C36.6667 6.95 33.05 3.33333 26.9834 3.33333ZM19.1667 28.75C19.1667 29.35 18.5667 29.75 18.0167 29.5167C16 28.65 13.3667 27.85 11.5334 27.6167L11.2167 27.5833C10.2 27.45 9.36671 26.5 9.36671 25.4667V12.6333C9.36671 11.35 10.4 10.4 11.6667 10.5C13.75 10.6667 16.8334 11.6667 18.7667 12.7667C19.0334 12.9167 19.1667 13.2 19.1667 13.4833V28.75ZM30.6334 25.45C30.6334 26.4833 29.8 27.4333 28.7834 27.5667L28.4334 27.6C26.6167 27.85 24 28.6333 21.9834 29.4833C21.4334 29.7167 20.8334 29.3167 20.8334 28.7167V13.4667C20.8334 13.1667 20.9834 12.8833 21.25 12.7333C23.1834 11.65 26.2 10.6833 28.25 10.5H28.3167C29.6 10.5 30.6334 11.5333 30.6334 12.8167V25.45Z"
            fill="#546FFF"
          />
        </svg>
        <p className="logo">Nuegas</p>
      </div>

      <nav className="menu-list">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "item active" : "item")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
              stroke="#141522"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
              stroke="#141522"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
              stroke="#141522"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
              stroke="#141522"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>{" "}
          Overview
        </NavLink>
        <NavLink
          to={"/tasks"}
          className={({ isActive }) => (isActive ? "item active" : "item")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 16.74V4.67001C22 3.47001 21.02 2.58001 19.83 2.68001H19.77C17.67 2.86001 14.48 3.93001 12.7 5.05001L12.53 5.16001C12.24 5.34001 11.76 5.34001 11.47 5.16001L11.22 5.01001C9.44 3.90001 6.26 2.84001 4.16 2.67001C2.97 2.57001 2 3.47001 2 4.66001V16.74C2 17.7 2.78 18.6 3.74 18.72L4.03 18.76C6.2 19.05 9.55 20.15 11.47 21.2L11.51 21.22C11.78 21.37 12.21 21.37 12.47 21.22C14.39 20.16 17.75 19.05 19.93 18.76L20.26 18.72C21.22 18.6 22 17.7 22 16.74Z"
              stroke="#8E92BC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 5.48999V20.49"
              stroke="#8E92BC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.75 8.48999H5.5"
              stroke="#8E92BC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.5 11.49H5.5"
              stroke="#8E92BC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Task
        </NavLink>
        <NavLink
          to={"/mentors"}
          className={({ isActive }) => (isActive ? "item active" : "item")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.08 8.58003V15.42C21.08 16.54 20.48 17.58 19.51 18.15L13.57 21.58C12.6 22.14 11.4 22.14 10.42 21.58L4.48003 18.15C3.51003 17.59 2.91003 16.55 2.91003 15.42V8.58003C2.91003 7.46003 3.51003 6.41999 4.48003 5.84999L10.42 2.42C11.39 1.86 12.59 1.86 13.57 2.42L19.51 5.84999C20.48 6.41999 21.08 7.45003 21.08 8.58003Z"
              stroke="#8E92BC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 11C13.2869 11 14.33 9.95681 14.33 8.66998C14.33 7.38316 13.2869 6.34003 12 6.34003C10.7132 6.34003 9.67004 7.38316 9.67004 8.66998C9.67004 9.95681 10.7132 11 12 11Z"
              stroke="#8E92BC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 16.66C16 14.86 14.21 13.4 12 13.4C9.79 13.4 8 14.86 8 16.66"
              stroke="#8E92BC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Mentors
        </NavLink>
        <NavLink
          to={"/messages"}
          className={({ isActive }) => (isActive ? "item active" : "item")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
              stroke="#8E92BC"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.9965 11H16.0054"
              stroke="#8E92BC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9955 11H12.0045"
              stroke="#8E92BC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.99451 11H8.00349"
              stroke="#8E92BC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Message
        </NavLink>
        <NavLink
          to={"/settings"}
          className={({ isActive }) => (isActive ? "item active" : "item")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="#8E92BC"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z"
              stroke="#8E92BC"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Settings
        </NavLink>
      </nav>

      <div className="help-container">
        <div className="help-info">
          <p className="help-title">Help Center</p>
          <p className="help-text">
            Having Trouble in Learning. Please contact us for more questions.
          </p>
          <button className="help-btn">Go To Help Center</button>
        </div>

        <img src="./sidebar/help.png" />
      </div>
    </div>
  );
};

export default Sidebar;
