import todoLogo from "../image/TodoLogo.svg";
import loginImg from "../image/LoginImg.svg";
import SignUpForm from "../container/SignUpForm"

const container = `container flex items-center justify-center h-full lg:space-x-[106px]`;

const SignUp:React.FC=()=> {
  return(
    <div className={container}>
    <div className="flex flex-col items-center">
      <img src={todoLogo} alt="logo" className="hidden lg:block lg:mb-4" />
      <img src={loginImg} alt="" className="hidden lg:block" />
    </div>
    <div className=" pt-8 mb-8 w-full lg:w-[288px] lg:mb-0">
      <div className="flex justify-center">
        <img src={todoLogo} alt="logo" className="mb-4 lg:hidden" />
      </div>
      <h2 className="font-bold text-2xl mb-8">
        註冊帳號
      </h2>

      {/* 登入用表單 */}
      <SignUpForm />
    </div>
  </div>
  )
}

export default SignUp
