import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import Covid19CallCenterInterface from "../../../../interfaces/covid19CallCenterNumber.interface";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface PieGraphPresentationalProps {
  data?: Covid19CallCenterInterface[];
}

const PieGraphPresentational = (props: PieGraphPresentationalProps) => {
  const { data } = props;

  let total2020 = 0;
  let total2021 = 0;
  let total2022 = 0;

  for (const dataCell of data ?? []) {
    const year = new Date(dataCell.publicationDate).getFullYear();

    switch (year) {
      case 2020:
        total2020++;
        break;
      case 2021:
        total2021++;
        break;
      case 2022:
        total2022++;
        break;
    }
  }

  const labels = ["2020", "2021", "2022"];
  const callCenterCounts = [total2020, total2021, total2022];

  const chartData = {
    labels,
    datasets: [
      {
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
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieGraphPresentational;
