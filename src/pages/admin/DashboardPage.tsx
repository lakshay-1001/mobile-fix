import {
  useEffect,
  useState,
} from "react";

import {
  LayoutDashboard,
  Smartphone,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { supabase } from "../../lib/supabase";

import DashboardStats from "../../admin/components/DashboardStats";
import ProductsPanel from "../../admin/components/ProductsPanel";
import ReviewsPanel from "../../admin/components/ReviewsPanel";
import SettingsPanel from "../../admin/components/SettingsPanel";

export default function DashboardPage() {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] =
    useState("products");

  const [stats, setStats] =
    useState({
      products: 0,
      parts: 0,
      reviews: 0,
      approved: 0,
    });

  useEffect(() => {
    checkSession();
    loadStats();
  }, []);

  const checkSession =
    async () => {
      const {
        data: { session },
      } =
        await supabase.auth.getSession();

      if (!session) {
        navigate("/admin");
      }
    };

  const loadStats =
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
    };

  const handleLogout =
    async () => {
      await supabase.auth.signOut();

      navigate("/admin");
    };

  return (
    <div className="min-h-screen bg-[#faf5fb] flex">

      <aside
        className="
        w-[280px]
        bg-white
        border-r
        border-[#f1edf3]

        flex
        flex-col
        "
      >
        <div
            className="
            p-6

            border-b
            border-[#f1edf3]
            "
            >
          <h1 className="text-2xl font-black text-[#b7004f]">
            AZAN Admin
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            Repair Management
          </p>
        </div>

        <div className="flex-1 p-5 space-y-3">

          <MenuItem
            icon={
              <LayoutDashboard
                size={18}
              />
            }
            title="Dashboard"
            active={
              activeMenu ===
              "dashboard"
            }
            onClick={() =>
              setActiveMenu(
                "dashboard"
              )
            }
          />

          <MenuItem
            icon={
              <Smartphone
                size={18}
              />
            }
            title="Products"
            active={
              activeMenu ===
              "products"
            }
            onClick={() =>
              setActiveMenu(
                "products"
              )
            }
          />

          <MenuItem
            icon={
              <MessageSquare
                size={18}
              />
            }
            title="Reviews"
            active={
              activeMenu ===
              "reviews"
            }
            onClick={() =>
              setActiveMenu(
                "reviews"
              )
            }
          />

          <MenuItem
            icon={
              <Settings
                size={18}
              />
            }
            title="Settings"
            active={
              activeMenu ===
              "settings"
            }
            onClick={() =>
              setActiveMenu(
                "settings"
              )
            }
          />

        </div>

        <div className="p-4 border-t">
          <button
            onClick={
              handleLogout
            }
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
            "
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

      </aside>

      <main className="flex-1 p-8">

        {activeMenu ===
          "dashboard" && (
          <DashboardStats
            products={
              stats.products
            }
            parts={
              stats.parts
            }
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