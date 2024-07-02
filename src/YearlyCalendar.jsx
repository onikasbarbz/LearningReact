import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
// import "./Yearly.css";
// import { useState } from "react";
// import Calendar from "react-calendar";
const YearlyCalendar = () => {
  // const [value, setValue] = useState(new Date());
  const headerToolbar = {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,dayGridWeek,dayGridDay",
  };
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "event 1", date: "2024-07-01" },
          { title: "event 2", date: "2024-07-02" },
        ]}
        headerToolbar={headerToolbar}
      />
    </div>
  );
};
export default YearlyCalendar;
