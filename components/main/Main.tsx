"use client";
import React from "react";
import Image from "next/image";
import Kakaotalk from "../../assets/images/kakaotalk.png";
import Phone from "../../assets/images/phone.png";
import Message from "../../assets/images/message.png";
import Plus from "../../assets/images/plus_icon.png";
import Lock from "../../assets/images/lock_icon.png";
import { GALLERY_LIST } from "@/app/data/gallery";
import { useRouter } from "next/navigation";
import useFetchQuestion from "@/hooks/question/useFetchQuestion";

const Main = () => {
  const { push } = useRouter();
  const { data } = useFetchQuestion("1", "ALL");
  const questionList = data?.data?.question?.slice(0, 5) ?? [];

  const onClickGalleryPage = () => {
    push("/gallery");
  };
  const onClickQNAPage = () => {
    push("/qna?page=1");
  };

  return (
    <div>
      <main>
        <div className="lg:hidden">
          <div className="bg-main-banner relative">
            <div className="pt-[105px] pl-4 pb-[234px] text-white ">
              <h2 className="text-4xl ">대형세탁전문</h2>
              <h2 className="text-4xl font-bold">신진세탁기업</h2>
              <div className="mt-[19px]">
                <a
                  href=""
                  className="leading-[14px] rounded-[25px]
                    px-[10px] py-[8px] bg-[#B7B7B7] text-center"
                >
                  호텔/모텔 세탁물 전문기업
                </a>
              </div>
            </div>

            <div className="m-auto  w-full  mt-[180px] absolute bottom-[-50px] flex justify-center gap-[10px]">
              <div className="">
                <button
                  className="w-[108px] h-[108px]
                    bg-[#787878] text-center rounded-[10px] flex flex-col items-center justify-center"
                >
                  <Image src={Phone} alt="전화" className="block"></Image>
                  <span
                    className="font-bold pt-[13.5px] block
                        text-white"
                  >
                    전화상담
                  </span>
                </button>
              </div>

              <div className="">
                <button
                  className="w-[108px] h-[108px]
                    bg-[#787878] text-center rounded-[10px] flex flex-col items-center justify-center"
                >
                  <Image src={Message} alt="메세지" className="block"></Image>
                  <span
                    className="font-bold pt-[13.5px] block
                        text-white"
                  >
                    문자상담
                  </span>
                </button>
              </div>

              <div className="">
                <button
                  className="w-[108px] h-[108px]
                    bg-[#787878] text-center rounded-[10px] flex flex-col items-center justify-center"
                >
                  <Image
                    src={Kakaotalk}
                    alt="카카오톡"
                    className="block"
                  ></Image>
                  <span
                    className="font-bold pt-[13.5px] block
                        text-white"
                  >
                    카톡상담
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* 고객문의 */}
          <article className=" px-4 m-auto pt-[134px]">
            <div>
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">고객문의</h3>
                <button
                  className="flex items-center justify-center gap-[14px] w-[82px] h-[28px] rounded-[100px]  border-solid border-[#D9D9D9] border-2 text-[#787878] text-center]"
                  onClick={onClickQNAPage}
                >
                  더보기
                  <Image src={Plus} alt="플러스아이콘"></Image>
                </button>
              </div>
              <div
                className="rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.15)]
                    p-[25px] mt-4 flex flex-col gap-[14px]"
              >
                {questionList.map(({ id, is_secret, question_title }) => {
                  return (
                    <div key={id} className="flex justify-between items-center">
                      <div className="flex items-center gap-[9px]">
                        <span className="w-1 h-1 rounded-full bg-[#D9D9D9]"></span>
                        <p className="text-sm text-[#202020]">
                          {question_title}
                        </p>
                      </div>
                      <div>
                        {is_secret && <Image src={Lock} alt=""></Image>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* 갤러리 영역역 */}
            <div className="mt-20 pb-[120px]">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">갤러리</h3>
                <button className="flex items-center justify-center gap-[14px] w-[82px] h-[28px] rounded-[100px]  border-solid border-[#D9D9D9] border-2 text-[#787878] text-center">
                  더보기
                  <Image src={Plus} alt="플러스아이콘"></Image>
                </button>
              </div>

              {/* img list 영역 */}
              <div className="mt-4">
                <ul
                  className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-[10px] w-full"
                  onClick={onClickGalleryPage}
                >
                  {GALLERY_LIST.map(({ id, image, title }) => {
                    return (
                      <li key={id} className="flex flex-col gap-[10px]">
                        <Image
                          src={image}
                          alt={`${title}이미지`}
                          className="w-full aspect-square rounded-[5px] bg-[#E9E9E9]"
                        />
                        <span className="line-clamp-1">{title}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </article>
        </div>

        {/* 1024 영역 */}
        <div className="lg:block hidden ">
          <div className="bg-main-banner">
            <div
              className="pt-[191px] pl-[104px]  text-white  flex flex-col
                    max-w-[1024px] mx-auto "
            >
              <h2 className="text-6xl leading-[1.2]">대형세탁전문</h2>
              <h2 className="text-6xl font-bold leading-[1.2]">신진세탁기업</h2>
              <div className="mt-[19px] pb-[206px]">
                <a
                  href=""
                  className=" rounded-[25px] text-2xl
                        px-[20px] py-[10px] bg-[#0E5AA9] text-center"
                >
                  호텔/모텔 세탁물 전문기업
                </a>
              </div>
              <div className="">
                <button
                  className="flex flex-col gap-[18px]
                        bg-[rgba(32,32,32,0.7)] pt-[31px] pb-[32px] pl-[29px] pr-[30px]
                        rounded-t-[10px]"
                >
                  <span className="text-2xl leading-none">문의전화</span>
                  <span className="font-bold text-[34px] leading-none">
                    010-9306-5918
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="px-[20px] m-auto">
            <div
              className="flex justify-center bg-[#EFEFEF] mt-[29px]  rounded-[40px] max-w-[1024px]
                mx-auto "
            >
              <span className="text-xl leading-none py-[23px]  ">
                가평 전지역 / 춘천 / 남양주 /
                펜션.풀빌라.키즈.애견.연수원.리조트.모텔
              </span>
            </div>
          </div>

          {/* 고객문의 */}
          <article
            className="mt-20 pb-[120px] flex gap-[84px] px-[104px]
            max-w-[1024px] mx-auto"
          >
            <div className="flex flex-col gap-3 w-1/2">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">고객문의</h3>
                <button
                  className="flex items-center justify-center gap-[14px] w-[82px] h-[28px] rounded-[100px]  border-solid border-[#D9D9D9] border-2 text-[#787878] text-center]"
                  onClick={onClickQNAPage}
                >
                  더보기
                  <Image src={Plus} alt="플러스아이콘"></Image>
                </button>
              </div>
              <div className="rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.15)] min-h-[200px] p-[25px] flex flex-col ">
                {questionList.map(({ id, is_secret, question_title }) => {
                  return (
                    <div
                      key={id}
                      className="flex justify-between items-center mb-[14px]"
                    >
                      <div className="flex items-center gap-[9px]">
                        <span className="w-1 h-1 rounded-full bg-[#D9D9D9]"></span>
                        <p className="text-sm text-[#202020] line-clamp-1">
                          {question_title}
                        </p>
                      </div>
                      <div>
                        {is_secret && <Image src={Lock} alt=""></Image>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* 갤러리 영역역 */}
            <div className="w-1/2 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">갤러리</h3>
                <button
                  className="flex items-center justify-center gap-[14px] w-[82px] h-[28px] rounded-[100px]  border-solid border-[#D9D9D9] border-2 text-[#787878] text-center"
                  onClick={onClickGalleryPage}
                >
                  더보기
                  <Image src={Plus} alt="플러스아이콘"></Image>
                </button>
              </div>

              {/* img list 영역 */}
              <div
                className="flex shadow-[0_0_10px_rgba(0,0,0,0.15)]
                    rounded-[10px] p-[25px] h-full overflow-hidden"
              >
                <ul className="flex justify-center gap-[14px] h-full shrink-0">
                  {GALLERY_LIST.map(({ id, image, title }) => {
                    return (
                      <li
                        key={id}
                        className="w-[108px] flex flex-col gap-[10px]"
                      >
                        <Image
                          src={image}
                          alt={`${title}이미지`}
                          className="w-[108px] h-[108px] rounded-[5px] bg-[#E9E9E9]"
                        />
                        <span className="line-clamp-1">{title}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Main;
