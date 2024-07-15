import create from "zustand";
import Covid19CallCenterInterface from "./interfaces/covid19CallCenterNumber.interface";

interface Covid19CallCenterState {
  covid19CallCenterData: Record<string, Covid19CallCenterInterface[]> | null;
  covid19CallCenterError: Record<string, string> | null;
  setCovid19CallCenterData: (
    key: string,
    data: Covid19CallCenterInterface[]
  ) => void;
  setCovid19CallCenterError: (key: string, error: string) => void;
}

const useCovid19CallCenterStore = create<Covid19CallCenterState>((set) => ({
  covid19CallCenterData: null,
  covid19CallCenterError: null,
  setCovid19CallCenterData: (key, data) =>
    set((state) => ({
      covid19CallCenterData: { ...state.covid19CallCenterData, [key]: data },
    })),
  setCovid19CallCenterError: (key, error) =>
    set((state) => ({
      covid19CallCenterError: { ...state.covid19CallCenterError, [key]: error },
    })),
}));

export default useCovid19CallCenterStore;
