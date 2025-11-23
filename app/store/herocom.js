import { create } from "zustand";
export const useEUFigStore = create((set) => ({
  eucom: 0,
  ukcom: 0,
  loading: false,
  error: null,
  fetchTotalCompanies: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("/api/totalcomfig");
      const { eucom, ukcom } = await res.json();
      set({ eucom, ukcom, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch total companies", loading: false });
    }
  },
}));
