import { useQuery } from "@tanstack/react-query";

async function checkSession() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}/session`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const data = await res.json();
  return data;
}

const useSession = () => {
  const { data, refetch } = useQuery({
    queryKey: ["session"],
    queryFn: checkSession,
    staleTime: 1000 * 60 * 60 * 24, // 1일,
  });

  return { data, refetch };
};

export default useSession;
