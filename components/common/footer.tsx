import React from "react";
import FooterLogo from "@/assets/images/footer-logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
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
  const FOOTER_LIST = [
    {
      id: 0,
      title: "상호",
      description: "신진세탁기업",
    },
    {
      id: 1,
      title: "대표자",
      description: "신진희",
    },
    {
      id: 2,
      title: "사업자등록번호",
      description: "421-38-00888",
    },
    {
      id: 3,
      title: "주소",
      description: "경기 가평군 가평읍 태봉두밀로 2-29",
    },
    {
      id: 4,
      title: "이메일",
      description: "shpw0311@naver.com",
    },
  ];

  return (
    <footer className="w-full h-[320px] sm:h-[200px] bg-[#202020] text-[#787878]">
      <div className="w-full max-w-[1024px] h-full mx-auto px-[3%] sm:px-[5.7%] flex flex-col-reverse sm:flex-row justify-center gap-[30px] sm:justify-between items-start sm:items-center">
        <ul className="flex sm:hidden justify-end items-center gap-[20px] w-full">
          {MENU_LIST.map(({ id, name, url }) => {
            return (
              <li key={id} className="text-[12px]">
                <Link href={url}>{name}</Link>
              </li>
            );
          })}
        </ul>
        <p className="sm:hidden h-[1px] w-full bg-[#787878]"></p>
        <ul>
          {FOOTER_LIST.map(({ id, title, description }) => {
            return (
              <li
                key={id}
                className="flex items-center justify-start gap-[4px] font-medium text-[12px]"
              >
                <p>{title}</p>
                <p className="w-[1px] h-[4px] bg-[#787878] rounded-full"></p>
                <p>{description}</p>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col justify-between items-end  gap-[36px]">
          <Link href={"/"}>
            <Image src={FooterLogo} alt="푸터 로고" />
          </Link>
          <ul className="hidden sm:flex justify-center items-center gap-[20px]">
            {MENU_LIST.map(({ id, name, url }) => {
              return (
                <li key={id} className="text-[12px]">
                  <Link href={url}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
