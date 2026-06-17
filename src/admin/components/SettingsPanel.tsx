import { useState } from "react";
import {
  Lock,
  ShieldCheck,
  Save,
  Eye,
  EyeOff,
} from "lucide-react";

import { supabase } from "../../lib/supabase";

export default function SettingsPanel() {
  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const updatePassword = async () => {
    if (!password.trim()) return;

    try {
      setLoading(true);

      const { error } =
        await supabase.auth.updateUser({
          password,
        });

      if (error) {
        alert(error.message);
        return;
      }

      alert(
        "Password updated successfully"
      );

      setPassword("");
    } catch (err) {
      alert(
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <h2
          className="
          text-4xl
          font-black
          tracking-tight
          "
        >
          Settings
        </h2>

        <p
          className="
          text-gray-500
          mt-2
          "
        >
          Manage administrator account
          and security settings.
        </p>
      </div>

      {/* Security Card */}

      <div
        className="
        bg-white

        rounded-[28px]

        border
        border-[#f0e9f3]

        shadow-sm

        overflow-hidden
        "
      >
        {/* Card Header */}

        <div
          className="
          px-8
          py-6

          border-b
          border-[#f3edf5]

          flex
          items-center
          gap-4
          "
        >
          <div
            className="
            w-14
            h-14

            rounded-2xl

            bg-gradient-to-r
            from-[#b7004f]
            to-[#8138b2]

            text-white

            flex
            items-center
            justify-center
            "
          >
            <ShieldCheck size={24} />
          </div>

          <div>
            <h3
              className="
              text-xl
              font-bold
              "
            >
              Account Security
            </h3>

            <p className="text-sm text-gray-500">
              Update your login password
            </p>
          </div>
        </div>

        {/* Content */}

        <div className="p-8">

          <label
            className="
            block
            mb-3

            text-sm
            font-semibold
            "
          >
            New Password
          </label>

          <div
            className="
            h-14

            rounded-2xl

            border
            border-[#ece7ef]

            flex
            items-center

            px-4
            gap-3

            focus-within:ring-4
            focus-within:ring-[#b7004f]/10
            focus-within:border-[#b7004f]

            transition-all
            "
          >
            <Lock
              size={18}
              className="text-gray-400 shrink-0"
            />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Enter new password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="
              flex-1

              bg-transparent

              outline-none

              placeholder:text-gray-400
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="
              text-gray-400

              hover:text-[#b7004f]

              transition-colors
              "
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          <p
            className="
            mt-3

            text-sm
            text-gray-500
            "
          >
            Use a strong password with
            letters, numbers and special
            characters.
          </p>

          <button
            onClick={updatePassword}
            disabled={
              loading ||
              !password.trim()
            }
            className="
            mt-6
            w-full
            h-12

            px-6

            rounded-2xl

            flex
            items-center
            justify-center
            gap-2

            font-semibold

            text-white

            bg-gradient-to-r
            from-[#b7004f]
            to-[#8138b2]

            disabled:opacity-50
            disabled:cursor-not-allowed

            shadow-lg
            shadow-[#b7004f]/20

            hover:shadow-xl
            hover:shadow-[#b7004f]/30

            transition-all
            duration-300
            "
          >
            <Save size={18} />

            {loading
              ? "Updating..."
              : "Update Password"}
          </button>

        </div>
      </div>

    </div>
  );
}