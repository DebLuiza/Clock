import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "./Styles/Calendar.module.scss"
import "./Styles/Calendar.scss"
const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Reunião de Equipe",
    start: new Date(2025, 2, 28, 5, 0),
    end: new Date(2025, 2, 28, 6, 0),
  },
  {
    title: "Apresentação do Projeto",
    start: new Date(2025, 2, 29, 3, 0),
    end: new Date(2025, 2, 29, 2, 0),
  },
];

export default function CalendarComponent() {
    const [myEvents, setMyEvents] = useState(events);

    return (
      <div className={styles["calendar-container"]}>
        <Calendar
          className={styles["calendar"]}
          localizer={localizer}
          events={myEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    );
}
