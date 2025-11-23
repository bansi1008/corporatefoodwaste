import { create } from "zustand";
export const useImpact = create((set) => ({
  totalFoodHandledInBillions: 0,
  totalUnsoldFoodInBillions: 0,
  totalHumanRedistributionInBillions: 0,
  loading: false,
  error: null,
  fetchTotalimpact: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("/api/totalimpact");
      const {
        totalFoodHandledInBillions,
        totalUnsoldFoodInBillions,
        totalHumanRedistributionInBillions,
      } = await res.json();
      set({
        totalFoodHandledInBillions,
        totalUnsoldFoodInBillions,
        totalHumanRedistributionInBillions,
        loading: false,
      });
    } catch (err) {
      set({ error: "Failed to fetch total companies", loading: false });
    }
  },
}));
