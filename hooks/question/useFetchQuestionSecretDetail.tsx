"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export interface QuestionDetailType {
  data?: {
    id: number;
    question_title: string;
    question_content: string;
    question_name: string;
    is_secret: number;
    secret_password: null;
    is_answer_done: number;
    is_delete: number;
    created_at: string;
    updated_at: string;
    answer: {
      id: number;
      question_id: number;
      answer_title: string;
      answer_content: string;
      is_delete: string;
      created_at: string;
      admin_name: string;
    } | null;
  };
  isSuccess: boolean;
  message: string;
}

const serverRequest = async ({ id, pw }: { id: string; pw: string }) => {
  try {
    console.log(pw);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}/question/secret/detail/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret_password: pw,
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

const useFetchQuestionSecretDetail = (id: string) => {
  const didMountRef = useRef(false);
  const { back, push } = useRouter();
  const { mutate, data, error } = useMutation<
    QuestionDetailType,
    QuestionDetailType,
    { id: string; pw: string }
  >({
    mutationKey: ["question_secret_detail", id],
    mutationFn: serverRequest,
  });

  useEffect(() => {
    if (didMountRef.current && !id) {
      alert("잘못된 접근 입니다");
      back();
    }
    didMountRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (didMountRef.current && error) {
      alert(error.message);
      push(`/qna/secret-detail/${id}`);
    }
    didMountRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return { mutate, data, error };
};

export default useFetchQuestionSecretDetail;
