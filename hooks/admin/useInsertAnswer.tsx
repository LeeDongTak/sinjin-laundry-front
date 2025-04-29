"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const serverRequest = async ({
  id,
  content,
}: {
  id: string;
  content: string;
}) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}/answer/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answer_content: content,
        }),
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

const useInsertAnswer = () => {
  const queryClient = useQueryClient();
  const { push } = useRouter();
  const { mutate, data, error } = useMutation({
    mutationKey: ["insert_answer"],
    mutationFn: serverRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["question_detail"],
        exact: false,
      });
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

export default useInsertAnswer;
