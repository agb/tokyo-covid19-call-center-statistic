import { useState, useEffect } from "react";
import CalendarViewPresentational from "../presentational/calendar-view.presentational";
import CalendarViewService from "../calendar-view.service";
import Covid19CallCenterInterface from "../../../interfaces/covid19CallCenterNumber.interface";
import NavigatorState from "../../user-navigator/user-navigator.state";
const Service = new CalendarViewService();

const CalendarViewContainer = () => {
  const dateRange = NavigatorState((state) => state.dateRange);

  const [data, setData] = useState<Covid19CallCenterInterface[] | undefined>(
    undefined
  );
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Service.getData({
          from: dateRange.start,
          till: dateRange.end,
          limit: 1000,
        });
        if (result.error) {
          setError(result.error);
        } else {
          setData(result.data);
        }
      } catch (err) {
        console.error(err); // Hata ayıklamak için hata mesajını log'layın
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, [dateRange]);

  return (
    <div className="container mx-auto px-10">
      {error ? <p>{error}</p> : <CalendarViewPresentational data={data} />}
    </div>
  );
};

export default CalendarViewContainer;
