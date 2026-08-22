import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { DiagnosePanel } from "./components/diagnose/DiagnosePanel";
import { TreatPanel } from "./components/treat/TreatPanel";
import { StudyPanel } from "./components/study/StudyPanel";
import { useApp } from "./context/AppContext";

export default function App() {
  const { mode } = useApp();

  return (
    <div className="mx-auto max-w-[620px] pt-5 pb-[60px] pl-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))]">
      <Header />
      <Tabs />
      {mode === "diagnose" && <DiagnosePanel />}
      {mode === "treat" && <TreatPanel />}
      {mode === "study" && <StudyPanel />}
      <footer className="mt-10 text-center font-mono text-[11px] text-ink-soft">
        Built for learning · session progress resets on reload
      </footer>
    </div>
  );
}
