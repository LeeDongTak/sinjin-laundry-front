"use client";

import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SubLayout = () => {
  const pathName = usePathname();
  const [layoutText, setLayoutText] = useState("");
  const { push } = useRouter();

  useEffect(() => {
    if (pathName === "/about") setLayoutText("information");
    if (pathName === "/laundry-system") setLayoutText("laundry system");
    if (pathName === "/location") setLayoutText("location");
    if (pathName === "/gallery") setLayoutText("gallery");
    if (pathName === "/qna") setLayoutText("Q&A");
    if (pathName === "/qna/add") setLayoutText("문의 작성");
    if (pathName.includes("/qna/detail")) setLayoutText("Q&A");
  }, [pathName]);

  const onClickAddQnA = () => {
    push("/qna/add");
  };

  return (
    <div
      className={clsx(
        "flex justify-between items-center uppercase pt-[60px] pb-[15px] md:pt-[120px] md:pb-[30px] text-[14px] md:text-[16px] font-bold text-[#0E5AA9]",
        !pathName.includes("/qna/detail") &&
          "border-b-[2px] border-solid borer-[#c6c6c6] "
      )}
    >
      {layoutText}
      {pathName === "/qna" && (
        <button
          className="before:content-['글_작성'] md:before:content-['글_작성_하기'] font-bold md:text-[17px] md:px-[19px] md:h-[46px] flex justify-center items-center bg-[#0E5AA9] rounded-[5px] text-white text-[13px] px-[10px] h-[26px]"
          onClick={onClickAddQnA}
        />
      )}
    </div>
  );
};

export default SubLayout;
