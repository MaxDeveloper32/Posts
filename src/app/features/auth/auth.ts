import { useMutation, useQueryClient } from "@tanstack/react-query";


interface LoginData {
  username: string;
  password: string;
  expiresInMins?: number;
}

interface LoginResponse {
  id: number;
  username: string;
  email: string;
  image: string;
  accessToken: string;
}

export const fetchAuth = async (loginData: LoginData): Promise<LoginResponse> => {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
    credentials: "include",
  });
  if (!res.ok) throw new Error(`Ошибка загрузки авторизации `);
  return res.json();
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fetchAuth,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};
