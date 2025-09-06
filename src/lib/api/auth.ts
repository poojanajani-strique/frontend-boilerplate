import { z } from "zod";
import { fetchJson } from "./api";
import { loginSchema, registerSchema, profileSchema } from "@/lib/validators/auth";

export type LoginResponse = {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  bio?: string;
  website?: string;
  createdAt: string;
  updatedAt: string;
};

const loginResponseSchema = z.object({
  user: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
  }),
  token: z.string(),
});

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  bio: z.string().optional(),
  website: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export async function login(data: z.infer<typeof loginSchema>): Promise<LoginResponse> {
  return fetchJson("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  }, loginResponseSchema);
}

export async function register(data: z.infer<typeof registerSchema>): Promise<LoginResponse> {
  return fetchJson("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  }, loginResponseSchema);
}

export async function getProfile(): Promise<User> {
  return fetchJson("/auth/profile", {
    method: "GET",
  }, userSchema);
}

export async function updateProfile(data: z.infer<typeof profileSchema>): Promise<User> {
  return fetchJson("/auth/profile", {
    method: "PUT",
    body: JSON.stringify(data),
  }, userSchema);
}

export async function logout(): Promise<void> {
  return fetchJson("/auth/logout", {
    method: "POST",
  });
}
