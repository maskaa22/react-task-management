import c from "./MainContent.module.css";
import Header from "../header/Header";
import RunningTask from "../runningTask/RunningTask";
import ActivityChart from "../activityChart/ActivityChart";
import SwiperContainer from "../swiperContainer/SwiperContainer";
import CalendarContainer from "../calendarContainer/CalendarContainer";
import TaskToday from "../taskToday/TaskToday";
import { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";

const MainContent = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
      setOpen(window.innerWidth >= 1024 && true);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onClose = () => {
    setOpen(false);
  };

  return (
    // <div>

    <div className={c.blockPosition}>
      <div className={c.containerMenu}>
        <Sidebar open={open} close={onClose} />
      </div>

      <div class={c.contentArea}>
        <div className={c.mainContant}>
          <Header isLargeScreen={isLargeScreen} open={setOpen} />

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
        </div>

        {/* </div> */}
        <section className={c.rightPanel}>
          <div className="container">
            <CalendarContainer />
            <TaskToday />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainContent;
