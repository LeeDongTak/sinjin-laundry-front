"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import useSession from "./useSession";

const serverRequest = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}/admin-signout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    if (!res?.ok) throw await res.json();
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const useAdminSignout = () => {
  const { refetch } = useSession();
  const { push } = useRouter();
  const { mutate, data, error } = useMutation({
    mutationKey: ["admin-signout"],
    mutationFn: serverRequest,
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return { mutate, data, error };
};

export default useAdminSignout;
