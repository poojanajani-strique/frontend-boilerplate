import { z } from "zod";
import { fetchJson } from "./api";
import { profileUpdateSchema, preferencesSchema } from "@/lib/validators/settings";

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  bio?: string;
  website?: string;
  company?: string;
  location?: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
};

export type UserPreferences = {
  theme: "light" | "dark" | "system";
  notifications: {
    email: boolean;
    push: boolean;
    marketing: boolean;
  };
  language: string;
  timezone: string;
};

const userProfileSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  bio: z.string().optional(),
  website: z.string().optional(),
  company: z.string().optional(),
  location: z.string().optional(),
  avatar: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const userPreferencesSchema = z.object({
  theme: z.enum(["light", "dark", "system"]),
  notifications: z.object({
    email: z.boolean(),
    push: z.boolean(),
    marketing: z.boolean(),
  }),
  language: z.string(),
  timezone: z.string(),
});

export async function getProfile(): Promise<UserProfile> {
  return fetchJson("/settings/profile", {
    method: "GET",
  }, userProfileSchema);
}

export async function updateProfile(data: z.infer<typeof profileUpdateSchema>): Promise<UserProfile> {
  return fetchJson("/settings/profile", {
    method: "PUT",
    body: JSON.stringify(data),
  }, userProfileSchema);
}

export async function getPreferences(): Promise<UserPreferences> {
  return fetchJson("/settings/preferences", {
    method: "GET",
  }, userPreferencesSchema);
}

export async function updatePreferences(data: z.infer<typeof preferencesSchema>): Promise<UserPreferences> {
  return fetchJson("/settings/preferences", {
    method: "PUT",
    body: JSON.stringify(data),
  }, userPreferencesSchema);
}
