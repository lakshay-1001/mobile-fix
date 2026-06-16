import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function SettingsPanel() {
  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const updatePassword = async () => {
    if (!password.trim()) return;

    setLoading(true);

    const { error } =
      await supabase.auth.updateUser({
        password,
      });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Password updated");

    setPassword("");
  };

  return (
    <div>
      <h2 className="text-3xl font-black mb-6">
        Settings
      </h2>

      <div className="bg-white rounded-3xl p-6 shadow-sm max-w-xl">

        <label className="block mb-2 font-medium">
          New Password
        </label>

        <input
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          className="
          w-full
          h-12
          border
          rounded-xl
          px-4
          "
        />

        <button
          onClick={updatePassword}
          disabled={loading}
          className="
          mt-5

          h-12
          px-6

          rounded-xl

          text-white

          bg-gradient-to-r
          from-[#b7004f]
          to-[#8138b2]
          "
        >
          {loading
            ? "Updating..."
            : "Update Password"}
        </button>

      </div>
    </div>
  );
}