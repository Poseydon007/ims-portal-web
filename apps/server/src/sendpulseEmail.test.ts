/**
 * Validates that the SendPulse API key is set and the API endpoint is reachable.
 * Does NOT send a real email — just checks auth by calling a lightweight endpoint.
 */
import { describe, it, expect } from "vitest";
import dotenv from "dotenv";
dotenv.config();

describe("SendPulse API key validation", () => {
  it("should have SENDPULSE_API_KEY set in environment", () => {
    const key = process.env.SENDPULSE_API_KEY;
    expect(key).toBeTruthy();
    expect(key!.length).toBeGreaterThan(10);
  });

  it("should authenticate successfully with the SendPulse API", async () => {
    const key = process.env.SENDPULSE_API_KEY;
    if (!key) {
      console.warn("SENDPULSE_API_KEY not set — skipping live test");
      return;
    }

    // Use a lightweight read endpoint to verify the key is valid
    const res = await fetch("https://api.sendpulse.com/smtp/emails?limit=1&offset=0", {
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
    });

    // 200 = authenticated, 401 = bad key
    expect(res.status).not.toBe(401);
    expect([200, 204, 400]).toContain(res.status); // 400 is acceptable (wrong params but auth passed)
  }, 15000);
});
