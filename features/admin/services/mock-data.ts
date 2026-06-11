import {
  Job,
  Industry,
  Service,
  StaffMember,
  RolePermissions,
  ContactQuery,
  SystemSettings,
  Project,
} from "../types";
import {
  INITIAL_JOBS,
  INITIAL_INDUSTRIES,
  INITIAL_SERVICES,
  INITIAL_STAFF,
  INITIAL_ROLES,
  INITIAL_QUERIES,
  INITIAL_SETTINGS,
  INITIAL_PROJECTS,
} from "@/constants/admin-dummy";

const getStorageItem = <T>(key: string, defaultValue: T): T => {
  if (typeof window === "undefined") return defaultValue;
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (err) {
    console.error(`Error loading key "${key}" from localStorage:`, err);
    return defaultValue;
  }
};

const setStorageItem = <T>(key: string, value: T): void => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`Error writing key "${key}" to localStorage:`, err);
  }
};

export const getJobs = (): Job[] => getStorageItem("admin_jobs", INITIAL_JOBS);
export const saveJobs = (jobs: Job[]): void => setStorageItem("admin_jobs", jobs);

export const getIndustries = (): Industry[] =>
  getStorageItem("admin_industries", INITIAL_INDUSTRIES);
export const saveIndustries = (industries: Industry[]): void =>
  setStorageItem("admin_industries", industries);

export const getServices = (): Service[] => getStorageItem("admin_services", INITIAL_SERVICES);
export const saveServices = (services: Service[]): void =>
  setStorageItem("admin_services", services);

export const getStaff = (): StaffMember[] => getStorageItem("admin_staff", INITIAL_STAFF);
export const saveStaff = (staff: StaffMember[]): void => setStorageItem("admin_staff", staff);

export const getRoles = (): RolePermissions[] => getStorageItem("admin_roles", INITIAL_ROLES);
export const saveRoles = (roles: RolePermissions[]): void => setStorageItem("admin_roles", roles);

export const getQueries = (): ContactQuery[] => getStorageItem("admin_queries", INITIAL_QUERIES);
export const saveQueries = (queries: ContactQuery[]): void =>
  setStorageItem("admin_queries", queries);

export const getSettings = (): SystemSettings => getStorageItem("admin_settings", INITIAL_SETTINGS);
export const saveSettings = (settings: SystemSettings): void =>
  setStorageItem("admin_settings", settings);

export const getProjects = (): Project[] => getStorageItem("admin_projects", INITIAL_PROJECTS);
export const saveProjects = (projects: Project[]): void =>
  setStorageItem("admin_projects", projects);
