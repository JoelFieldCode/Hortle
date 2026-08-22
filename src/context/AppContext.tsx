import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { AppMode } from "../types";

type AppContextValue = {
  mode: AppMode;
  setMode: (mode: AppMode) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<AppMode>("diagnose");
  const value = useMemo(() => ({ mode, setMode }), [mode]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
}
