import React from "react";
import c from "./MainContent.module.css";
import Header from "../header/Header";
import RunningTask from "../runningTask/RunningTask";
import ActivityChart from "../activityChart/ActivityChart";
import SwiperContainer from "../swiperContainer/SwiperContainer";
import CalendarContainer from "../calendarContainer/CalendarContainer";
import TaskToday from "../taskToday/TaskToday";

const MainContent = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className={c.greetings}>
          <h1 className={c.title}>Hi, Skylar Dias</h1>
          <p className={c.text}>Let's finish your task today!</p>
        </div>
        <RunningTask />
        <ActivityChart />
        <SwiperContainer title='Monthly Mentors' flag='mentor'/>
        <SwiperContainer title='Upcoming Task' flag='task'/>
      </div>
      <section className={c.rightPanel}>
        <div className="container">
          <CalendarContainer/>
          <TaskToday/>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
