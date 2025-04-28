"use client";
import ArrowLeft from "@/assets/svg/ArrowLeft";
import ArrowRight from "@/assets/svg/ArrowRight";
import Lock from "@/assets/svg/lock";
import useFetchQuestion from "@/hooks/question/useFetchQuestion";
import clsx from "clsx";
import dayjs from "dayjs";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import PageNation from "../common/PageNation";

const QnaMain = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QnaContent />
    </Suspense>
  );
};

const QnaContent = () => {
  const params = useSearchParams().get("page") ?? "1";
  const { push } = useRouter();
  const { data } = useFetchQuestion(params);
  const question = data?.data?.question;
  const total = data?.data?.total;

  const onClickDetailPage = (id: number) => {
    push(`/qna/detail/${id}`);
  };

  const onClickAddQnA = () => {
    push("/qna/add");
  };

  if (!data) return <></>;

  return (
    <section className="md:mb-[300px] mb-[150px]">
      <ul>
        {question?.map(
          ({
            id,
            question_title,
            question_name,
            is_answer_done,
            is_secret,
            created_at,
          }) => {
            return (
              <li
                key={id}
                className="w-full h-[45px] md:h-[60px] flex justify-between items-center border-b border-solid border-[#f3f3f3]"
                onClick={() => onClickDetailPage(id)}
              >
                <div className="w-[80%] md:w-[60%] flex justify-start items-center gap-[9px] md:gap-[18px]">
                  <span className="font-medium text-[16px]">{id}</span>
                  <p className="bg-[#787878] w-[1px] h-[10px]"></p>

                  <p className="overflow-hidden whitespace-nowrap text-ellipsis">
                    <span className="flex items-center gap-[9px] md:gap-[18px] text-[16px] font-bold">
                      <span
                        className={clsx(
                          "rounded-sm px-[6px] font-medium text-[14px] text-white w-[49px] h-[24px] flex justify-center items-center leading-none",
                          is_answer_done === 0 ? "bg-[#202020]" : "bg-[#0E5AA9]"
                        )}
                      >
                        {is_answer_done === 0 ? "미답변" : "답변"}
                      </span>
                      <span className="hover:text-[#fc5555] cursor-pointer">
                        {question_title}
                      </span>
                    </span>
                  </p>
                  {is_secret === 1 && (
                    <span className="w-[13px] h-[14px]">
                      <Lock />
                    </span>
                  )}
                </div>
                <div className="w-[20%] md:w-[30%] flex justify-end items-center text-[14px] text-[#adadad]">
                  <span className="mr-[42px] hidden md:block">
                    {question_name}
                  </span>
                  <span>{dayjs(created_at).format("MM-DD")}</span>
                </div>
              </li>
            );
          }
        )}
      </ul>
      <div className="flex justify-center items-center relative mt-[22px] h-[46px] ">
        <PageNation total={total} />
        <button
          className="hidden md:flex absolute top-0 right-0 before:content-['글_작성'] md:before:content-['글_작성_하기'] font-bold md:text-[17px] md:px-[19px] md:h-[46px] justify-center items-center bg-[#0E5AA9] rounded-[5px] text-white text-[13px] px-[10px] h-[26px]"
          onClick={onClickAddQnA}
        />
      </div>
    </section>
  );
};

export default QnaMain;
