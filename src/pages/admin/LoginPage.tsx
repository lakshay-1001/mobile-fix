import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  ShieldCheck,
  LogIn,
} from "lucide-react";

import { getAdminCredentials, setAdminAuthenticated } from "../../lib/adminAuth";

export default function LoginPage() {
  const navigate = useNavigate();
  const adminCredentials = useMemo(() => getAdminCredentials(), []);

  const [email, setEmail] = useState(adminCredentials.email);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    try {
      setLoading(true);
      setError("");

      if (!adminCredentials.email || !adminCredentials.password) {
        setError("Admin credentials are not configured in the environment file.");
        return;
      }

      if (email.trim().toLowerCase() !== adminCredentials.email.toLowerCase()) {
        setError("Incorrect admin email.");
        return;
      }

      if (password !== adminCredentials.password) {
        setError("Incorrect admin password.");
        return;
      }

      setAdminAuthenticated(true);
      navigate("/admin/dashboard");
    } catch {
      setError("Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-[#faf5fb]
      px-6
      "
    >
      <div
        className="
        absolute
        top-20
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[500px]
        rounded-full
        bg-[#b7004f]/10
        blur-[140px]
        pointer-events-none
        "
      />

      <div
        className="
        relative
        w-full
        max-w-md
        bg-white
        rounded-[32px]
        border
        border-[#f1e8f3]
        shadow-xl
        overflow-hidden
        "
      >
        <div
          className="
          px-8
          py-8
          border-b
          border-[#f3edf5]
          text-center
          "
        >
          <div
            className="
            w-16
            h-16
            mx-auto
            mb-5
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
            <ShieldCheck size={28} />
          </div>

          <h1 className="text-3xl font-black">Admin Login</h1>

          <p className="text-gray-500 mt-2">
            Sign in to create customer invoices locally
          </p>
        </div>

        <div className="p-8">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>

              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                w-full
                h-14
                px-5
                rounded-2xl
                border
                border-[#ece7ef]
                focus:outline-none
                focus:ring-4
                focus:ring-[#b7004f]/10
                focus:border-[#b7004f]
                transition-all
                "
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="
                  w-full
                  h-14
                  px-5
                  pr-14
                  rounded-2xl
                  border
                  border-[#ece7ef]
                  focus:outline-none
                  focus:ring-4
                  focus:ring-[#b7004f]/10
                  focus:border-[#b7004f]
                  transition-all
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                  hover:text-[#b7004f]
                  transition-colors
                  "
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <button
              onClick={handleLogin}
              disabled={loading}
              className="
              w-full
              h-14
              rounded-2xl
              bg-gradient-to-r
              from-[#b7004f]
              to-[#8138b2]
              text-white
              font-semibold
              shadow-lg
              shadow-[#b7004f]/20
              hover:shadow-xl
              hover:shadow-[#b7004f]/30
              transition-all
              disabled:opacity-60
              disabled:cursor-not-allowed
              "
            >
              <span className="inline-flex items-center justify-center gap-2">
                <LogIn size={18} />
                {loading ? "Signing in..." : "Login to dashboard"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
