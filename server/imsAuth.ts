// IMS Custom Auth Service — email/password authentication
import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { parse as parseCookieHeader } from "cookie";
import type { Request } from "express";
import {
  getImsUserByEmail,
  getImsUserById,
  createImsSession,
  getImsSessionByToken,
  deleteImsSession,
  updateImsUserLastSignedIn,
} from "./db";
import { ENV } from "./_core/env";
import type { ImsUser } from "../drizzle/schema";

const IMS_COOKIE_NAME = "ims_session";
const SESSION_EXPIRY_MS = 1000 * 60 * 60 * 24 * 7; // 7 days

function getSecret() {
  return new TextEncoder().encode(ENV.cookieSecret);
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function createSessionToken(user: ImsUser): Promise<{ token: string; expiresAt: Date }> {
  const expiresAt = new Date(Date.now() + SESSION_EXPIRY_MS);

  const token = await new SignJWT({
    userId: user.id,
    email: user.email,
    role: user.role,
    fullName: user.fullName,
  })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(Math.floor(expiresAt.getTime() / 1000))
    .sign(getSecret());

  // Store session in DB
  await createImsSession({
    userId: user.id,
    token,
    expiresAt,
  });

  return { token, expiresAt };
}

export async function verifySessionToken(token: string): Promise<{
  userId: number;
  email: string;
  role: string;
  fullName: string;
} | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret(), { algorithms: ["HS256"] });
    const { userId, email, role, fullName } = payload as Record<string, unknown>;

    if (!userId || !email || !role) return null;

    // Verify session still exists in DB (allows logout/invalidation)
    const session = await getImsSessionByToken(token);
    if (!session) return null;
    if (new Date(session.expiresAt) < new Date()) {
      await deleteImsSession(token);
      return null;
    }

    return {
      userId: userId as number,
      email: email as string,
      role: role as string,
      fullName: (fullName as string) ?? "",
    };
  } catch {
    return null;
  }
}

export async function authenticateImsRequest(req: Request): Promise<ImsUser | null> {
  const cookieHeader = req.headers.cookie;
  if (!cookieHeader) return null;

  const cookies = parseCookieHeader(cookieHeader);
  const token = cookies[IMS_COOKIE_NAME];
  if (!token) return null;

  const session = await verifySessionToken(token);
  if (!session) return null;

  const user = await getImsUserById(session.userId);
  if (!user || user.status !== "active") return null;

  return user;
}

export { IMS_COOKIE_NAME, SESSION_EXPIRY_MS };
