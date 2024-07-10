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
      customData: event.nationwideLocalGovernmentCode,
    };
  });

  return (
    <div className="pb-2">
      <Calendar
        defaultView="week"
        localizer={localizer}
        events={callCenterEvents}
        defaultDate={new Date(2020, 0, 1)}
      />
    </div>
  );
};

export default CalendarViewPresentational;
