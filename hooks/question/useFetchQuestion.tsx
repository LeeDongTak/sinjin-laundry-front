"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface QuestionType {
  id: number;
  question_title: string;
  question_name: string;
  is_secret: number;
  is_answer_done: number;
  is_delete: number;
  created_at: string;
}

const useFetchQuestion = (params: string) => {
  const { data } = useQuery<QuestionType[]>({
    queryKey: ["question", params],
    queryFn: async () => {
      try {
        const res = await axios(
          `${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}/api/question/${params}`
        );
        return res.data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  return { data };
};

export default useFetchQuestion;
