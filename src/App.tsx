import { useForm } from 'react-hook-form'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Todo from './pages/Todo/Todo'
import { LoginPost, SignUpPost } from './helpers/API/API'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ProtectRoute from './components/ProtectRoute'
import { useEffect } from 'react'
const queryClient = new QueryClient()

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'onTouched'
  })
  const navToTodo = useNavigate()
  const LoginSubmit = handleSubmit(async(data) => {
    const { email, password } = data
    const status = await LoginPost(email, password)
    if(status === 200) navToTodo("todo")
  })
  const navToLogin = useNavigate()
  const SignUpSubmit = handleSubmit(async (data) => {
    const { email, nickname, password, confirmPassword } = data
    if (password !== confirmPassword) {
      alert('兩次密碼不一致，請重新輸入')
      return
    }
    const status = await SignUpPost(email, nickname, password)
    if (status === 201) navToLogin('/')
  })

  return (
    <Routes>
      <Route
        path='/'
        element={
          <Login
            register={register}
            errors={errors}
            LoginSubmit={LoginSubmit}
            watch={watch}
          />
        }
      />

      <Route
        path='signup'
        element={
          <SignUp
            register={register}
            errors={errors}
            SignUpSubmit={SignUpSubmit}
            watch={watch}
          />
        }
      />
<Route element={<ProtectRoute/>}>
      <Route
        path='/todo'
        element={
          <QueryClientProvider client={queryClient} contextSharing={true}>
            <Todo />
            <ReactQueryDevtools />
          </QueryClientProvider>
        }
      />
</Route>
    </Routes>
  )
}
