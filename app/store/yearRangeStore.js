import { create } from "zustand";

export const useYearRangeStore = create((set) => ({
  minFrom: null,
  maxTo: null,
  loading: false,
  error: null,

  // Async fetch method
  fetchYearRange: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("/api/ukdatafig");
      const { minFrom, maxTo } = await res.json();
      set({ minFrom, maxTo, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch year range", loading: false });
    }
  },
}));
