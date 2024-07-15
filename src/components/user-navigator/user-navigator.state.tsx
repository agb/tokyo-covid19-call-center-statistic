// user-navigator.state.ts
import { create } from "zustand";
import initialDates, { DateRange } from "../../interfaces/initial-date";

interface UserNavigatorState {
  activeTab: string;
  dateRange: DateRange;
  setDateRange: (start: Date, end: Date) => void;
  setActiveTab: (tabName: string) => void;
}

const useUserNavigatorState = create<UserNavigatorState>((set) => ({
  activeTab: "/calendar",
  dateRange: {
    start: new Date(initialDates.start),
    end: new Date(initialDates.end),
  },
  setDateRange: (start, end) =>
    set(() => ({
      dateRange: { start, end },
    })),
  setActiveTab: (tabName) =>
    set(() => ({
      activeTab: tabName,
    })),
}));

export default useUserNavigatorState;
