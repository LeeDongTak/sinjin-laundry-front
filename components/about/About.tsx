import React from "react";
import Image from "next/image";
import companyImage from "../../assets/images/company.png";

const About = () => {
  return (
    <div className="w-full h-auto bg-white">
      <h1 className="text-[24px] font-black mt-[20px] md:mt-[40px] w-full h-auto">
        인사말
      </h1>

      <section className="mb-[120px] md:mb-[302px] flex flex-col md:flex-row md:justify-between gap-[20px]">
        {/* <Image
          src={companyImage}
          className="w-[343px] h-[170px] rounded-[10px] md:w-[482px] md:h-[343px] md:rounded-[5px] "
          alt="company"
        /> */}
        <p className="text-gray-800 text-[14px] md:text-[18px] md:leading-6 whitespace-pre-line">
          {`
          신진세탁기업은 가평의 넓은 부지와 최신 설비를 기반으로,
호텔·리조트·숙박시설을 위한 침구류 대량 세탁 서비스를 전문으로 제공하고 있는 세탁 전문 기업입니다.
고객의 비즈니스 품격을 완성하는 파트너로서, 단순한 ‘세탁’을 넘어
보이지 않는 ‘신뢰’와 ‘정밀함’까지 책임집니다.

전 공정은 자동화 설비와 위생적인 환경 속에서 관리되며,
고급 침구류에 최적화된 세탁과 건조 시스템으로 섬유 손상을 최소화하고
최상의 촉감과 청결함을 유지합니다.
세제 사용량, 온도, 헹굼 횟수까지 과학적으로 제어하여
항상 일정하고 안정된 품질을 제공합니다.

대형,대량 물량도 충분히 대응 가능한 설비와
정확한 납기, 빠른 회전율을 통해 운영 효율성까지 함께 고려합니다.
저희는 세탁을 단순한 외주가 아닌,
고객 서비스를 뒷받침하는 핵심 운영 파트너로 생각합니다.

침구의 품질은 고객의 만족도를 좌우하며,
그 시작은 ‘완벽한 세탁’에서 비롯된다는 것을 저희는 잘 알고 있습니다.
가평 및 수도권 전역의 숙박업 고객 여러분께,
합리적이면서도 고품질의 세탁 솔루션을 약속드립니다.
      `}{" "}
        </p>
      </section>
    </div>
  );
  3;
};

export default About;
