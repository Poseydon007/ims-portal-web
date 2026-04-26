// Magic-link redemption page — handles /auth/magic?token=...
// Calls imsAuth.redeemMagicLink, which sets the ims_session cookie server-side
// and returns the user record. On success → redirect home; on failure → show
// the error with a "Back to login" link.
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { LOGO_WHITE } from "@/lib/imsData";

const NAVY = "#081C2E";
const GOLD = "#C49A28";

type Phase = "loading" | "success" | "error";

export default function MagicLinkRedeem() {
  const [, navigate] = useLocation();
  const [phase, setPhase] = useState<Phase>("loading");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const utils = trpc.useUtils();
  const redeem = trpc.imsAuth.redeemMagicLink.useMutation();
  const ranRef = useRef(false); // prevent React StrictMode double-fire from burning the token twice

  useEffect(() => {
    if (ranRef.current) return;
    ranRef.current = true;

    const params = new URLSearchParams(window.location.search);
    const token = params.get("token") ?? "";

    if (!token) {
      setErrorMsg("This sign-in link is missing its token.");
      setPhase("error");
      return;
    }

    redeem.mutateAsync({ token })
      .then(async () => {
        await utils.imsAuth.me.invalidate();
        setPhase("success");
        // Brief pause so the user sees the success state before redirect
        setTimeout(() => navigate("/", { replace: true }), 600);
      })
      .catch((err: unknown) => {
        const msg = err instanceof Error ? err.message : "This sign-in link could not be used.";
        setErrorMsg(msg);
        setPhase("error");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: NAVY }}
    >
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
          <h1 className="text-white text-xl font-bold">Magic-Link Sign-In</h1>
        </div>

        <div
          className="rounded-lg border p-6 text-center"
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          {phase === "loading" && (
            <>
              <div
                className="mx-auto mb-3 rounded-full"
                style={{
                  width: 36,
                  height: 36,
                  border: `3px solid rgba(255,255,255,0.15)`,
                  borderTopColor: GOLD,
                  animation: "spin 0.9s linear infinite",
                }}
              />
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                Verifying your sign-in link…
              </p>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </>
          )}

          {phase === "success" && (
            <>
              <div
                className="mx-auto mb-3 rounded-full flex items-center justify-center"
                style={{ width: 40, height: 40, backgroundColor: GOLD, color: NAVY, fontSize: 22, fontWeight: 700 }}
              >
                ✓
              </div>
              <p className="text-sm font-semibold text-white">Signed in successfully.</p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                Redirecting to the portal…
              </p>
            </>
          )}

          {phase === "error" && (
            <>
              <div
                className="text-xs font-medium px-3 py-2 rounded mb-4"
                style={{
                  backgroundColor: "rgba(239,68,68,0.15)",
                  color: "#fca5a5",
                  border: "1px solid rgba(239,68,68,0.3)",
                }}
              >
                {errorMsg}
              </div>
              <Link href="/login">
                <span
                  className="inline-block w-full py-2.5 rounded text-sm font-bold tracking-wide uppercase cursor-pointer"
                  style={{ backgroundColor: GOLD, color: NAVY }}
                >
                  Back to Login
                </span>
              </Link>
            </>
          )}
        </div>

        <div className="text-center mt-6">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            True East Mining Company · Integrated Management System
          </p>
        </div>
      </div>
    </div>
  );
}
