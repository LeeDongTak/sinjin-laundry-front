"use client";
import React, { Suspense } from "react";
import useFetchQuestionDetail from "@/hooks/question/useFetchQuestionDetail";
import dayjs from "dayjs";
import QnaDetailContent from "./QnaDetailContent";

const QnaDetailMain = ({ id }: { id: string }) => {
  const { data } = useFetchQuestionDetail(id);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QnaDetailContent data={data} />
    </Suspense>
  );
};

export default QnaDetailMain;
