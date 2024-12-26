import React from 'react';
import Image from 'next/image';
import Kakaotalk from '../../assets/images/kakaotalk.png';
import Phone from '../../assets/images/phone.png';
import Message from '../../assets/images/message.png';
import Plus from '../../assets/images/plus_icon.png';
import Lock from '../../assets/images/lock_icon.png';

const Main = () => {
  return (
    <div>
      <main className='bg-[#d9d9d9] h-[450px]'>
        <div className='pt-[105px] pl-4 text-white'>
          <h2 className='text-4xl '>대형세탁전문</h2>
          <h2 className='text-4xl font-bold'>신진세탁기업</h2>
          <div className='mt-[19px]'>
            <a
              href=''
              className='leading-[14px] rounded-[25px]
                    px-[10px] py-[8px] bg-[#B7B7B7] text-center'
            >
              호텔/모텔 세탁물 전문기업
            </a>
          </div>
        </div>
        <div className='mt-[180px] mx-4 flex gap-[10px] m-auto'>
          <div
            className='flex flex-col justify-center items-center
                w-[108px] h-[108px] bg-[#787878] text-center rounded-[10px]'
          >
            <Image src={Phone} alt='전화'></Image>
            <span
              className='font-bold pt-[13.5px] inline-block
                    text-white'
            >
              전화상담
            </span>
          </div>
          <div
            className='flex flex-col justify-center items-center
                w-[108px] h-[108px] bg-[#787878] text-center rounded-[10px]'
          >
            <Image src={Message} alt='전화'></Image>
            <span
              className='font-bold pt-[13.5px] inline-block
                    text-white'
            >
              문자상담
            </span>
          </div>
          <div
            className='flex flex-col justify-center items-center
                w-[108px] h-[108px] bg-[#787878] text-center rounded-[10px]'
          >
            <Image src={Kakaotalk} alt='전화'></Image>
            <span
              className='font-bold pt-[13.5px] inline-block
                    text-white'
            >
              카카오상담
            </span>
          </div>
        </div>
      </main>

      {/* 고객문의 */}
      <article className=' mx-4 m-auto'>
        <div className='mt-20'>
          <div className='flex justify-between items-center'>
            <h3 className='font-bold text-lg'>고객문의</h3>
            <button className='flex items-center gap-[14px] px-[14px] py-[10px] rounded-[100px]  border-solid border-[#D9D9D9] border-2 text-[#787878]'>
              더보기
              <Image src={Plus} alt='플러스아이콘'></Image>
            </button>
          </div>
          <div
            className='rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.15)]
                p-[25px] mt-4 flex flex-col gap-[14px]'
          >
            <div className='flex items-center gap-[10px]'>
              <span
                className='bg-[#0E5AA9]
                        p-1 text-xs rounded-[3px] text-center text-white'
              >
                공지
              </span>
              <p className='text-sm font-bold w-[150px] truncate'>
                공지사항어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
              </p>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-[9px]'>
                <span className='w-1 h-1 rounded-full bg-[#D9D9D9]'></span>
                <p className='text-sm text-[#202020]'>
                  정기세탁 견적 문의드립니다
                </p>
              </div>
              <div>
                <Image src={Lock} alt=''></Image>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-[9px]'>
                <span className='w-1 h-1 rounded-full bg-[#D9D9D9]'></span>
                <p className='text-sm text-[#202020]'>
                  Re:정기세탁 견적 문의드립니다
                </p>
              </div>
              <div>
                <Image src={Lock} alt=''></Image>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-[9px]'>
                <span className='w-1 h-1 rounded-full bg-[#D9D9D9]'></span>
                <p className='text-sm text-[#202020] w-[210px] truncate'>
                  정기세탁 견적 문의드립니다어쩌구저쩌구저쩌구어
                </p>
              </div>
              <div>
                <Image src={Lock} alt=''></Image>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-[9px]'>
                <span className='w-1 h-1 rounded-full bg-[#D9D9D9]'></span>
                <p className='text-sm text-[#202020] w-[210px] truncate'>
                  Re:정기세탁 견적 문의드립니다어쩌구저쩌구저쩌구
                </p>
              </div>
              <div>
                <Image src={Lock} alt=''></Image>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-[9px]'>
                <span className='w-1 h-1 rounded-full bg-[#D9D9D9]'></span>
                <p className='text-sm text-[#202020] w-[210px] truncate'>
                  Re:정기세탁 견적 문의드립니다어쩌구저쩌구저쩌구
                </p>
              </div>
              <div>
                <Image src={Lock} alt=''></Image>
              </div>
            </div>
          </div>
        </div>
        {/* 갤러리 영역역 */}
        <div className='mt-20'>
          <div className='flex justify-between items-center'>
            <h3 className='font-bold text-lg'>갤러리</h3>
            <button className='flex items-center gap-[14px] px-[14px] py-[10px] rounded-[100px]  border-solid border-[#D9D9D9] border-2 text-[#787878]'>
              더보기
              <Image src={Plus} alt='플러스아이콘'></Image>
            </button>
          </div>
          <div className='flex mt-4'>
            <ul className='flex flex-wrap gap-[10px] m-[-10px]'>
              <li className='flex flex-col gap-[10px]'>
                <a
                  href=''
                  className='w-[108px] h-[108px]
                           rounded-[5px] bg-[#E9E9E9]'
                ></a>
                <span>이미지설명...</span>
              </li>
              <li className='flex flex-col gap-[10px]'>
                <a
                  href=''
                  className='w-[108px] h-[108px]
                           rounded-[5px] bg-[#E9E9E9]'
                ></a>
                <span>이미지설명...</span>
              </li>
              <li className='flex flex-col gap-[10px]'>
                <a
                  href=''
                  className='w-[108px] h-[108px]
                           rounded-[5px] bg-[#E9E9E9]'
                ></a>
                <span>이미지설명...</span>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Main;
