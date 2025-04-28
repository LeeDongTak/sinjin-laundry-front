import QnaDetailMain from "@/components/qna-detail/QnaDetailMain";
import React from "react";

const QnASecretDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return <QnaDetailMain id={id} />;
};

export default QnASecretDetailPage;
