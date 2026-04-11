// IMS Portal Login Page — branded True East navy/gold
import { useState } from "react";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { useImsAuth } from "@/hooks/useImsAuth";
import { LOGO_WHITE } from "@/lib/imsData";

const NAVY = "#081C2E";
const GOLD = "#C49A28";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [, navigate] = useLocation();
  const { isAuthenticated, loading } = useImsAuth();

  const loginMutation = trpc.imsAuth.login.useMutation();
  const utils = trpc.useUtils();

  // If already authenticated, redirect to home
  if (!loading && isAuthenticated) {
    navigate("/", { replace: true });
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter your email and password");
      return;
    }

    try {
      const result = await loginMutation.mutateAsync({
        email: email.trim().toLowerCase(),
        password,
      });

      if (result.success) {
        await utils.imsAuth.me.invalidate();
        navigate("/", { replace: true });
      } else {
        setError(result.error ?? "Login failed");
      }
    } catch (err: any) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: NAVY }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(196,154,40,0.15) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(196,154,40,0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <img
            src={LOGO_WHITE}
            alt="True East Mining Company"
            className="mx-auto mb-4"
            style={{ height: "70px", objectFit: "contain" }}
          />
          <div
            className="text-xs font-bold tracking-[0.2em] uppercase mb-1"
            style={{ color: GOLD }}
          >
            Integrated Management System
          </div>
          <h1 className="text-white text-xl font-bold">IMS Document Portal</h1>
          <p className="text-white/40 text-xs mt-1">
            Sign in with your company credentials
          </p>
        </div>

        {/* Login Card */}
        <div
          className="rounded-lg border p-6"
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Error message */}
            {error && (
              <div
                className="text-xs font-medium px-3 py-2 rounded"
                style={{
                  backgroundColor: "rgba(239,68,68,0.15)",
                  color: "#fca5a5",
                  border: "1px solid rgba(239,68,68,0.3)",
                }}
              >
                {error}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.name@trueeast.com"
                autoComplete="email"
                className="w-full px-3 py-2.5 rounded text-sm outline-none transition-colors"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#fff",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = GOLD;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.12)";
                }}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                className="w-full px-3 py-2.5 rounded text-sm outline-none transition-colors"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#fff",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = GOLD;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.12)";
                }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full py-2.5 rounded text-sm font-bold tracking-wide uppercase transition-all"
              style={{
                backgroundColor: GOLD,
                color: NAVY,
                opacity: loginMutation.isPending ? 0.7 : 1,
              }}
            >
              {loginMutation.isPending ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            True East Mining Company · Integrated Management System
          </p>
          <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.15)" }}>
            Access is restricted to authorized personnel only.
            <br />
            Contact your administrator for account access.
          </p>
        </div>
      </div>
    </div>
  );
}
