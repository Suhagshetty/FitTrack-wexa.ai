import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User, OnboardingData } from "@/types";

// ─── Auth Store ───────────────────────────────────────────────────────────────

interface AuthState {
  user: User | null;
  onboardingData: Partial<OnboardingData>;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  updateOnboarding: (data: Partial<OnboardingData>) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      onboardingData: {},
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: true }),
      updateOnboarding: (data) =>
        set((state) => ({
          onboardingData: { ...state.onboardingData, ...data },
        })),
      logout: () =>
        set({ user: null, onboardingData: {}, isAuthenticated: false }),
    }),
    { name: "fittrack-auth" }
  )
);

// ─── Theme Store ──────────────────────────────────────────────────────────────

interface ThemeState {
  theme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "light",
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
      setTheme: (theme) => set({ theme }),
    }),
    { name: "fittrack-theme" }
  )
);
