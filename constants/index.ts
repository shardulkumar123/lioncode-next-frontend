/**
 * Global application constants.
 */

export const APP_CONFIG = {
  name: "LionCode",
  description: "High-performance software and AI solutions.",
  baseUrl: typeof window !== "undefined" ? window.location.origin : "http://localhost:3000",
} as const;

export const API_ROUTES = {
  auth: {
    login: "/auth/login",
    signup: "/auth/signup",
    logout: "/auth/logout",
    me: "/auth/me",
  },
  users: {
    profile: "/users/profile",
  },
} as const;

export const LOCAL_STORAGE_KEYS = {
  token: "lioncode_auth_token",
  theme: "lioncode_theme",
} as const;

export const ERROR_MESSAGES = {
  generic: "Something went wrong. Please try again later.",
  network: "Network error. Please check your internet connection.",
  unauthorized: "You are not authorized to access this resource. Please sign in.",
} as const;
