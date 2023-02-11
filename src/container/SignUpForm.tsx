import React from 'react'
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormWatch
} from 'react-hook-form'
import { FormItems } from '../components/FormItems'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../helpers/config/firebase'
import { SignUpPost } from '../helpers/API/APIs'
import { signInWithPopup } from 'firebase/auth'

interface FormProps {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
  SignUpSubmit: React.FormEventHandler<HTMLFormElement>
  watch: UseFormWatch<FieldValues>
}
const SignUpForm: React.FC<FormProps> = ({
  register,
  errors,
  SignUpSubmit,
  watch
}) => {
  const nav = useNavigate()
  const navToHome = () => nav('/')

  const googleSignUp = async () => {
    const res = await signInWithPopup(auth, provider)
    const { email,displayName, uid } = await res.user
    const status = await SignUpPost(email,displayName,uid)
    if (status === 201) nav('../todo')
  }
  return (
    <form
      onSubmit={SignUpSubmit}
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

      {/* 暱稱 */}
      <FormItems
        labelName={'您的暱稱'}
        placeholder={'請輸入暱稱'}
        type={'text'}
        formType={'nickname'}
        register={register}
        rules={{
          value: /^[0-9\u4e00-\u9fa5a-zA-Z]{1,10}$/i,
          message: '請輸入1~10個字的中/英文暱稱'
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

      {/* Check Password */}
      <FormItems
        labelName={'Check Password'}
        placeholder={'請重複輸入密碼'}
        type={'password'}
        formType={'confirmPassword'}
        register={register}
        errors={errors}
        watch={watch}
        validate
      />

      {/* 註冊按鈕 */}
      <div className="flex flex-col">
      <button
        type='submit'
        className='mt-[27px] bg-[#333333] font-bold text-white py-3 px-12 rounded-[10px]'
      >
        註冊帳號
      </button>
      <button
        type='button'
        onClick={googleSignUp}
        className='mt-[27px] bg-[#333333] font-bold text-white py-3 px-12 rounded-[10px]'
      >
        Google註冊
      </button>
      </div>

      {/* 登入按鈕 */}
      <button
        onClick={navToHome}
        className='mt-3 font-bold py-3 px-12 rounded-[10px]'
      >
        登入
      </button>
    </form>
  )
}

export default SignUpForm
