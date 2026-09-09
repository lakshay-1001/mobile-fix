import { useCallback, useEffect, useState } from "react";
import {
  LayoutDashboard,
  Smartphone,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

import DashboardStats from "../../admin/components/DashboardStats";
import ProductsPanel from "../../admin/components/ProductsPanel";
import ReviewsPanel from "../../admin/components/ReviewsPanel";
import SettingsPanel from "../../admin/components/SettingsPanel";

export default function DashboardPage() {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState("dashboard");

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [stats, setStats] =
    useState({
      products: 0,
      parts: 0,
      reviews: 0,
      approved: 0,
    });

  const checkSession = useCallback(
    async () => {
      const {
        data: { session },
      } =
        await supabase.auth.getSession();

      if (!session) {
        navigate("/admin");
      }
    }, [navigate]);

  const loadStats = useCallback(
    async () => {
      const [
        products,
        parts,
        reviews,
        approved,
      ] = await Promise.all([
        supabase
          .from("products")
          .select("*", {
            count: "exact",
            head: true,
          }),

        supabase
          .from("product_parts")
          .select("*", {
            count: "exact",
            head: true,
          }),

        supabase
          .from("reviews")
          .select("*", {
            count: "exact",
            head: true,
          }),

        supabase
          .from("reviews")
          .select("*", {
            count: "exact",
            head: true,
          })
          .eq("approved", true),
      ]);

      setStats({
        products:
          products.count || 0,
        parts:
          parts.count || 0,
        reviews:
          reviews.count || 0,
        approved:
          approved.count || 0,
      });
    }, []);

  useEffect(() => {
    void checkSession();
    const statsTimer = window.setTimeout(() => {
      void loadStats();
    }, 0);

    return () => window.clearTimeout(statsTimer);
  }, [checkSession, loadStats]);

  const handleLogout =
    async () => {
      await supabase.auth.signOut();
      navigate("/admin");
    };

  return (
    <div className="min-h-screen bg-[#faf5fb] flex relative">

      {/* Mobile Header */}

      <div
        className="
        lg:hidden

        fixed
        top-0
        left-0
        right-0

        h-16

        bg-white

        border-b
        border-[#f1edf3]

        flex
        items-center
        justify-between

        px-5

        z-40
        "
      >
        <h1
          className="
          text-xl
          font-black
          text-[#b7004f]
          "
        >
          Azan Admin
        </h1>

        <button
          onClick={() =>
            setSidebarOpen(true)
          }
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay */}

      {sidebarOpen && (
        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          className="
          fixed
          inset-0

          bg-black/40

          z-40

          lg:hidden
          "
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
        fixed
        lg:static

        top-0
        left-0

        h-screen

        w-[280px]

        bg-white

        border-r
        border-[#f1edf3]

        flex
        flex-col

        z-50

        transition-transform
        duration-300

        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
        `}
      >
        <div
          className="
          p-6

          border-b
          border-[#f1edf3]

          flex
          items-center
          justify-between
          "
        >
          <div>
            <h1 className="text-2xl font-black text-[#b7004f]">
              Azan Admin
            </h1>

            <p className="text-gray-500 text-sm mt-1">
              Device Service Management
            </p>
          </div>

          <button
            className="lg:hidden"
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 p-5 space-y-3">

          <MenuItem
            icon={
              <LayoutDashboard size={18} />
            }
            title="Dashboard"
            active={
              activeMenu ===
              "dashboard"
            }
            onClick={() => {
              setActiveMenu(
                "dashboard"
              );
              setSidebarOpen(false);
            }}
          />

          <MenuItem
            icon={
              <Smartphone size={18} />
            }
            title="Products"
            active={
              activeMenu ===
              "products"
            }
            onClick={() => {
              setActiveMenu(
                "products"
              );
              setSidebarOpen(false);
            }}
          />

          <MenuItem
            icon={
              <MessageSquare size={18} />
            }
            title="Reviews"
            active={
              activeMenu ===
              "reviews"
            }
            onClick={() => {
              setActiveMenu(
                "reviews"
              );
              setSidebarOpen(false);
            }}
          />

          <MenuItem
            icon={
              <Settings size={18} />
            }
            title="Settings"
            active={
              activeMenu ===
              "settings"
            }
            onClick={() => {
              setActiveMenu(
                "settings"
              );
              setSidebarOpen(false);
            }}
          />

        </div>

        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="
            w-full
            h-12

            rounded-xl

            flex
            items-center
            justify-center
            gap-2

            text-red-500

            hover:bg-red-50

            transition-all
            "
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}

      <main
        className="
        flex-1

        p-4
        md:p-6
        lg:p-8

        pt-20
        lg:pt-8
        "
      >
        {activeMenu ===
          "dashboard" && (
          <DashboardStats
            products={
              stats.products
            }
            parts={stats.parts}
            reviews={
              stats.reviews
            }
            approved={
              stats.approved
            }
          />
        )}

        {activeMenu ===
          "products" && (
          <ProductsPanel />
        )}

        {activeMenu ===
          "reviews" && (
          <ReviewsPanel />
        )}

        {activeMenu ===
          "settings" && (
          <SettingsPanel />
        )}
      </main>
    </div>
  );
}

interface MenuProps {
  icon: React.ReactNode;
  title: string;
  active: boolean;
  onClick: () => void;
}

function MenuItem({
  icon,
  title,
  active,
  onClick,
}: MenuProps) {
  return (
    <button
      onClick={onClick}
      className={`
      w-full

      h-[54px]

      px-5

      rounded-2xl

      flex
      items-center

      transition-all
      duration-300

      ${
        active
          ? `
            bg-gradient-to-r
            from-[#b7004f]
            to-[#8138b2]

            text-white

            shadow-lg
            shadow-[#b7004f]/20
          `
          : `
            text-[#2d2d2d]

            hover:bg-[#f7f1f6]
          `
      }
      `}
    >
      <div
        className="
        w-8

        flex
        justify-center
        items-center

        shrink-0
        "
      >
        {icon}
      </div>

      <span
        className="
        font-medium
        text-[15px]
        "
      >
        {title}
      </span>
    </button>
  );
}
