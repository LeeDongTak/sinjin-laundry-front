import React from 'react';
import Image from 'next/image';
import companyImage from '../../assets/images/company.png';

const About = () => {
  return (
    <div className='w-full h-auto bg-white'>
      <h1 className='text-[24px] font-black mt-[20px] mb-[60px] md:mt-[40px] md:mb-[90px] w-full h-auto'>
        인사말
      </h1>

      <section className='mt-[30px] mb-[120px] md:mt-[90px] md:mb-[302px] flex flex-col md:flex-row md:justify-between gap-[20px]'>
        <Image
          src={companyImage}
          className='w-[343px] h-[170px] rounded-[10px] md:w-[482px] md:h-[343px] md:rounded-[5px] '
          alt='company'
        />
        <p className='text-gray-800 text-[14px] md:text-[16px] md:leading-6'>
          깔끔하고 신속한 세탁 서비스를 제공하는 저희 신진세탁기업은 고객님들의
          소중한 의류를 깨끗하고 안전하게 세탁하는 것을 최우선으로 생각합니다.
          최신 장비와 전문 세탁 기술을 바탕으로 의류 종류에 맞는 맞춤형 세탁
          서비스를 제공하며, 다루는 모든 의류는 최고의 품질을 보장합니다.
        </p>
      </section>
    </div>
  );
  3;
};

export default About;
