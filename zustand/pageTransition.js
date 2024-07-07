import { create } from "zustand";

const usePageTransition = create((set) => ({
  isTransitioning: false,
  routePath: "Home",
  toggleToTransition: () =>
    set((state) => ({ isTransitioning: !state.isTransitioning })),
  setRoutePath: (val) => set(() => ({ routePath: val })),
}));

export default usePageTransition;
