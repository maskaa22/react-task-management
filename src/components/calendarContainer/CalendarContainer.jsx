import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./CalendarContainer.css";

const CalendarContainer = () => {
  //  const today = new Date();
  const [selected, setSelected] = useState(new Date());
  const [selectedWeekday, setSelectedWeekday] = useState(null);

  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   handleResize(); // одразу викликаємо
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  const formatters = {
    formatWeekdayName: (day) =>
      day.toLocaleDateString("en-US", { weekday: "short" }).slice(0, 1),
  };

  const handleDayClick = (date) => {
    const weekdayIndex = date.getDay();
    setSelectedWeekday(weekdayIndex);
  };

  const modifiers = {
    selectedColumn: (date) => date.getDay() === selectedWeekday,
  };

  return (
    <div className="calendar">
      <DayPicker
        animate
        mode="single"
        // selected={today}
        selected={selected}
        onSelect={setSelected}
        onDayClick={handleDayClick}
        weekStartsOn={0}
        //  disabled={isMobile ? [{ dayOfWeek: [0, 6] }] : []}
        modifiersClassNames={{
          selected: "selectedDay",
          today: "todayDay",
          disabled: "hidden-day",
          selectedColumn: "selectedColumn",
        }}
        formatters={formatters}
        modifiers={modifiers}
      />
    </div>
  );
};

export default CalendarContainer;
