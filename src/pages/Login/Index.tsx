import LoginForm from "../../container/LoginForm";
import todoLogo from "../image/TodoLogo.svg";
import loginImg from "../image/LoginImg.svg";
import { UseFormRegister, FieldValues, FieldErrors, UseFormWatch } from "react-hook-form";



interface FormProps {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
  LoginSubmit:React.FormEventHandler<HTMLFormElement>
  watch:UseFormWatch<FieldValues>
}
const container = `container flex items-center justify-center h-full lg:space-x-[106px]`;

const Login: React.FC<FormProps> = ({register,errors,LoginSubmit,watch}) => {
  return (
    <div className={container}>
      <div className="flex flex-col items-center">
        <img src={todoLogo} alt="logo" className="hidden lg:block lg:mb-4" />
        <img src={loginImg} alt="" className="hidden lg:block" />
      </div>
      <div className=" pt-8 mb-8 w-full lg:w-[288px] lg:mb-0">
        <div className="flex justify-center">
          <img src={todoLogo} alt="logo" className="mb-4 lg:hidden" />
        </div>
        <h2 className="font-bold text-xl mb-8 text-center">
          最實用的線上代辦事項服務
        </h2>

        {/* 登入用表單 */}
        <LoginForm register={register} errors={errors} LoginSubmit={LoginSubmit} watch={watch}/>
      </div>

    </div>
  );
};

export default Login;
