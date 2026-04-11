import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { User, ImsUser } from "../../drizzle/schema";
import { sdk } from "./sdk";
import { authenticateImsRequest } from "../imsAuth";

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: User | null;
  imsUser: ImsUser | null;
};

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  let user: User | null = null;
  let imsUser: ImsUser | null = null;

  // Try Manus OAuth first (for admin/system routes)
  try {
    user = await sdk.authenticateRequest(opts.req);
  } catch {
    user = null;
  }

  // Try IMS custom auth (email/password)
  try {
    imsUser = await authenticateImsRequest(opts.req);
  } catch {
    imsUser = null;
  }

  return {
    req: opts.req,
    res: opts.res,
    user,
    imsUser,
  };
}
