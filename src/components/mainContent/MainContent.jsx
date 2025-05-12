import c from "./MainContent.module.css";
import Header from "../header/Header";
import RunningTask from "../runningTask/RunningTask";
import ActivityChart from "../activityChart/ActivityChart";
import SwiperContainer from "../swiperContainer/SwiperContainer";
import CalendarContainer from "../calendarContainer/CalendarContainer";
import TaskToday from "../taskToday/TaskToday";
import { useEffect, useState } from "react";

const MainContent = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Header isLargeScreen={isLargeScreen} />
      <div className="container">
        {!isLargeScreen && (
          <div className={c.greetings}>
            <h1 className={c.title}>Hi, Skylar Dias</h1>
            <p className={c.text}>Let's finish your task today!</p>
          </div>
        )}

        <div className={c.tabDecActiv}>
          <RunningTask />
          <ActivityChart />
        </div>

        
          <SwiperContainer title="Monthly Mentors" flag="mentor" />
          <SwiperContainer title="Upcoming Task" flag="task" />
       

      </div>
      <section className={c.rightPanel}>
        <div className="container">
          <CalendarContainer />
          <TaskToday />
        </div>
      </section>
    </div>
  );
};

export default MainContent;
