import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import initialDates, { DateRange } from "../../interfaces/initial-date";

interface NavigatorState {
  activeTab: string;
  dateRange: DateRange;
}

interface UserNavigatorContextProps {
  navigator: NavigatorState;
  setNavigator: Dispatch<SetStateAction<NavigatorState>>;
}

interface UserNavigatorProviderProps {
  children: ReactNode;
}

const initialState: NavigatorState = {
  activeTab: "calendar",
  dateRange: {
    start: new Date(initialDates.start),
    end: new Date(initialDates.end),
  } as DateRange,
};

const UserNavigatorContext = createContext<UserNavigatorContextProps>({
  navigator: initialState,
  setNavigator: () => {},
});

const UserNavigatorProvider = ({ children }: UserNavigatorProviderProps) => {
  const [navigator, setNavigator] = useState<NavigatorState>(initialState);

  return (
    <UserNavigatorContext.Provider value={{ navigator, setNavigator }}>
      {children}
    </UserNavigatorContext.Provider>
  );
};

export { UserNavigatorContext, UserNavigatorProvider };
