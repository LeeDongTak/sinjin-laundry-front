"use client";
import LogoSVG from "@/assets/svg/logo";
import useAdminSignin from "@/hooks/admin/useAdminSignin";
import React, { useState } from "react";

const AdminSignin = () => {
  const hasSession = document.cookie;
  console.log(hasSession);
  const [idText, setIdText] = useState("");
  const [pwText, setPwText] = useState("");
  const { mutate } = useAdminSignin();
  const onChangeIdText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdText(e.target.value);
  };
  const onChangePwText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwText(e.target.value);
  };

  const onClickSubMit = () => {
    mutate({ admin_id: idText, password: pwText });
  };

  return (
    <div className="w-full h-[100dvh] flex flex-col gap-[35px] justify-center items-center">
      <LogoSVG />
      <div className="py-[35px] px-[26px] w-[314px] h-[390px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-[10px]">
        <h3 className="text-[24px] font-bold text-[#284563]">관리자 로그인</h3>
        <div className="flex flex-col gap-[10px] mt-[30px]">
          <label htmlFor="id" className="font-bold text-[#284563]">
            아이디
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={idText}
            placeholder="아이디를 입력하세요"
            className="border border-solid border-[#C6C6C6] font-medium w-full h-[36px] rounded-[5px] pl-[10px]"
            onChange={onChangeIdText}
          />
        </div>
        <div className="flex flex-col gap-[10px] mt-[24px]">
          <label htmlFor="password" className="font-bold text-[#284563]">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={pwText}
            placeholder="비밀번호를 입력하세요"
            className="border border-solid border-[#C6C6C6] font-medium w-full h-[36px] rounded-[5px] pl-[10px]"
            onChange={onChangePwText}
          />
        </div>
        <div>
          <button
            className="w-full h-[45px] bg-[#0E5AA9] text-white mt-[35px] rounded-[5px]"
            onClick={onClickSubMit}
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSignin;
