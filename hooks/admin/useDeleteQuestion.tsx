"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const serverRequest = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}/question/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await res.json();
    if (!res?.ok) throw res.body;
    return data;
  } catch (error) {
    throw error;
  }
};

const useDeleteQuestion = () => {
  const queryClient = useQueryClient();
  const { back, push } = useRouter();
  const { mutate, data, error } = useMutation({
    mutationKey: ["delete_question"],
    mutationFn: serverRequest,
    onSuccess: async () => {
      back();
      await new Promise((r) => setTimeout(r, 100));
      queryClient.invalidateQueries({ queryKey: ["question"] });
    },
    onError: (error) => {
      if (error.message.includes("Unexpected token")) {
        alert("로그인이 되어있지 않습니다");
        push("/admin");
      } else {
        alert(error.message);
      }
    },
  });

  return { mutate, data, error };
};

export default useDeleteQuestion;
