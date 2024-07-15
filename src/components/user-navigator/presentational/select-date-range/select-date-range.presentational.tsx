import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserNavigatorContext } from "../../user-navigator.context";
import initialDates from "../../../../interfaces/initial-date";

const SelectDatePresentational = () => {
  const { navigator, setNavigator } = useContext(UserNavigatorContext);
  const [startDate, setStartDate] = useState<Date | undefined>(
    new Date(initialDates.start)
  );
  const [endDate, setEndDate] = useState<Date | undefined>(
    new Date(initialDates.end)
  );

  const initialStartDate = new Date(initialDates.start);
  const initialEndDate = new Date(initialDates.end);

  useEffect(() => {
    setNavigator((state) => ({
      ...state,
      dateRange: {
        start: startDate || state.dateRange.start,
        end: endDate || state.dateRange.end,
      },
    }));
  }, [
    startDate,
    endDate,
    setNavigator,
    navigator.dateRange.start,
    navigator.dateRange.end,
  ]);

  const onChangeDatePicker = (date: Date | null, position: "start" | "end") => {
    if (date) {
      if (position === "start") {
        setStartDate(date);
      } else {
        setEndDate(date);
      }
    }
  };

  return (
    <div className="flex gap-2">
      <DatePicker
        showIcon
        className="border-gray-300 !pt-1 !pb-2 !pl-8 rounded border"
        selected={startDate}
        onChange={(date) => onChangeDatePicker(date as Date, "start")}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="開始日"
        minDate={initialStartDate}
        maxDate={endDate || initialEndDate}
      />
      <DatePicker
        showIcon
        className="border-gray-300 !pt-1 !pb-2 rounded border"
        selected={endDate}
        onChange={(date) => onChangeDatePicker(date as Date, "end")}
        selectsEnd
        minDate={startDate || initialStartDate}
        startDate={startDate}
        endDate={endDate}
        placeholderText="終了日"
        maxDate={initialEndDate}
      />
    </div>
  );
};

export default SelectDatePresentational;
