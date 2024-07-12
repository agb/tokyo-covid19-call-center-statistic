import {
  faCalendar,
  faSquarePollVertical,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const SelectViewPresentational = () => {
  return (
    <div className="flex gap-3 text-2xl text-gray-800">
      <Link
        data-tooltip-id="tooltip"
        data-tooltip-content="カレンダービュー"
        className="px-2 border-gray-200 border bg-gray-200 rounded"
        to="/calendar"
      >
        <FontAwesomeIcon icon={faCalendar} />
      </Link>

      <Link
        data-tooltip-id="tooltip"
        data-tooltip-content="折れ線グラフ"
        className="px-2 border-gray-200 border bg-gray-200 rounded"
        to="/line-chart"
      >
        <FontAwesomeIcon icon={faSquarePollVertical} />
      </Link>

      <Link
        data-tooltip-id="tooltip"
        data-tooltip-content="円グラフ"
        className="px-2 border-gray-200 border bg-gray-200 rounded"
        to="/pie-chart"
      >
        <FontAwesomeIcon icon={faChartPie} />
      </Link>

      <Tooltip id="tooltip" place="top" />
    </div>
  );
};

export default SelectViewPresentational;
