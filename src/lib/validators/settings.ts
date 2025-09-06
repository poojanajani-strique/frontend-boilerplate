import { z } from "zod";

export const profileUpdateSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
  website: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  company: z.string().max(100, "Company name must be less than 100 characters").optional(),
  location: z.string().max(100, "Location must be less than 100 characters").optional(),
});

export const preferencesSchema = z.object({
  theme: z.enum(["light", "dark", "system"]).default("system"),
  notifications: z.object({
    email: z.boolean().default(true),
    push: z.boolean().default(true),
    marketing: z.boolean().default(false),
  }),
  language: z.string().default("en"),
  timezone: z.string().default("UTC"),
});

export type ProfileUpdateValues = z.infer<typeof profileUpdateSchema>;
export type PreferencesValues = z.infer<typeof preferencesSchema>;
