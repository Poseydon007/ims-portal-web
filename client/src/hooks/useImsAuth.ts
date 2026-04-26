// IMS Custom Auth Hook — provides current user state from email/password login
import { trpc } from "@/lib/trpc";
import { useCallback, useMemo } from "react";
import type { Role } from "@shared/permissions";

export type ImsUserInfo = {
  id: number;
  email: string;
  fullName: string;
  employeeId: string | null;
  role: Role;
  department: string | null;
  position: string | null;
  status: string;
};

export function useImsAuth() {
  const utils = trpc.useUtils();

  const meQuery = trpc.imsAuth.me.useQuery(undefined, {
    retry: false,
    refetchOnWindowFocus: false,
  });

  const logoutMutation = trpc.imsAuth.logout.useMutation({
    onSuccess: () => {
      utils.imsAuth.me.setData(undefined, null);
    },
  });

  const logout = useCallback(async () => {
    try {
      await logoutMutation.mutateAsync();
    } catch {
      // ignore
    } finally {
      utils.imsAuth.me.setData(undefined, null);
      await utils.imsAuth.me.invalidate();
    }
  }, [logoutMutation, utils]);

  const state = useMemo(() => ({
    user: (meQuery.data as ImsUserInfo | null) ?? null,
    loading: meQuery.isLoading || logoutMutation.isPending,
    error: meQuery.error ?? logoutMutation.error ?? null,
    isAuthenticated: Boolean(meQuery.data),
  }), [
    meQuery.data,
    meQuery.error,
    meQuery.isLoading,
    logoutMutation.error,
    logoutMutation.isPending,
  ]);

  return {
    ...state,
    refresh: () => meQuery.refetch(),
    logout,
  };
}
