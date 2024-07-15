import { useState, useEffect, useContext } from "react";
import CalendarViewPresentational from "../presentational/calendar-view.presentational";
import CalendarViewService from "../calendar-view.service";
import Covid19CallCenterInterface from "../../../interfaces/covid19CallCenterNumber.interface";
import { UserNavigatorContext } from "../../user-navigator/user-navigator.context";
const Service = new CalendarViewService();

const CalendarViewContainer = () => {
  const { navigator } = useContext(UserNavigatorContext);

  const [data, setData] = useState<Covid19CallCenterInterface[] | undefined>(
    undefined
  );
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Service.getData({
          from: navigator.dateRange.start,
          till: navigator.dateRange.end,
          limit: 1000,
        });
        if (result.error) {
          setError(result.error);
        } else {
          setData(result.data);
        }
      } catch (err) {
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, [navigator.dateRange]);

  return (
    <div className="container mx-auto px-10">
      {error ? <p>{error}</p> : <CalendarViewPresentational data={data} />}
    </div>
  );
};

export default CalendarViewContainer;
