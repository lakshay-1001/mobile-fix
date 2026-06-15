import { ReactNode } from "react";

import AnnouncementBar from "../../components/layout/AnnouncementBar";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
// import MobileBottomNav from "../../components/layout/MobileBottomNav";

interface Props {
  children: ReactNode;
}

export default function WebsiteLayout({
  children,
}: Props) {
  return (
    <>
      <AnnouncementBar />

      <Header />

      <main className="pt-[120px]">
        {children}
      </main>

      <Footer />

      {/* <MobileBottomNav /> */}
    </>
  );
}