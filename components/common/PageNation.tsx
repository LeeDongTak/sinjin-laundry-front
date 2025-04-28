"use client";
import ArrowLeft from "@/assets/svg/ArrowLeft";
import ArrowRight from "@/assets/svg/ArrowRight";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

const PageNation = ({ total }: { total?: number }) => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const pageGroup = Math.floor(+page / 5 - 0.1);

  const onClickCurrentPage = (num: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", "" + num);

    push(`?${params.toString()}`);
  };
  const onClickPrevPage = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(Number(page) - 1));

    push(`?${params.toString()}`);
  };
  const onClickNextPage = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(Number(page) + 1));

    push(`?${params.toString()}`);
  };

  if (!total) return;
  const currentPage = Array.from(
    { length: Math.ceil(total / 10) },
    (_, i) => i + 1
  );

  const chunkSize = 5;

  const pageArr = [];

  for (let i = 0; i < currentPage.length; i += chunkSize) {
    pageArr.push(currentPage.slice(i, i + chunkSize));
  }

  return (
    <ul className="flex justify-center items-center gap-[12px]">
      {+page === 1 ? (
        <p className="w-[22px] h-[22px]"></p>
      ) : (
        <p
          className="cursor-pointer w-[22px] h-[22px] flex justify-center items-center border border-solid border-[#adadad] hover:border-[2px] hover:font-bold"
          onClick={onClickPrevPage}
        >
          <ArrowLeft />
        </p>
      )}
      {pageArr[pageGroup]?.map((item) => {
        return (
          <li
            key={item}
            className={clsx(
              "cursor-pointer w-[22px] h-[22px] flex justify-center items-center  border-solid border-[#adadad] text-[#adadad] hover:border-[2px] hover:font-bold",
              +page === item ? "border-[2px] font-bold" : "border"
            )}
            onClick={() => onClickCurrentPage(item)}
          >
            {item}
          </li>
        );
      })}

      {+page ===
      pageArr[pageArr.length - 1][pageArr[pageArr.length - 1].length - 1] ? (
        <p className="w-[22px] h-[22px]"></p>
      ) : (
        <p
          className="cursor-pointer w-[22px] h-[22px] flex justify-center items-center border border-solid border-[#adadad] hover:border-[2px] hover:font-bold"
          onClick={onClickNextPage}
        >
          <ArrowRight />
        </p>
      )}
    </ul>
  );
};

export default PageNation;
