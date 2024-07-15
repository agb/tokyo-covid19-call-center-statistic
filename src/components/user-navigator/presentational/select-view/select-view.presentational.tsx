import {
  faCalendar,
  faSquarePollVertical,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { UserNavigatorContext } from "../../user-navigator.context";

const SelectViewPresentational = () => {
  const { navigator, setNavigator } = useContext(UserNavigatorContext);
  const pathName = useLocation().pathname;

  useEffect(() => {
    setNavigator((state) => ({
      ...state,
      activeTab: pathName,
    }));
  }, [pathName, setNavigator]);

  return (
    <div className="flex gap-3 text-2xl text-gray-800">
      <Link
        data-tooltip-id="tooltip"
        data-tooltip-content="カレンダービュー"
        className={`px-2 border-gray-200 rounded border  ${
          navigator.activeTab === "/calendar" || navigator.activeTab === "/"
            ? "bg-white border-2 border-gray-700"
            : "bg-gray-200"
        }`}
        to="/calendar"
      >
        <FontAwesomeIcon icon={faCalendar} />
      </Link>
      <Link
        data-tooltip-id="tooltip"
        data-tooltip-content="折れ線グラフ"
        className={`px-2 border-gray-200 rounded  ${
          navigator.activeTab === "/line-chart"
            ? "bg-white border-2 border-gray-700"
            : "bg-gray-200"
        }`}
        to="/line-chart"
      >
        <FontAwesomeIcon icon={faSquarePollVertical} />
      </Link>
      <Link
        data-tooltip-id="tooltip"
        data-tooltip-content="円グラフ"
        className={`px-2 border-gray-200 rounded ${
          navigator.activeTab === "/pie-chart"
            ? "bg-white border-2 border-gray-700"
            : "border bg-gray-200"
        }`}
        to="/pie-chart"
      >
        <FontAwesomeIcon icon={faChartPie} />
      </Link>

      <Tooltip id="tooltip" place="top" />
    </div>
  );
};

export default SelectViewPresentational;
