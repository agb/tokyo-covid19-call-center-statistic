import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Covid19CallCenterInterface from "../../../../interfaces/covid19CallCenterNumber.interface";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineGraphPresentationalProps {
  data?: Covid19CallCenterInterface[];
}

const LineGraphPresentational = (props: LineGraphPresentationalProps) => {
  const { data } = props;

  const labels =
    data?.map((callcenterData) => {
      const currentView = new Date(callcenterData.publicationDate);
      const newDateView = `${currentView.getFullYear()}年/${
        currentView.getMonth() + 1
      }月`;

      return newDateView;
    }) || [];
  const callCenterCounts =
    data?.map((callcenterData) => callcenterData.callCenterCount) || [];

  const chartData = {
    labels,
    datasets: [
      {
        label: "相談件数",
        data: callCenterCounts,
        borderColor: "rgba(0,0,0)",
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <div className="w-full max-h-[65vh] flex justify-center">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineGraphPresentational;
