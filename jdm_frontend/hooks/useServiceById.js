// hooks/useServiceById.js
import { useQuery } from "@tanstack/react-query";

const fetchServiceById = async (id) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  console.log("fetching service for id: ", id);

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_V1}/services/${id}/`, {
      cache: "no-store",
      signal: controller.signal,
    });

    clearTimeout(timeout);
    console.log("response for service id ", ": ", res);

    if (!res.ok) throw new Error("Failed to fetch service data");
    const data = await res.json();
    if (data.error) throw new Error(data.error);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    console.log("service data55555: ", data);
    return {
      ...data,
      image: data.image?.startsWith("http") ? data.image : `${baseUrl}${data.image}`,
    };
  } catch (err) {
    if (err.name === "AbortError") throw new Error("Request timed out");
    throw err;
  }
};

export const useServiceById = (id) =>
  // console.log("id in useServiceById: ", id)
  useQuery({
    queryKey: ["service", id],
    queryFn: () => fetchServiceById(id),
    enabled: !!id, // don't run query if id is undefined
  });
