import { create } from 'zustand';
import { AlfajorSpringProps, DataHistoryProps } from '../interfaces';

export interface useStatisticsStoreProps {
  alfajorCollection: AlfajorSpringProps | null;
  historyCollection: DataHistoryProps[] | null;
  setAlfajorCollection: (alfajorCollection: AlfajorSpringProps | null) => void;
  setHistoryCollection: (historyCollection: DataHistoryProps[] | null) => void;
}

export const useStatisticsStore = create<useStatisticsStoreProps>((set) => ({
  alfajorCollection: null,
  historyCollection: null,
  setAlfajorCollection: (alfajorCollection) => set({ alfajorCollection }),
  setHistoryCollection: (historyCollection) => set({ historyCollection }),
}));
