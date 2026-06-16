import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    } catch (err) {
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
      "
    >
      <div
        className="
        w-full
        max-w-md
        bg-white
        p-10
        rounded-3xl
        shadow-xl
        "
      >
        <h1
          className="
          text-3xl
          font-black
          mb-8
          "
        >
          Admin Login
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
            w-full
            h-14
            px-5
            rounded-xl
            border
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="
            w-full
            h-14
            px-5
            rounded-xl
            border
            "
          />

          {error && (
            <div className="text-red-500 text-sm">
              {error}
            </div>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="
            w-full
            h-14
            rounded-xl
            text-white
            bg-gradient-to-r
            from-[#b7004f]
            to-[#8138b2]
            disabled:opacity-50
            "
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>

        </div>
      </div>
    </div>
  );
}