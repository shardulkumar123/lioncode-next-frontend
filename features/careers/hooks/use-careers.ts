import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/api-client";
import { Job } from "@/features/admin/types";
import { getJobs, saveJobs } from "@/features/admin/services/mock-data";

// Type definitions matching NestJS Career schema
export interface CareerBackendModel {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  desc: string;
  requirements: string[];
  createdAt: string;
}

// Convert backend schema to frontend Job schema
export const mapBackendToFrontendJob = (c: CareerBackendModel): Job & { salary: string; desc: string } => ({
  id: c.id,
  title: c.title,
  department: c.department,
  location: c.location,
  locationType: "Remote", // Default fallback
  type: c.type as Job["type"],
  salaryRange: c.salary,
  description: c.desc,
  requirements: c.requirements,
  benefits: [],
  status: "Active", // Default backend list displays active items
  createdAt: c.createdAt,
  salary: c.salary,
  desc: c.desc
});

// Convert frontend Job schema to backend schema
export const mapFrontendToBackendCareer = (j: Partial<Job>) => ({
  title: j.title,
  department: j.department,
  location: j.location,
  type: j.type,
  salary: j.salaryRange,
  desc: j.description,
  requirements: j.requirements || []
});

export const useCareers = () => {
  return useQuery<Job[], Error>({
    queryKey: ["careers"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get("/career") as CareerBackendModel[];
        if (Array.isArray(response)) {
          return response.map(mapBackendToFrontendJob);
        }
        throw new Error("Invalid response format");
      } catch (err) {
        console.warn("Backend /career API is offline. Using simulated localStorage database.", err);
        return getJobs();
      }
    }
  });
};

export const useCreateCareer = () => {
  const queryClient = useQueryClient();
  return useMutation<Job, Error, Partial<Job>>({
    mutationFn: async (newJob) => {
      try {
        const payload = mapFrontendToBackendCareer(newJob);
        const response = await axiosInstance.post("/career", payload) as CareerBackendModel;
        return mapBackendToFrontendJob(response);
      } catch (err) {
        console.warn("Backend /career API is offline. Creating in simulated local database.", err);
        // Fallback: update localStorage
        const jobs = getJobs();
        const createdJob: Job = {
          id: `job-${Date.now()}`,
          title: newJob.title || "",
          department: newJob.department || "",
          location: newJob.location || "",
          locationType: newJob.locationType || "Remote",
          type: newJob.type || "Full-time",
          salaryRange: newJob.salaryRange || "",
          description: newJob.description || "",
          requirements: newJob.requirements || [],
          benefits: newJob.benefits || [],
          status: newJob.status || "Active",
          createdAt: new Date().toISOString()
        };
        saveJobs([createdJob, ...jobs]);
        return createdJob;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["careers"] });
    }
  });
};

export const useUpdateCareer = () => {
  const queryClient = useQueryClient();
  return useMutation<Job, Error, { id: string; data: Partial<Job> }>({
    mutationFn: async ({ id, data }) => {
      try {
        const payload = mapFrontendToBackendCareer(data);
        const response = await axiosInstance.patch(`/career/${id}`, payload) as CareerBackendModel;
        return mapBackendToFrontendJob(response);
      } catch (err) {
        console.warn("Backend /career API is offline. Updating in simulated local database.", err);
        // Fallback: update localStorage
        const jobs = getJobs();
        const updated = jobs.map((j) =>
          j.id === id
            ? {
                ...j,
                ...data
              }
            : j
        );
        saveJobs(updated);
        return updated.find((j) => j.id === id) as Job;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["careers"] });
    }
  });
};

export const useDeleteCareer = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: async (id) => {
      try {
        await axiosInstance.delete(`/career/${id}`);
      } catch (err) {
        console.warn("Backend /career API is offline. Deleting from simulated local database.", err);
        // Fallback: update localStorage
        const jobs = getJobs();
        const updated = jobs.filter((j) => j.id !== id);
        saveJobs(updated);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["careers"] });
    }
  });
};
