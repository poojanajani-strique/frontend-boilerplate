import { z } from "zod";
import { env } from "@/lib/validators/env";

export async function fetchJson<T>(
  path: string,
  init?: RequestInit,
  schema?: z.ZodSchema<T>
): Promise<T> {
  const res = await fetch(`${env.NEXT_PUBLIC_API_URL}${path}`, {
    ...init,
    headers: { 
      "Content-Type": "application/json", 
      ...(init?.headers || {}) 
    },
    cache: "no-store",
  });
  
  if (!res.ok) {
    throw new Error(`API Error: ${res.status} ${await res.text()}`);
  }
  
  const data = await res.json();
  return schema ? schema.parse(data) : data;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public path: string
  ) {
    super(message);
    this.name = "ApiError";
  }
}
