import QnaDetailMain from "@/components/qna-detail/QnaDetailMain";
import QnaSecretDetailMain from "@/components/qna-detail/QnaSecretDetailMain";
import React from "react";

const QnADetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return <QnaSecretDetailMain id={id} />;
};

export default QnADetailPage;
