"use client";
import React, { Suspense, useEffect, useState } from "react";
import dayjs from "dayjs";
import QnaDetailContent from "./QnaDetailContent";
import useFetchQuestionSecretDetail from "@/hooks/question/useFetchQuestionSecretDetail";
import { constants } from "buffer";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const QnaSecretDetailMain = ({ id }: { id: string }) => {
  const [pw, setPw] = useState("");
  const { push } = useRouter();
  const { data, mutate } = useFetchQuestionSecretDetail(id);

  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= 6) setPw(newValue);
  };

  const onClickButton = (text: string) => {
    if (text === "목록으로") {
      push("/qna?page=1");
    } else {
      mutate({ id, pw });
    }
  };
  console.log(data);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {data ? (
        <QnaDetailContent data={data} />
      ) : (
        <div className="w-full h-[calc(100dvh-450px)] bg-white">
          <div className="gap-[25px] px-[30px] mx-auto mt-[100px] w-full max-w-[350px] h-[200px] rounded-[5px] bg-[#F3F3F3] flex flex-col justify-center items-center">
            <p className="font-bold text-[18px]">
              비밀글 입니다. 비밀번호를 입력해 주세요
            </p>
            <input
              type="password"
              value={pw}
              className="w-full h-[36px] rounded-[5px] border border-solid border-[#202020]"
              onChange={onChangePw}
            />
            <ul className="w-full flex justify-between items-center">
              {["목록으로", "확인"].map((item) => {
                return (
                  <li
                    key={item}
                    className={clsx(
                      "cursor-pointer w-[calc(50%-7px)] h-[36px]  text-white rounded-[5px] flex justify-center items-center",
                      item === "목록으로" ? "bg-[#202020]" : "bg-[#0E5AA9]"
                    )}
                    onClick={() => onClickButton(item)}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </Suspense>
  );
};

export default QnaSecretDetailMain;
