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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.424313005526!2d127.48373397658915!3d37.80352917197819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356326377252aef1%3A0x2eea93234920f475!2z6rK96riw64-EIOqwgO2Pieq1sCDqsIDtj4nsnY0g7IOB7IOJ66asIDE2OS0xNA!5e0!3m2!1sko!2skr!4v1735261927118!5m2!1sko!2skr" width="352" height="213" loading="lazy"></iframe>
    </div>
    </div>
    </div>
    {/* 768px 이상 pc 영역 */}  
    <div className="md:block hidden">
      <div className="flex gap-[45px]">
      <div className="mt-20 pb-[376px] ">
        <div>
        <h2 className="font-black text-xl leading-none">찾아오시는길</h2>
        </div>
      <div className="inline-flex flex-col mt-[60px] gap-[24px] ">
        <div className="inline-flex gap-4">
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
      <div className="mt-[60px] flex flex-1">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.424313005526!2d127.48373397658915!3d37.80352917197819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356326377252aef1%3A0x2eea93234920f475!2z6rK96riw64-EIOqwgO2Pieq1sCDqsIDtj4nsnY0g7IOB7IOJ66asIDE2OS0xNA!5e0!3m2!1sko!2skr!4v1735261927118!5m2!1sko!2skr" width="100%"
        height="300"loading="lazy"></iframe>
      </div>
      </div>
    </div>
  </div>);
};

export default LocationPage;
