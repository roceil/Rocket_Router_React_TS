function LoginForm() {
  return (
    <form className="flex flex-col items-center">
      {/* Email */}
      <label className="flex flex-col space-y-1 mb-4 w-full">
        <span className="block font-bold">Email</span>
        <input
          type="text"
          className="rounded-[10px] w-full py-3 px-4"
          placeholder="請輸入Email"
        />
        <span className="font-bold text-warning">此欄位不可為空</span>
      </label>

      {/* Password */}
      <label className="flex flex-col space-y-1 w-full">
        <span className="block font-bold">Password</span>
        <input
          type="text"
          className="rounded-[10px] w-full py-3 px-4"
          placeholder="請輸入密碼"
        />
      </label>

      {/* 登入按鈕 */}
      <button className="mt-[27px] bg-[#333333] font-bold text-white py-3 px-12 rounded-[10px]">
        登入
      </button>

      {/* 註冊按鈕 */}
      <button className="mt-3 font-bold py-3 px-12 rounded-[10px]">
        註冊帳號
      </button>
    </form>
  );
}

export default LoginForm;
