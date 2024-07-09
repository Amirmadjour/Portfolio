import { create } from "zustand";

//when the user refreshes it should not be Home
const usePageTransition = create((set) => ({
  isTransitioning: false,
  routePath: "Home",
  toggleToTransition: () =>
    set((state) => ({ isTransitioning: !state.isTransitioning })),
  setRoutePath: (val) => set(() => ({ routePath: val })),
}));

export default usePageTransition;
