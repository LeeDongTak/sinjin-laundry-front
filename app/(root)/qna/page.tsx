import ArrowLeft from "@/assets/svg/ArrowLeft";
import ArrowRight from "@/assets/svg/ArrowRight";
import Lock from "@/assets/svg/lock";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "질문게시판 | 신진세탁기업",
  description: "질문게시판",
};

const QnAPage = () => {
  const QNA_LIST = [
    {
      id: 0,
      question_title: "비밀글 입니다",
      question_name: "비밀글 작성자 테스트",
      is_secret: 1,
      is_answer_done: 0,
      is_delete: 0,
    },
    {
      id: 1,
      question_title: "비밀글 입니다",
      question_name: "비밀글 작성자 테스트",
      is_secret: 1,
      is_answer_done: 0,
      is_delete: 0,
    },
    {
      id: 2,
      question_title: "비밀글 입니다",
      question_name: "비밀글 작성자 테스트",
      is_secret: 1,
      is_answer_done: 0,
      is_delete: 0,
    },
    {
      id: 3,
      question_title: "테스트 제목",
      question_name: "작성자 테스트",
      is_secret: 0,
      is_answer_done: 0,
      is_delete: 0,
    },
    {
      id: 4,
      question_title: "테스트 제목",
      question_name: "작성자 테스트",
      is_secret: 0,
      is_answer_done: 0,
      is_delete: 0,
    },
    {
      id: 5,
      question_title: "테스트 제목",
      question_name: "작성자 테스트",
      is_secret: 0,
      is_answer_done: 0,
      is_delete: 0,
    },
    {
      id: 6,
      question_title: "비밀글 입니다",
      question_name: "비밀글 작성자 테스트",
      is_secret: 1,
      is_answer_done: 0,
      is_delete: 0,
    },
    {
      id: 7,
      question_title: "비밀글 입니다",
      question_name: "비밀글 작성자 테스트",
      is_secret: 1,
      is_answer_done: 0,
      is_delete: 0,
    },
    {
      id: 8,
      question_title: "비밀글 입니다",
      question_name: "비밀글 작성자 테스트",
      is_secret: 1,
      is_answer_done: 0,
      is_delete: 0,
    },
    {
      id: 9,
      question_title: "테스트 제목",
      question_name: "작성자 테스트",
      is_secret: 0,
      is_answer_done: 0,
      is_delete: 0,
    },
  ];

  return (
    <section>
      <ul>
        {QNA_LIST.map(({ id, question_title, is_secret }) => {
          return (
            <li
              key={id}
              className="h-[80px] flex justify-start items-center] border-r border-solid border-[#f3f3f3]"
            >
              <div className="flex justify-start items-center gap-[18px]">
                <span className="font-medium text-[16px]">{id}</span>
                <p className="bg-[#787878] w-[1px] h-[10px]"></p>
                <span className="font-bold text-[24px] text-[#0E5AA9]">Q</span>
                <span className="text-[16px] font-bold">{question_title}</span>
                {is_secret === 1 && <Lock />}
              </div>
              <div></div>
            </li>
          );
        })}
      </ul>
      <ul className="flex justify-center items-center gap-[12px]">
        <p className="w-[22px] h-[22px] flex justify-center items-center border border-solid border-[#adadad]">
          <ArrowLeft />
        </p>
        <li className="w-[22px] h-[22px] flex justify-center items-center border border-solid border-[#adadad] text-[#adadad]">
          1
        </li>
        <p className="w-[22px] h-[22px] flex justify-center items-center border border-solid border-[#adadad]">
          <ArrowRight />
        </p>
      </ul>
    </section>
  );
};

export default QnAPage;
