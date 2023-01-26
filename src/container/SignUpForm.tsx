import React from "react";

interface FormItems {
  labelName: string;
  placeholder:string;
  type:string
}

const FormItems: React.FC<FormItems> = ({ labelName,placeholder,type }) => {
  return (
    <label className="flex flex-col space-y-1  w-full">
      <span className="block font-bold">{labelName}</span>
      <input
        type={type}
        className="rounded-[10px] w-full py-3 px-4"
        placeholder={placeholder}
      />
      <span className="font-bold text-warning">此欄位不可為空</span>
    </label>
  );
};

const LoginForm: React.FC = () => {
  return (
    <form className="flex flex-col items-center space-y-4">
      {/* Email */}
      <FormItems labelName={"Email"} placeholder={"請輸入Email"} type={"text"}/>

      {/* 暱稱 */}
      <FormItems labelName={"您的暱稱"} placeholder={"請輸入暱稱"} type={"text"}/>

      {/* Password */}
      <FormItems labelName={"Password"} placeholder={"請輸入密碼"} type={"password"}/>

      {/* Check Password */}
      <FormItems labelName={"Check Password"} placeholder={"請重複輸入密碼"} type={"password"}/>

      {/* 登入按鈕 */}
      <button className="mt-[27px] bg-[#333333] font-bold text-white py-3 px-12 rounded-[10px]">
        註冊帳號
      </button>

      {/* 註冊按鈕 */}
      <button className="mt-3 font-bold py-3 px-12 rounded-[10px]">登入</button>
    </form>
  );
};

export default LoginForm;
