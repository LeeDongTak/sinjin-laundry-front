import React from 'react';

const System = () => {
  return (
    <div className='w-full h-auto bg-white'>
      <section>
        <h1 className='mt-[20px] h-auto text-gray-800 text-[18px] font-bold md:text-[24px] md:mt-[40px]'>
          세탁 공정 안내
        </h1>
      </section>
      <nav className='mt-[80px] md:mt-[90px]  h-[30px] md:w-[522px] md:h-[60px] md:mx-[147px]'>
        <ul className='flex items-center justify-center rounded-full border p-2 max-w-[500px] mx-auto mt-[60px] md:mt-[40px]'>
          <li className="flex-1 text-center px-2 py-1 hover:bg-gray-100 rounded-full cursor-pointer text-[14px] md:px-4 md:py-2 md:text-[18px] relative before:content-[''] before:absolute before:w-[1px] before:h-[24px] before:bg-gray-300 before:right-0 before:top-1/2 before:-translate-y-1/2">
            호텔
          </li>
          <li className="flex-1 text-center px-2 py-1 hover:bg-gray-100 rounded-full cursor-pointer text-[14px] md:px-4 md:py-2 md:text-[18px] relative before:content-[''] before:absolute before:w-[1px] before:h-[24px] before:bg-gray-300 before:right-0 before:top-1/2 before:-translate-y-1/2">
            모텔
          </li>
          <li className="flex-1 text-center px-2 py-1 hover:bg-gray-100 rounded-full cursor-pointer text-[14px] md:px-4 md:py-2 md:text-[18px] relative before:content-[''] before:absolute before:w-[1px] before:h-[24px] before:bg-gray-300 before:right-0 before:top-1/2 before:-translate-y-1/2">
            펜션
          </li>
          <li className="flex-1 text-center px-2 py-1 hover:bg-gray-100 rounded-full cursor-pointer text-[14px] md:px-4 md:py-2 md:text-[18px] relative before:content-[''] before:absolute before:w-[1px] before:h-[24px] before:bg-gray-300 before:right-0 before:top-1/2 before:-translate-y-1/2">
            연수원
          </li>
          <li className='flex-1 text-center px-2 py-1 hover:bg-gray-100 rounded-full cursor-pointer text-[14px] md:px-4 md:py-2 md:text-[18px]'>
            리조트
          </li>
        </ul>
      </nav>
      <section>
        <p className='mt-[60px] md:mt-[40px]'>
          사용된 세탁물들을 수거한 후 분류하여 각 품목에 맞는 방법으로{' '}
          <span className='text-[16px] text-[#0E5aa9] font-bold md:text-[18px]'>
            맞춤클리닝
          </span>
          을 시행합니다.
        </p>
      </section>
    </div>
  );
};

export default System;
