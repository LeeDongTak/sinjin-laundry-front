"use client";
import React, { Suspense, useState } from "react";
import useFetchQuestionDetail from "@/hooks/question/useFetchQuestionDetail";
import { QuestionDetailType } from "@/hooks/question/useFetchQuestionDetail";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import useInsertAnswer from "@/hooks/admin/useInsertAnswer";
import useDeleteQuestion from "@/hooks/admin/useDeleteQuestion";

const AdminDetailMain = ({ id }: { id: string }) => {
  const { data } = useFetchQuestionDetail(id);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QnaDetailContent data={data} id={id} />
    </Suspense>
  );
};

const QnaDetailContent = ({
  data,
  id,
}: {
  data?: QuestionDetailType;
  id: string;
}) => {
  const detailData = data && data?.data;
  const { back } = useRouter();
  const [isTextarea, setIsTextarea] = useState(false);
  const [answerText, setAnswerText] = useState("");
  const { mutate } = useInsertAnswer();
  const { mutate: deleteMutate } = useDeleteQuestion();

  return (
    <section className="relative mb-[130px]">
      <button
        className="absolute -top-[40px] right-0 -translate-y-full w-[130px] h-[40px] border border-solid border-[#C6C6C6] text-[#676767] flex justify-center items-center rounded-[5px]"
        onClick={() => {
          if (window.confirm("문의글을 삭제하시겠습니까?")) {
            deleteMutate(id);
          }
        }}
      >
        문의글 삭제하기
      </button>
      <div className="flex items-center px-[30px] line-clamp-1 w-full h-[60px] rounded-l-full bg-white text-[22px] font-bold text-[#202020]">
        {detailData?.question_title}
      </div>
      <div className="border-b-[1px] border-solid border-[#C6C6C6] text-[16px] text-[#6E6E6E] font-medium w-full py-[20px] mb:py-[25px] flex items-center ml-[16px] mb:ml-[30px] gap-[16px] mb:gap-[40px]">
        <p className="flex gap-[6px] mb:gap-[10px]">
          <span>작성자</span>
          <span className="font-bold">{detailData?.question_name}</span>
        </p>
        <p className="flex gap-[6px] mb:gap-[10px]">
          <span>날짜</span>
          <span className="font-bold">
            {dayjs(detailData?.created_at).format("YYYY-MM-DD")}
          </span>
        </p>
      </div>
      <div className="border-b-[1px] border-solid border-[#C6C6C6] ml-[16px] py-[40px] mb:py-[60px] text-black text-[14px] mb:text-[16px] font-medium">
        {detailData?.question_content}
      </div>

      {detailData?.answer ? (
        <>
          <div className="mt-[10px] bg-[#F3F3F3] rounded-[5px] py-[30px] mb:py-[40px] px-[16px] mb:px-[30px]">
            <div className="pb-[20px] mb:pb-[30px] border-b-[1px] border-solid border-white text-[12px] md:text-[16px] text-[#6E6E6E] font-medium w-full flex items-center gap-[40px]">
              <p className="flex gap-[6px] mb:gap-[10px]">
                <span>작성자</span>
                <span className="font-bold">
                  {detailData?.answer.admin_name}
                </span>
              </p>
              <p className="flex gap-[6px] mb:gap-[10px]">
                <span>날짜</span>
                <span className="font-bold">
                  {dayjs(detailData?.answer?.created_at).format("YYYY-MM-DD")}
                </span>
              </p>
            </div>
            <div className="mt-[20px] mb:mt-[30px] text-[14px] mb:text-[16px]">
              {detailData?.answer.answer_content}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              className="text-white font-bold rounded-[5px] w-[108px] md:w-[147px] h-[40px] bg-[#202020] flex justify-center items-center"
              onClick={back}
            >
              목록으로
            </button>
          </div>
        </>
      ) : (
        <div className="flex justify-end py-[20px] gap-[14px]">
          <button
            className="text-white font-bold rounded-[5px] w-[147px] h-[40px] bg-[#202020] flex justify-center items-center"
            onClick={back}
          >
            목록으로
          </button>
          <button
            className="text-white font-bold rounded-[5px] w-[147px] h-[40px] bg-[#0E5AA9] flex justify-center items-center"
            onClick={() => {
              setIsTextarea(true);
            }}
          >
            답변달기
          </button>
        </div>
      )}
      {!detailData?.answer && isTextarea && (
        <div className="flex flex-col gap-[10px] w-full h-[230px] px-[20px] pt-[20px] bg-[#D6DDED]">
          <textarea
            value={answerText}
            onChange={(e) => {
              setAnswerText(e.target.value);
            }}
            className="p-[20px] w-full h-[140px] rounded-[5px]"
          />
          <div className="flex justify-end gap-[14px]">
            <button
              className="text-[#676767] font-bold rounded-[5px] w-[80px] h-[40px] bg-white flex justify-center items-center"
              onClick={() => {
                setIsTextarea(false);
              }}
            >
              취소
            </button>
            <button
              className="text-white font-bold rounded-[5px] w-[80px] h-[40px] bg-[#0E5AA9] flex justify-center items-center"
              onClick={() => {
                mutate({ content: answerText, id });
              }}
            >
              저장
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdminDetailMain;
