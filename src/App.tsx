import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import CalendarView from "./components/calendar-view/calendar-view";
import UserNavigator from "./components/user-navigator/user-navigator";
import LineChartView from "./components/line-chart-view/line-chart-view";
import PieChartView from "./components/pie-chart-view/pie-chart-view";

function App() {
  return (
    <div className="App">
      <div className="w-full flex flex-col">
        <Header></Header>
        <UserNavigator></UserNavigator>

        <Routes>
          <Route path="/" element={<CalendarView />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/line-chart" element={<LineChartView />} />
          <Route path="/pie-chart" element={<PieChartView />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
