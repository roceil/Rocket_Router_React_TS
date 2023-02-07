import { useForm } from 'react-hook-form'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Todo from './pages/Todo'
import { LoginPost,SignUpPost } from './helpers/API'

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'onTouched'
  })
  const LoginSubmit = handleSubmit((data) => {
    const { email, password } = data
    LoginPost(email, password)
  })
  const SignUpSubmit = handleSubmit((data) => {
    const { email,nickname, password,confirmPassword } = data
    if(password !== confirmPassword) {
      alert("兩次密碼不一致，請重新輸入")
      return
    }
    SignUpPost(email,nickname, password)
  })

  // return <Login register={register} errors={errors} LoginSubmit={LoginSubmit} watch={watch}/>
  // return <SignUp register={register} errors={errors} SignUpSubmit={SignUpSubmit} watch={watch}/>
  return <Todo/>
}
