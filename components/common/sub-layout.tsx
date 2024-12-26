"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const SubLayout = () => {
  const pathName = usePathname();
  const [layoutText, setLayoutText] = useState("");

  useEffect(() => {
    if (pathName === "/about") setLayoutText("information");
    if (pathName === "/laundry-system") setLayoutText("laundry system");
    if (pathName === "/location") setLayoutText("location");
    if (pathName === "/gallery") setLayoutText("gallery");
    if (pathName === "/qna") setLayoutText("Q&A");
  }, [pathName]);

  return (
    <div className="uppercase pt-[60px] pb-[15pxx] md:pt-[120px] md:pb-[30px] border-b-[2px] border-solid borer-[#c6c6c6] text-[14px] md:text-[16px] font-bold text-[#0E5AA9]">
      {layoutText}
    </div>
  );
};

export default SubLayout;
