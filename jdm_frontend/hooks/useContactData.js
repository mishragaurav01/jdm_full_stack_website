import { useQuery } from "@tanstack/react-query";

const fetchContactData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact/`);
  if (!res.ok) throw new Error("Failed to fetch contact data");
  return res.json();
};

export const useContactData = () => {
  return useQuery({
    queryKey: ["contact"],
    queryFn: fetchContactData,
  });
};
