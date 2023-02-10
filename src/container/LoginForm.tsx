import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormWatch
} from 'react-hook-form'
import { FormItems } from '../components/FormItems'
import { useNavigate } from 'react-router-dom'
interface FormProps {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
  LoginSubmit: React.FormEventHandler<HTMLFormElement>
  watch: UseFormWatch<FieldValues>
}

const LoginForm: React.FC<FormProps> = ({
  register,
  errors,
  LoginSubmit,
  watch
}) => {
  const nav = useNavigate()
  const navToSignUp = () => nav('/SignUp')
  return (
    <form
      onSubmit={LoginSubmit}
      className='flex flex-col items-center space-y-4'
    >
      {/* Email */}
      <FormItems
        labelName={'Email'}
        placeholder={'請輸入Email'}
        type={'text'}
        formType={'email'}
        register={register}
        rules={{
          value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
          message: '請輸入信箱'
        }}
        watch={watch}
        errors={errors}
      />

      {/* Password */}
      <FormItems
        labelName={'Password'}
        placeholder={'請輸入密碼'}
        type={'password'}
        formType={'password'}
        register={register}
        rules={{ value: /^[A-Za-z0-9]{6,}$/i, message: '請輸入6碼以上的密碼' }}
        watch={watch}
        errors={errors}
      />

      {/* 登入按鈕 */}
      <button
        type='submit'
        className='mt-[27px] bg-[#333333] font-bold text-white py-3 px-12 rounded-[10px]'
      >
        登入
      </button>

      {/* 註冊按鈕 */}
      <button
        type='button'
        onClick={navToSignUp}
        className='mt-3 font-bold py-3 px-12 rounded-[10px]'
      >
        註冊帳號
      </button>
    </form>
  )
}

export default LoginForm
