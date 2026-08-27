import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

import AnnouncementBar from "../../components/layout/AnnouncementBar";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
// import MobileBottomNav from "../../components/layout/MobileBottomNav";
import FloatingWhatsAppButton from "../../components/common/FloatingWhatsAppButton";

interface Props {
  children: ReactNode;
}

export default function WebsiteLayout({
  children,
}: Props) {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const targetId = decodeURIComponent(location.hash.slice(1));
    const animationFrame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: "start" });
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [location.hash, location.pathname]);

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-2 z-[100] -translate-y-20 rounded-md bg-white px-4 py-2 font-semibold text-[#b7004f] shadow-lg transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>
      <AnnouncementBar />

      <Header />

      <main id="main-content" className="pt-[104px] sm:pt-[122px]">
        {children}
      </main>

      <Footer />
      <FloatingWhatsAppButton />
      {/* <MobileBottomNav /> */}
    </>
  );
}
