"use client";
import LogoSVG from "@/assets/svg/logo";
import SubLogo from "@/assets/svg/SubLogo";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Hhh = () => {
  const pathName = usePathname();
  const [isHome, setIsHome] = useState(true);
  const [bannerText, setBannerText] = useState("");
  const MENU_LIST = [
    {
      id: 0,
      name: "회사소개",
      url: "/about",
    },
    {
      id: 1,
      name: "전문 세탁안내",
      url: "/laundry-system",
    },
    {
      id: 2,
      name: "오시는길",
      url: "/location",
    },
    {
      id: 3,
      name: "갤러리",
      url: "/gallery",
    },
    {
      id: 4,
      name: "고객문의",
      url: "/qna?page=1",
    },
  ];
  useEffect(() => {
    if (pathName === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
    if (pathName === "/") setBannerText("");
    if (pathName === "/about") setBannerText("회사소개");
    if (pathName === "/laundry-system") setBannerText("전문 세탁안내");
    if (pathName === "/location") setBannerText("오시는길");
    if (pathName === "/gallery") setBannerText("갤러리");
    if (pathName === "/qna") setBannerText("고객문의");
  }, [pathName]);

  return (
    <header
      className={clsx(
        "w-full h-auto",
        !isHome && "bg-banner bg-no-repeat bg-cover"
      )}
    >
      <div className="md:px-[20px] w-full max-w-[1024px] h-[120px] md:h-[60px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-center items-center h-[60px] md:h-auto bg-white md:bg-inherit w-full md:w-auto">
          <Link href={"/"}>
            {isHome ? (
              <LogoSVG />
            ) : (
              <>
                <span className="md:hidden">
                  <LogoSVG />
                </span>
                <span className="hidden md:block">
                  <SubLogo />
                </span>
              </>
            )}
          </Link>
        </div>
        <ul
          className={clsx(
            `w-full md:w-auto h-[60px] md:h-auto flex justify-between items-center flex-wrap
            font-medium md:font-bold text-[14px] md:text-[18px] gap-[2px]
            md:gap-[37px] bg-white md:bg-inherit`,
            !isHome && "text-white"
          )}
        >
          {MENU_LIST.map(({ id, name, url }) => {
            return (
              <li
                key={id}
                className={clsx(
                  "flex justify-center items-center bg-[#202020] md:bg-inherit md:w-auto h-[50%] md:h-auto",
                  isHome ? "text-black" : "text-white",
                  id === 3 || id === 4
                    ? "w-[calc(50%-1px)]"
                    : "w-[calc(33.1%-1px)]"
                )}
              >
                <Link
                  className="w-full h-full flex justify-center items-center"
                  href={url}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="w-full h-[1px] bg-white" />
      <div
        className={clsx(
          "w-full flex justify-center items-center font-bold text-[22px] md:text-[34px] text-white",
          isHome ? "h-[0]" : "md:h-[240px] h-[180px]"
        )}
      >
        {bannerText}
      </div>
    </header>
  );
};

export default Hhh;
