import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import Covid19CallCenterInterface from "../../../interfaces/covid19CallCenterNumber.interface";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "moment/locale/ja";
moment.locale("ja");

interface CalendarViewPresentationalProps {
  data?: Covid19CallCenterInterface[];
}

const CalendarViewPresentational = (props: CalendarViewPresentationalProps) => {
  const { data } = props;
  const localizer = momentLocalizer(moment);

  const callCenterEvents = data?.map((event) => {
    return {
      title: event.callCenterCount.toString(),
      start: new Date(event.publicationDate),
      end: new Date(event.publicationDate),
      allDay: true,
    };
  });

  return (
    <div className="pb-2">
      <Calendar
        messages={{
          next: "次月",
          previous: "前月",
          today: "本日",
        }}
        views={["month"]}
        defaultView="month"
        localizer={localizer}
        events={callCenterEvents}
        defaultDate={new Date(2020, 2, 1)}
        style={{ height: "500px" }}
      />
    </div>
  );
};

export default CalendarViewPresentational;
