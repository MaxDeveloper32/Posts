import { useQuery } from "@tanstack/react-query";

type User = {
  id: number;
  username: string;
  email: string;
  image: string;
  accessToken: string;
};

export const getUser = async (): Promise<User | null> => {
  const res = await fetch("/api/auth/me", {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) throw new Error("Ошибка загрузки данных пользователя");
  return res.json();
};

export function useUserData() {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    staleTime: 60 * 1000,
    retry: false,
    refetchOnWindowFocus: false,
  });
}
