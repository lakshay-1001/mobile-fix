import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  ShieldCheck,
  LogIn,
} from "lucide-react";

import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const { error } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (error) {
        setError(error.message);
        return;
      }

      navigate("/admin/dashboard");
    } catch {
      setError("Login failed");
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
      {/* Background Glow */}

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
        {/* Header */}

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

          <h1
            className="
            text-3xl
            font-black
            "
          >
            Admin Login
          </h1>

          <p
            className="
            text-gray-500
            mt-2
            "
          >
            Sign in to manage products,
            pricing and reviews
          </p>
        </div>

        {/* Form */}

        <div className="p-8">

          <div className="space-y-5">

            {/* Email */}

            <div>
              <label
                className="
                block

                text-sm
                font-semibold

                mb-2
                "
              >
                Email
              </label>

              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
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

            {/* Password */}

            <div>
              <label
                className="
                block

                text-sm
                font-semibold

                mb-2
                "
              >
                Password
              </label>

              <div className="relative">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
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
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
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
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>
            </div>

            {/* Error */}

            {error && (
              <div
                className="
                p-4

                rounded-2xl

                bg-red-50

                border
                border-red-200

                text-red-600
                text-sm
                "
              >
                {error}
              </div>
            )}

            {/* Login Button */}

            <button
              onClick={handleLogin}
              disabled={loading}
              className="
              w-full

              h-14

              rounded-2xl

              flex
              items-center
              justify-center
              gap-3

              font-semibold

              text-white

              bg-gradient-to-r
              from-[#b7004f]
              via-[#c2185b]
              to-[#8138b2]

              shadow-lg
              shadow-[#b7004f]/20

              hover:shadow-xl
              hover:shadow-[#b7004f]/30

              disabled:opacity-50
              disabled:cursor-not-allowed

              transition-all
              duration-300
              "
            >
              <LogIn size={18} />

              {loading
                ? "Signing In..."
                : "Login"}
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}