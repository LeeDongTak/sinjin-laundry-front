import { Metadata } from "next";
import React from "react";
import Image from 'next/image';
import Map from "../../../assets/images/map.png"
import Pc_Map from "../../../assets/images/pc_map.png"

export const metadata: Metadata = {
  title: "찾아오시는길 | 신진세탁기업",
  description: "찾아오시는길",
};

const LocationPage = () => {
  return( <div>
    <div className="md:hidden">
    <div className="flex flex-col pb-[120px]">

    <h2 className="text-lg leading-none mt-5 font-black">찾아오시는길</h2>

    <div className="flex flex-col order-3 mt-[30px] gap-5">
      <div className="flex gap-4">

        <strong className="leading-none text-sm font-black">주소</strong>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-[6px]">
          <span className="rounded-full w-1 h-1 bg-[#838383] "></span>
          <span className="text-sm leading-none">경기 가평군 가평읍 태봉두밀로 2-29</span>
          </div>
          <div className="flex items-center gap-[6px]">
          <span className="rounded-full w-1 h-1 bg-[#838383]"></span>
          <span className="text-sm leading-none">상색리 169-14</span>
          </div>
        </div>
        </div>
        <div className="flex gap-[15px]">
          <strong className="leading-none text-sm font-black">TEL</strong>
          <span className="text-sm leading-none">010-9306-5918</span>
        </div>
        <div className="flex gap-[15px]">
          <strong className="leading-none text-sm font-black">FAX</strong>
          <span className="text-sm leading-none">010-9306-5918</span>
        </div>
    </div>
    <div className="flex order-2 mt-[60px]">
    <Image src={Map} alt="맵" className="block"/>
    </div>
    </div>
    </div>
    {/* 1024 영역 */}  
    <div className="md:block hidden">
    <div className="flex justify-between">
    <div className="mt-20 w-1/2 pb-[376px]">
      <h2 className="font-black text-xl leading-none">찾아오시는길</h2>
    <div className="flex flex-col mt-[60px] gap-[24px] ">
      <div className="flex gap-4">
        <strong className="leading-none text-base font-black">주소</strong>
        <div className="flex flex-col gap-[14px]">
          <div className="flex items-center gap-[6px]">
          <span className="rounded-full w-1 h-1 bg-[#838383] "></span>
          <span className="text-base leading-none">경기 가평군 가평읍 태봉두밀로 2-29</span>
          </div>
          <div className="flex items-center gap-[6px]">
          <span className="rounded-full w-1 h-1 bg-[#838383]"></span>
          <span className="text-base leading-none">상색리 169-14</span>
          </div>
        </div>
        </div>
        <div className="flex gap-[15px]">
          <strong className="leading-none text-base font-black">TEL</strong>
          <span className="text-base leading-none">010-9306-5918</span>
        </div>
        <div className="flex gap-[15px]">
          <strong className="leading-none text-base font-black">FAX</strong>
          <span className="text-base leading-none">010-9306-5918</span>
        </div>
    </div>
    </div>
    <div className="mt-10">
      <Image src={Pc_Map} alt="맵" className="inline-block  w-[482px] h-[300px]"/>
    </div>
    </div>
    </div>
  </div>);
};

export default LocationPage;
