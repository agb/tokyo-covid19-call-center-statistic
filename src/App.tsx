import React from "react";
import "./App.css";
import Header from "./components/header/header";
import CalendarView from "./components/calendar-view/calendar-view";
import UserNavigator from "./components/user-navigator/user-navigator";

function App() {
  return (
    <div className="App">
      <div className="w-full flex flex-col">
        <Header></Header>
        <UserNavigator></UserNavigator>
        <CalendarView></CalendarView>
      </div>
    </div>
  );
}

export default App;
