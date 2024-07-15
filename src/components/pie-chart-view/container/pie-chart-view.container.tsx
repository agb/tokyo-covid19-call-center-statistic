import { useEffect, useState } from "react";
import PieChartViewService from "../pie-chart-view.service";
import PieGraphPresentational from "../presentational/pie-graph/pie-graph.presentational";
import Covid19CallCenterInterface from "../../../interfaces/covid19CallCenterNumber.interface";
import NavigatorState from "../../user-navigator/user-navigator.state";
const Service = new PieChartViewService();

const PieChartViewContainer = () => {
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
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, [dateRange]);

  return (
    <div className="container mx-auto px-10">
      {error ? <p>{error}</p> : <PieGraphPresentational data={data} />}
    </div>
  );
};

export default PieChartViewContainer;
