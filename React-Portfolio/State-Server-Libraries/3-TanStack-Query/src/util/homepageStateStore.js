import { create } from "zustand";

export const useStore = create((set) => ({
  toggleState: {
    toggleDesc: false,
    toggleNews: false,
    toggleTrophy: false,
  },

  toggleDescHandler: () =>
    set((prev) => ({
      toggleState: {
        ...prev.toggleState,
        toggleDesc: !prev.toggleState.toggleDesc,
      },
    })),

  toggleNewsHandler: () =>
    set((prev) => ({
      toggleState: {
        ...prev.toggleState,
        toggleNews: !prev.toggleState.toggleNews,
      },
    })),
  toggleTrophyHandler: () =>
    set((prev) => ({
      toggleState: {
        ...prev.toggleState,
        toggleTrophy: !prev.toggleState.toggleTrophy,
      },
    })),

  allViewHandler: () =>
    set((prev) => ({
      toggleState: {
        ...prev.toggleState,
        toggleDesc: true,
        toggleNews: true,
        toggleTrophy: true,
      },
    })),

  allDownHandler: () =>
    set((prev) => ({
      toggleState: {
        ...prev.toggleState,
        toggleDesc: false,
        toggleNews: false,
        toggleTrophy: false,
      },
    })),
}));
