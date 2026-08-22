import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/AppContext";
import { DiagnoseProvider } from "./context/DiagnoseContext";
import { TreatProvider } from "./context/TreatContext";
import { StudyProvider } from "./context/StudyContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <DiagnoseProvider>
        <TreatProvider>
          <StudyProvider>
            <App />
          </StudyProvider>
        </TreatProvider>
      </DiagnoseProvider>
    </AppProvider>
  </StrictMode>,
);
