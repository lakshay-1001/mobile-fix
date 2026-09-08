import { useEffect, useState } from "react";
import {
  FileText,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import InvoicePanel from "../../admin/components/InvoicePanel";
import { isAdminAuthenticated, setAdminAuthenticated } from "../../lib/adminAuth";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("invoice");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    setAdminAuthenticated(false);
    navigate("/admin");
  };

  if (!isAdminAuthenticated()) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#faf5fb] flex relative">
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

        <button onClick={() => setSidebarOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="
          fixed
          inset-0

          bg-black/40

          z-40

          lg:hidden
          "
        />
      )}

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
              Invoice workspace
            </p>
          </div>

          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 p-5 space-y-3">
          <MenuItem
            icon={<FileText size={18} />}
            title="Invoice"
            active={activeMenu === "invoice"}
            onClick={() => {
              setActiveMenu("invoice");
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
        {activeMenu === "invoice" && <InvoicePanel />}
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
