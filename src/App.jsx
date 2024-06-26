import CreateIdentityPage from "./pages/CreateIdentityPage";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import WhatToDo from "./pages/WhatToDo";
import CreateContract from "./pages/CreateContract";
import ContractDraft from "./pages/ContractDraft";
import ContractPreview from "./pages/ContractPreview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreateIdentityPage />} />
        <Route path="/choice" element={<WhatToDo />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="contract-draft" element={<ContractDraft />} />
          <Route path="contract-preview" element={<ContractPreview />} />
          <Route path="create-contract" element={<CreateContract />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
