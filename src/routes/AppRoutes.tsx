import { lazy, Suspense, type ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SEO from "../components/seo/SEO";

const TermsPage = lazy(() => import("../pages/TermsPage"));
const PrivacyPage = lazy(() => import("../pages/PrivacyPage"));
const WarrantyPage = lazy(() => import("../pages/WarrantyPage"));
const StoreLocatorPage = lazy(() => import("../pages/StoreLocatorPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const ServicesIndexPage = lazy(() => import("../pages/ServicesIndexPage"));
const ServiceLandingPage = lazy(() => import("../pages/ServiceLandingPage"));
const BlogIndexPage = lazy(() => import("../pages/BlogIndexPage"));
const BlogArticlePage = lazy(() => import("../pages/BlogArticlePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const LoginPage = lazy(() => import("../pages/admin/LoginPage"));
const DashboardPage = lazy(() => import("../pages/admin/DashboardPage"));

function SuspendedPage({ children }: { children: ReactNode }) {
  return (
    <Suspense
      fallback={
        <div role="status" className="flex min-h-[50vh] items-center justify-center px-5 text-[#5a4045]">
          Loading page…
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

function AdminSEO({ path, title }: { path: string; title: string }) {
  return <SEO title={title} description="Azan Mobile Fix administration." path={path} noIndex />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/terms" element={<SuspendedPage><TermsPage /></SuspendedPage>} />
      <Route path="/privacy" element={<SuspendedPage><PrivacyPage /></SuspendedPage>} />
      <Route path="/warranty" element={<SuspendedPage><WarrantyPage /></SuspendedPage>} />
      <Route path="/locations" element={<SuspendedPage><StoreLocatorPage /></SuspendedPage>} />
      <Route path="/about" element={<SuspendedPage><AboutPage /></SuspendedPage>} />
      <Route path="/contact" element={<SuspendedPage><ContactPage /></SuspendedPage>} />
      <Route path="/services" element={<SuspendedPage><ServicesIndexPage /></SuspendedPage>} />
      <Route path="/services/:slug" element={<SuspendedPage><ServiceLandingPage /></SuspendedPage>} />
      <Route path="/blog" element={<SuspendedPage><BlogIndexPage /></SuspendedPage>} />
      <Route path="/blog/:slug" element={<SuspendedPage><BlogArticlePage /></SuspendedPage>} />

      <Route
        path="/admin"
        element={<SuspendedPage><AdminSEO path="/admin" title="Admin Login" /><LoginPage /></SuspendedPage>}
      />
      <Route
        path="/admin/dashboard"
        element={<SuspendedPage><AdminSEO path="/admin/dashboard" title="Admin Dashboard" /><DashboardPage /></SuspendedPage>}
      />
      <Route path="*" element={<SuspendedPage><NotFoundPage /></SuspendedPage>} />
    </Routes>
  );
}
