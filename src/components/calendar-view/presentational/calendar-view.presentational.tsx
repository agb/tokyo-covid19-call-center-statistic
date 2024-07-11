import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import Covid19CallCenterInterface from "../interfaces/covid19CallCenterNumber.interface";
import { Calendar, momentLocalizer } from "react-big-calendar";

moment.locale("ja");

interface CalendarViewPresentationalProps {
  data: Covid19CallCenterInterface[] | undefined;
}

const CalendarViewPresentational: React.FC<CalendarViewPresentationalProps> = ({
  data,
}) => {
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
        views={["month"]}
        defaultView="month"
        localizer={localizer}
        events={callCenterEvents}
        defaultDate={new Date(2020, 2, 1)}
        style={{ height: `500px` }}
      />
    </div>
  );
};

export default CalendarViewPresentational;
