import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SelectDatePresentational = () => {
  const initialStartDate = new Date("2020-01-01");
  const initialEndDate = new Date("2022-12-31");

  const [startDate, setStartDate] = useState<Date>(initialStartDate);
  const [endDate, setEndDate] = useState<Date>(initialEndDate);

  return (
    <div className="flex gap-2">
      <DatePicker
        showIcon
        className="border-gray-300 !pt-1 !pb-2 !pl-8 rounded border"
        selected={startDate}
        onChange={(date) => setStartDate(date ?? initialStartDate)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="開始日"
        minDate={initialStartDate}
        maxDate={initialEndDate}
      />
      <DatePicker
        showIcon
        className="border-gray-300 !pt-1 !pb-2 rounded border"
        selected={endDate}
        onChange={(date) => setEndDate(date ?? initialEndDate)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={initialStartDate}
        maxDate={initialEndDate}
        placeholderText="終了日"
      />
    </div>
  );
};

export default SelectDatePresentational;
