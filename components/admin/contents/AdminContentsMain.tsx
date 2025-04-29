"use client";
import BottomArrow from "@/assets/svg/BottomArrow";
import Lock from "@/assets/svg/lock";
import PageNation from "@/components/common/PageNation";
import useFetchQuestion from "@/hooks/question/useFetchQuestion";
import clsx from "clsx";
import dayjs from "dayjs";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const AdminContentsMain = () => {
  const [isSelect, setIsSelect] = useState(false);
  const searchParams = useSearchParams();
  const params = searchParams.get("page");
  const filter = searchParams.get("filter");
  const { push } = useRouter();
  const { data } = useFetchQuestion(params ?? "1", filter ?? "ALL");
  const question = data?.data?.question;
  const total = data?.data?.total;
  const SELECT_LIST = [
    { id: 0, label: "답변완료", value: "1" },
    { id: 1, label: "미답변", value: "0" },
    { id: 2, label: "전체", value: "ALL" },
  ];

  const onClickDetailPage = (id: number) => {
    push(`/admin/contents/${id}`);
  };

  useEffect(() => {
    if (!params) {
      const currentParams = new URLSearchParams(searchParams.toString());
      currentParams.set("page", "1");
      push(`?${currentParams.toString()}`);
    }
    if (!filter) {
      const currentParams = new URLSearchParams(searchParams.toString());
      currentParams.set("filter", "ALL");
      push(`?${currentParams.toString()}`);
      console.log(filter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, filter]);

  if (!data) return <></>;

  return (
    <section className="relative md:mb-[82px] mb-[82px]">
      {isSelect && (
        <div
          className="fixed top-0 left-0 w-full h-[100vh]"
          onClick={() => {
            setIsSelect(false);
          }}
        />
      )}
      <div className="w-[110px] flex flex-col justify-between items-center text-[#676767] absolute -top-[40px] right-0 -translate-y-full">
        <div
          className="cursor-pointer px-[10px] flex justify-between items-center rounded-[2px] w-full h-[34px] bg-white border border-solid border-[#C6C6C6]"
          onClick={() => {
            setIsSelect(true);
          }}
        >
          {SELECT_LIST.filter(({ value }) => value === filter)[0]?.label ??
            "전체"}
          <BottomArrow />
        </div>
        <div
          className={clsx(
            "w-full absolute bottom-0 translate-y-full overflow-hidden h-[300px]",
            isSelect ? "block" : "hidden"
          )}
        >
          <ul className="absolute top-0 flex flex-col gap-[14px] leading-none bg-white py-[14px] px-[10px] w-full border border-solid border-[#C6C6C6]">
            {SELECT_LIST.map(({ id, label, value }) => {
              return (
                <li
                  key={id}
                  className="w-full bg-white cursor-pointer"
                  onClick={() => {
                    setIsSelect(false);
                    const currentParams = new URLSearchParams(
                      searchParams.toString()
                    );
                    currentParams.set("filter", value);

                    push(`?${currentParams.toString()}`);
                  }}
                >
                  {label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
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
      </div>
    </section>
  );
};

export default AdminContentsMain;
