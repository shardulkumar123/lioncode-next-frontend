/**
 * Global TypeScript Type Definitions.
 */

export interface User {
  id: string;
  email: string;
  name?: string;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface ApiError {
  message: string;
  statusCode?: number;
  error?: string;
}

export type Theme = "light" | "dark" | "system";
