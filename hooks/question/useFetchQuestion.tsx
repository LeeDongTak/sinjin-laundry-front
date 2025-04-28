"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface QuestionType {
  data?: {
    total: number;
    question: {
      id: number;
      question_title: string;
      question_name: string;
      is_secret: number;
      is_answer_done: number;
      is_delete: number;
      created_at: string;
    }[];
  };
  isSuccess: boolean;
  message: string;
}

const serverRequest = async (params: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}/question/${params}`
    );
    if (!res?.ok) throw res;
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const useFetchQuestion = (params: string) => {
  const { data } = useQuery<QuestionType>({
    queryKey: ["question", params],
    queryFn: () => serverRequest(params),
  });

  return { data };
};

export default useFetchQuestion;
