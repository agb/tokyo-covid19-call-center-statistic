import { useContext, useEffect, useState } from "react";
import LineChartViewService from "../line-chart-view.service";
import LineGraphPresentational from "../presentational/line-graph/line-graph.presentational";
import Covid19CallCenterInterface from "../../../interfaces/covid19CallCenterNumber.interface";
import { UserNavigatorContext } from "../../user-navigator/user-navigator.context";
const Service = new LineChartViewService();

const LineChartViewContainer = () => {
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
  }, [navigator.dateRange.end, navigator.dateRange.start]);

  return (
    <div className="container mx-auto px-10">
      {error ? <p>{error}</p> : <LineGraphPresentational data={data} />}
    </div>
  );
};

export default LineChartViewContainer;
