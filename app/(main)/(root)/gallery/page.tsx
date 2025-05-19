import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import { GALLERY_LIST } from "@/app/data/gallery";

export const metadata: Metadata = {
  title: "갤러리 | 신진세탁기업",
  description: "갤러리",
};

const GalleryPage = () => {
  return (
    <section className="w-full h-auto mb-[150px] md:mb-[200px]">
      <h1 className="text-[24px] font-black mt-[20px] mb-[60px] md:mt-[40px] md:mb-[90px] w-full h-auto">
        갤러리
      </h1>
      <ul className="flex flex-wrap gap-[20px]">
        {GALLERY_LIST.map(({ id, image, title }) => {
          return (
            <li
              key={id}
              className="flex flex-col items-start gap-[20px] w-[calc(50%-10px)] h-auto mb-[40px]"
            >
              <Image src={image} alt={`${title}이미지`} />
              <p className="w-full text-[18px] font-medium overflow-hidden whitespace-nowrap text-ellipsis">
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
