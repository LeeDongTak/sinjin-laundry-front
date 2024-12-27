import QnaMain from "@/components/qna/QnaMain";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "질문게시판 | 신진세탁기업",
  description: "질문게시판",
};

const QnAPage = () => <QnaMain />;

export default QnAPage;
