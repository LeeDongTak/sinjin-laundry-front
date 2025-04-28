"use client";

import { QuestionDetailType } from "@/hooks/question/useFetchQuestionDetail";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

const QnaDetailContent = ({ data }: { data?: QuestionDetailType }) => {
  const detailData = data && data?.data;
  const { back } = useRouter();

  return (
    <section className="md:mb-[300px] mb-[150px]">
      <div className="flex items-center px-[16px] mb:px-[30px] line-clamp-1 w-full h-[60px] rounded-full bg-[#F3F3F3] text-[18px] md:text-[22px] font-bold text-[#202020]">
        {detailData?.question_title}
      </div>
      <div className="border-b-[1px] border-solid borer-[#F3F3F3] text-[12px] md:text-[16px] text-[#6E6E6E] font-medium w-full py-[20px] mb:py-[25px] flex items-center ml-[16px] mb:ml-[30px] gap-[16px] mb:gap-[40px]">
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
      <div className="py-[40px] mb:py-[60px] text-black text-[14px] mb:text-[16px] font-medium">
        {detailData?.question_content}
      </div>
      {detailData?.answer && (
        <div className="mt-[10px] bg-[#F3F3F3] rounded-[5px] py-[30px] mb:py-[40px] px-[16px] mb:px-[30px]">
          <div className="pb-[20px] mb:pb-[30px] border-b-[1px] border-solid border-white text-[12px] md:text-[16px] text-[#6E6E6E] font-medium w-full flex items-center gap-[40px]">
            <p className="flex gap-[6px] mb:gap-[10px]">
              <span>작성자</span>
              <span className="font-bold">{detailData?.answer.admin_name}</span>
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
      )}
      <div className="flex justify-end">
        <button
          className="text-white font-bold rounded-[5px] w-[108px] md:w-[147px] h-[40px] bg-[#202020] flex justify-center items-center"
          onClick={back}
        >
          목록으로
        </button>
      </div>
    </section>
  );
};

export default QnaDetailContent;
