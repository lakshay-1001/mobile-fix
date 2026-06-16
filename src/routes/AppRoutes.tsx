import {
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "../pages/HomePage";

import TermsPage from "../pages/TermsPage";
import PrivacyPage from "../pages/PrivacyPage";
import WarrantyPage from "../pages/WarrantyPage";
import StoreLocatorPage from "../pages/StoreLocatorPage";

import LoginPage from "../pages/admin/LoginPage";

import Header from "../components/layout/Header";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import TestPage from "../pages/admin/TestPage";
import DashboardPage from "../pages/admin/DashboardPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Website */}

      <Route
        path="/"
        element={
          <>
            <AnnouncementBar />
            <Header />

            <main className="pt-[120px]">
              <HomePage />
            </main>
          </>
        }
      />

      <Route
        path="/terms"
        element={<TermsPage />}
      />

      <Route
        path="/privacy"
        element={<PrivacyPage />}
      />

      <Route
        path="/warranty"
        element={<WarrantyPage />}
      />

      <Route
        path="/locations"
        element={<StoreLocatorPage />}
      />

      {/* Admin */}

      <Route
        path="/admin"
        element={<LoginPage />}
      />

      <Route
        path="/admin/dashboard"
        element={<DashboardPage />}
      />
      
      <Route
        path="/admin/test"
        element={<TestPage />}
      />
    </Routes>
  );
}