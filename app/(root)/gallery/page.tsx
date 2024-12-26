import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "갤러리 | 신진세탁기업",
  description: "갤러리",
};

const GalleryPage = () => {
  const GALLERY_LIST = [
    {
      id: 0,
      image: "",
      title: "호텔세탁, 모텔세탁, 연수원 대량세탁",
    },
    {
      id: 1,
      image: "",
      title: "호텔세탁, 모텔세탁, 연수원 대량세탁",
    },
    {
      id: 2,
      image: "",
      title: "호텔세탁, 모텔세탁, 연수원 대량세탁",
    },
    {
      id: 3,
      image: "",
      title: "호텔세탁, 모텔세탁, 연수원 대량세탁",
    },
  ];

  return (
    <section className="w-full h-auto mb-[150px] md:mb-[200px]">
      <h1 className="text-[24px] font-black mt-[20px] mb-[60px] md:mt-[40px] md:mb-[90px] w-full h-auto">
        갤러리
      </h1>
      <ul className="flex flex-wrap gap-[20px]">
        {GALLERY_LIST.map(({ id, title }) => {
          return (
            <li
              key={id}
              className="flex flex-col items-start gap-[20px] w-[calc(50%-10px)] h-auto mb-[40px]"
            >
              <div className="bg-[#d9d9d9] w-full h-[136px] sm:h-[240px] rounded-lg"></div>
              <p className="w-full text-[18px] font-normal overflow-hidden whitespace-nowrap text-ellipsis">
                {title}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default GalleryPage;
