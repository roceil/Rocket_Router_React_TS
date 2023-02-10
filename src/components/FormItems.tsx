import React, { ReactNode } from 'react'
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormWatch
} from 'react-hook-form'

interface FormItems {
  labelName: string
  placeholder: string
  type: string
  formType: string
  register: UseFormRegister<FieldValues>
  rules?: object
  errors: FieldErrors<FieldValues>
  watch: UseFormWatch<FieldValues>
  validate?: boolean
}
export const FormItems: React.FC<FormItems> = ({
  labelName,
  placeholder,
  type,
  formType,
  errors,
  register,
  rules,
  watch,
  validate
}) => {
  const checkErrors = errors[formType] ? errors[formType]?.message : ''
  return (
    <label className='flex flex-col space-y-1  w-full'>
      <span className='block font-bold'>{labelName}</span>
      <input
        type={type}
        className='rounded-[10px] w-full py-3 px-4'
        placeholder={placeholder}
        {...register(`${formType}`, {
          required: { value: true, message: '欄位必填' },
          pattern: rules as unknown as undefined,
          validate: (val) => {
            if (validate === undefined) return
            if (watch('password') != val) {
              return '密碼不一致'
            }
          }
        })}
      />
      <span className='font-bold text-warning'>{checkErrors as ReactNode}</span>
    </label>
  )
}
