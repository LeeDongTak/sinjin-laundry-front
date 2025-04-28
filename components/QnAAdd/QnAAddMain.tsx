"use client";
import useInsertQuestion from "@/hooks/question/useInsertQuestion";
import clsx from "clsx";
import React, { useState } from "react";

const QnAAddMain = () => {
  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [siteText, setSiteText] = useState("");
  const [phoneText, setPhoneText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [titleText, setTitleText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const { mutate } = useInsertQuestion();
  const inputBoxCss =
    "flex flex-col items-start md:flex-row md:items-center gap-[14px] md:gap-0";
  const labelCss = "w-[103px] text-[16px] font-medium";
  const inputCss =
    "pl-[14px] w-[256px] h-[36px] border border-solid border-[#C6C6C6]";

  const onChangeText = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: string
  ) => {
    if (type === "name") setNameText(e.target.value);
    if (type === "email") setEmailText(e.target.value);
    if (type === "site") setSiteText(e.target.value);
    if (type === "phone") setPhoneText(e.target.value);
    if (type === "password" && e.target.value.length <= 6 && passwordCheck)
      setPasswordText(e.target.value);
    if (type === "passwordCheck") {
      if (!(e.target as HTMLInputElement).checked) setPasswordText("");
      setPasswordCheck((e.target as HTMLInputElement).checked);
    }
    if (type === "title") setTitleText(e.target.value);
    if (type === "description") setDescriptionText(e.target.value);
  };

  const onClickSubmit = () => {
    if (nameText.length <= 0) {
      alert("업체명 / 성명을 입력해 주세요");
    } else if (passwordCheck && passwordText.length <= 0) {
      alert("비밀글에는 비밀번호를 입력해 주세요");
    } else if (phoneText.length <= 0 && emailText.length <= 0) {
      alert("이메일 혹은 전화번호를 입력해 주세요");
    } else if (titleText.length <= 0) {
      alert("제목을 입력해 주세요");
    } else if (descriptionText.length <= 0) {
      alert("내용을 입력해 주세요");
    } else {
      mutate({
        question_title: titleText,
        question_content: descriptionText,
        question_name: nameText,
        is_secret: passwordCheck,
        secret_password: passwordCheck ? passwordText : null,
        user_email: emailText.length > 0 ? emailText : null,
        user_phone: phoneText.length > 0 ? phoneText : null,
        user_site: siteText.length > 0 ? siteText : null,
      });
    }
  };

  const onClickReset = () => {
    setNameText("");
    setEmailText("");
    setSiteText("");
    setPhoneText("");
    setPasswordText("");
    setPasswordCheck(false);
    setTitleText("");
    setDescriptionText("");
  };

  return (
    <section className="mt-[30px] flex flex-col gap-[14px] text-[14px] md:text-[16px]">
      <div className={inputBoxCss}>
        <label htmlFor="name" className={labelCss}>
          업체명 / 성명
        </label>
        <input
          type="text"
          id="name"
          value={nameText}
          placeholder="신진세탁기업"
          className={inputCss}
          onChange={(e) => onChangeText(e, "name")}
        />
      </div>
      <div className={inputBoxCss}>
        <label htmlFor="email" className={labelCss}>
          이메일
        </label>
        <input
          type="email"
          id="email"
          value={emailText}
          placeholder="shpw1243@gamil.com"
          className={inputCss}
          onChange={(e) => onChangeText(e, "email")}
        />
      </div>
      <div className={inputBoxCss}>
        <label htmlFor="site" className={labelCss}>
          홈페이지
        </label>
        <input
          type="text"
          id="site"
          value={siteText}
          placeholder="www.신진세탁기업.com"
          className={inputCss}
          onChange={(e) => onChangeText(e, "site")}
        />
      </div>

      <div className={inputBoxCss}>
        <label htmlFor="phone" className={labelCss}>
          전화번호
        </label>
        <input
          type="number"
          id="phone"
          value={phoneText}
          placeholder="01012345678"
          className={inputCss}
          onChange={(e) => onChangeText(e, "phone")}
        />
      </div>

      <div className={inputBoxCss}>
        <label htmlFor="password" className={labelCss}>
          비밀번호
        </label>
        <input
          type="password"
          id="password"
          placeholder="123456"
          value={passwordText}
          className={clsx(inputCss, "w-[118px]")}
          onChange={(e) => onChangeText(e, "password")}
        />
        <div className="md:ml-[20px] flex items-center gap-[8px]">
          <input
            type="checkbox"
            id="passwordCheck"
            onChange={(e) => onChangeText(e, "passwordCheck")}
          />
          <label htmlFor="passwordCheck">비밀글 작성</label>
        </div>
      </div>

      <div className={clsx(inputBoxCss)}>
        <label htmlFor="title" className={labelCss}>
          제목
        </label>
        <input
          type="text"
          id="title"
          value={titleText}
          placeholder="정기 세탁 견적 문의 드립니다"
          className={clsx(inputCss, "w-[calc(100%-103px)]")}
          onChange={(e) => onChangeText(e, "title")}
        />
      </div>

      <div
        className={clsx(
          "flex flex-col md:flex-row items-start gap-[14px] md:gap-0"
        )}
      >
        <label htmlFor="description" className={clsx(labelCss, "md:mt-[12px]")}>
          내용
        </label>
        <textarea
          id="description"
          placeholder="정기 세탁 견적 문의 드립니다"
          value={descriptionText}
          className={clsx(inputCss, "w-[calc(100%-103px)] h-[206px] pt-[10px]")}
          onChange={(e) => onChangeText(e, "description")}
        />
      </div>

      <div className="mb-[70px] flex justify-end md:justify-center gap-[14px] mt-[16px] pt-[40px] border-t border-solid border-[#C6C6C6]">
        {["취소", "작성 완료"].map((item) => {
          return (
            <div
              key={item}
              className={clsx(
                "h-[40px] flex justify-center items-center rounded-[5px] cursor-pointer",
                item === "작성 완료"
                  ? "bg-[#0E5AA9] text-white w-[122px]"
                  : "bg-[#F3F3F3] border border-solid border-[#C6C6C6] text-[#202020] w-[68px]"
              )}
              onClick={() => {
                if (item === "작성 완료") {
                  onClickSubmit();
                } else {
                  onClickReset();
                }
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default QnAAddMain;
