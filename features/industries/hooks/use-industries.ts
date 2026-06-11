import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/api-client";
import { Industry } from "@/features/admin/types";
import { getIndustries, saveIndustries } from "@/features/admin/services/mock-data";

export interface ServicesDomainBackendModel {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  icon: string;
  color: string;
  stats: { value: string; label: string };
  solutions: string[];
  createdAt: string;
}

export const mapBackendToFrontendIndustry = (s: ServicesDomainBackendModel): Industry => ({
  id: s.id,
  name: s.name,
  slug: s.id,
  description: s.desc,
  desc: s.desc,
  icon: s.icon,
  status: "Active",
  createdAt: s.createdAt || new Date().toISOString(),
  tagline: s.tagline,
  color: s.color,
  stats: s.stats,
  solutions: s.solutions,
});

export const mapFrontendToBackendIndustry = (ind: Partial<Industry>) => ({
  id: ind.slug || ind.id || `ind-${Date.now()}`,
  name: ind.name || "",
  tagline: ind.tagline || "Solutions for your business",
  desc: ind.description || "",
  icon: ind.icon || "Globe",
  color: ind.color || "from-indigo-600 to-cyan-500",
  stats: ind.stats || { value: "100%", label: "Satisfaction" },
  solutions: ind.solutions || [],
});

export const useIndustries = () => {
  return useQuery<Industry[], Error>({
    queryKey: ["industries"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get("/services-domain") as ServicesDomainBackendModel[];
        if (Array.isArray(response)) {
          return response.map(mapBackendToFrontendIndustry);
        }
        throw new Error("Invalid response format");
      } catch (err: unknown) {
        console.warn("Backend /services-domain API is offline. Using simulated localStorage database.", err);
        return getIndustries();
      }
    }
  });
};

export const useCreateIndustry = () => {
  const queryClient = useQueryClient();
  return useMutation<Industry, Error, Partial<Industry>>({
    mutationFn: async (newIndustry) => {
      try {
        const payload = mapFrontendToBackendIndustry(newIndustry);
        const response = await axiosInstance.post("/services-domain", payload) as ServicesDomainBackendModel;
        return mapBackendToFrontendIndustry(response);
      } catch (err: unknown) {
        console.warn("Backend /services-domain API is offline. Creating in simulated local database.", err);
        const industries = getIndustries();
        const createdIndustry: Industry = {
          id: newIndustry.id || `ind-${Date.now()}`,
          name: newIndustry.name || "",
          slug: newIndustry.slug || "",
          description: newIndustry.description || "",
          icon: newIndustry.icon || "Globe",
          status: newIndustry.status || "Active",
          createdAt: new Date().toISOString(),
          tagline: newIndustry.tagline,
          color: newIndustry.color,
          stats: newIndustry.stats,
          solutions: newIndustry.solutions
        };
        saveIndustries([...industries, createdIndustry]);
        return createdIndustry;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["industries"] });
    }
  });
};

export const useUpdateIndustry = () => {
  const queryClient = useQueryClient();
  return useMutation<Industry, Error, { id: string; data: Partial<Industry> }>({
    mutationFn: async ({ id, data }) => {
      try {
        const payload = mapFrontendToBackendIndustry(data);
        const response = await axiosInstance.patch(`/services-domain/${id}`, payload) as ServicesDomainBackendModel;
        return mapBackendToFrontendIndustry(response);
      } catch (err: unknown) {
        console.warn("Backend /services-domain API is offline. Updating in simulated local database.", err);
        const industries = getIndustries();
        const updated = industries.map((ind) =>
          ind.id === id
            ? {
                ...ind,
                ...data
              }
            : ind
        );
        saveIndustries(updated);
        return updated.find((ind) => ind.id === id) as Industry;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["industries"] });
    }
  });
};

export const useDeleteIndustry = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: async (id) => {
      try {
        await axiosInstance.delete(`/services-domain/${id}`);
      } catch (err: unknown) {
        console.warn("Backend /services-domain API is offline. Deleting from simulated local database.", err);
        const industries = getIndustries();
        const updated = industries.filter((ind) => ind.id !== id);
        saveIndustries(updated);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["industries"] });
    }
  });
};
