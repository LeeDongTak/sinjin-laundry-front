"use client";
import ArrowLeft from "@/assets/svg/ArrowLeft";
import ArrowRight from "@/assets/svg/ArrowRight";
import Lock from "@/assets/svg/lock";
import useFetchQuestion from "@/hooks/question/useFetchQuestion";
import clsx from "clsx";
import dayjs from "dayjs";
import { useSearchParams } from "next/navigation";
import React from "react";

const QnaMain = () => {
  const params = useSearchParams().get("page") ?? "1";
  const QNA_LIST = [
    {
      id: 0,
      question_title:
        "비밀글 입니다sdfasdfasdfasdfadsfsdafasdasdfasdfsadfasdfasdfasfasfasfasfasfasdfffasdfasdfasdfasdf",
      question_name: "비밀글 작성자 테스트",
      is_secret: 1,
      is_answer_done: 1,
      is_delete: 0,
      created_at: "2024-12-23T15:18:21.000Z",
    },
    {
      id: 1,
      question_title: "비밀글 입니다",
      question_name: "비밀글 작성자 테스트",
      is_secret: 1,
      is_answer_done: 0,
      is_delete: 0,
      created_at: "2024-12-23T15:18:21.000Z",
    },
    {
      id: 2,
      question_title: "비밀글 입니다",
      question_name: "비밀�� 작성자 테스트",
      is_secret: 1,
      is_answer_done: 0,
      is_delete: 0,
      created_at: "2024-12-23T15:18:21.000Z",
    },
    {
      id: 3,
      question_title: "테스트 제목",
      question_name: "작성자 테스트",
      is_secret: 0,
      is_answer_done: 0,
      is_delete: 0,
      created_at: "2024-12-23T15:18:21.000Z",
    },
    {
      id: 4,
      question_title: "테스트 제목",
      question_name: "작성자 테스트",
      is_secret: 0,
      is_answer_done: 0,
      is_delete: 0,
      created_at: "2024-12-23T15:18:21.000Z",
    },
    {
      id: 5,
      question_title: "테스트 제목",
      question_name: "작성자 테스트",
      is_secret: 0,
      is_answer_done: 0,
      is_delete: 0,
      created_at: "2024-12-23T15:18:21.000Z",
    },
    {
      id: 6,
      question_title: "비밀글 입니다",
      question_name: "비밀글 작성자 테스트",
      is_secret: 1,
      is_answer_done: 0,
      is_delete: 0,
      created_at: "2024-12-23T15:18:21.000Z",
    },
    {
      id: 7,
      question_title: "비밀글 입니다",
      question_name: "비밀글 작성자 테스트",
      is_secret: 1,
      is_answer_done: 0,
      is_delete: 0,
      created_at: "2024-12-23T15:18:21.000Z",
    },
    {
      id: 8,
      question_title: "비밀글 입니다",
      question_name: "비밀글 작성자 테스트",
      is_secret: 1,
      is_answer_done: 0,
      is_delete: 0,
      created_at: "2024-12-23T15:18:21.000Z",
    },
    {
      id: 9,
      question_title: "테스트 제목",
      question_name: "작성자 테스트",
      is_secret: 0,
      is_answer_done: 0,
      is_delete: 0,
      created_at: "2024-12-23T15:18:21.000Z",
    },
  ];
  const { data } = useFetchQuestion(params);
  const PAGE_NUMBER_LIST = [{ id: 0, pageNum: 1 }];

  return (
    <section className="md:mb-[300px] mb-[150px]">
      <ul>
        {data?.map(
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
      <ul className="flex justify-center items-center gap-[12px]">
        {+params === 1 ? (
          <p className="w-[22px] h-[22px]"></p>
        ) : (
          <p className="cursor-pointer w-[22px] h-[22px] flex justify-center items-center border border-solid border-[#adadad] hover:border-[2px] hover:font-bold">
            <ArrowLeft />
          </p>
        )}
        {PAGE_NUMBER_LIST.map(({ id, pageNum }) => {
          return (
            <li
              key={id}
              className={clsx(
                "cursor-pointer w-[22px] h-[22px] flex justify-center items-center  border-solid border-[#adadad] text-[#adadad] hover:border-[2px] hover:font-bold",
                +params === pageNum ? "border-[2px] font-bold" : "border"
              )}
            >
              {pageNum}
            </li>
          );
        })}
        <p className="cursor-pointer w-[22px] h-[22px] flex justify-center items-center border border-solid border-[#adadad] hover:border-[2px] hover:font-bold">
          <ArrowRight />
        </p>
      </ul>
    </section>
  );
};

export default QnaMain;
