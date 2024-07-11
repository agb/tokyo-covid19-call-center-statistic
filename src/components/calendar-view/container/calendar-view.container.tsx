import { useState, useEffect } from "react";
import CalendarViewPresentational from "../presentational/calendar-view.presentational";
import CalendarViewService from "../calendar-view.service";
import Covid19CallCenterInterface from "../interfaces/covid19CallCenterNumber.interface";
const Service = new CalendarViewService();

const CalendarViewContainer = () => {
  const [data, setData] = useState<Covid19CallCenterInterface[] | undefined>(
    undefined
  );
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Service.fetchNumberOfCovid19CallCenter();
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
  }, []);

  return (
    <div className="container mx-auto px-10">
      {error ? <p>{error}</p> : <CalendarViewPresentational data={data} />}
    </div>
  );
};

export default CalendarViewContainer;
