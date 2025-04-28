"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export interface InsertQuestionType {
  question_title: string;
  question_content: string;
  question_name: string;
  is_secret: boolean;
  secret_password?: string | null;
  user_email?: string | null;
  user_phone?: string | null;
  user_site?: string | null;
}

const serverRequest = async (insertQuestionType: InsertQuestionType) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}/question`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...insertQuestionType,
        }),
      }
    );

    if (!res?.ok) throw await res.json();
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const useInsertQuestion = () => {
  const queryClient = useQueryClient();
  const { push } = useRouter();
  const { mutate, data, error } = useMutation({
    mutationKey: ["insert_question"],
    mutationFn: serverRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["question"] });
      alert("질문이 등록되었습니다");
      push("/qna?page=1");
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  return { mutate, data, error };
};

export default useInsertQuestion;
