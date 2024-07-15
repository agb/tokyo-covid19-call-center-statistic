import { useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import initialDates from "../../../../interfaces/initial-date";
import UserNavigatorState from "../../user-navigator.state";

const SelectDatePresentational = () => {
  const navigator = UserNavigatorState((state) => state);

  const [startDate, setStartDate] = useState<Date | undefined>(
    new Date(initialDates.start)
  );
  const [endDate, setEndDate] = useState<Date | undefined>(
    new Date(initialDates.end)
  );

  const initialStartDate = useMemo(() => new Date(initialDates.start), []);
  const initialEndDate = useMemo(() => new Date(initialDates.end), []);

  const onChangeStartDate = (date: Date | null) => {
    if (date) {
      setStartDate(date);
      navigator.setDateRange(date, navigator.dateRange.end);
    }
  };

  const onChangeEndDate = (date: Date | null) => {
    if (date) {
      setEndDate(date);
      navigator.setDateRange(navigator.dateRange.start, date);
    }
  };

  return (
    <div className="flex gap-2">
      <DatePicker
        showIcon
        className="border-gray-300 !pt-1 !pb-2 !pl-8 rounded border"
        selected={startDate}
        onChange={onChangeStartDate}
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
        onChange={onChangeEndDate}
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
