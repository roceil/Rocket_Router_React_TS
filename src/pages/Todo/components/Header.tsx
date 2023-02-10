import TodoLogo from '../../../image/TodoLogo.svg'
import { useNavigate } from 'react-router-dom'
import { useTodoContext } from '../../../helpers/context/todoData'

function Header() {
  const { todo,setTodo } = useTodoContext()
  const navToLogin = useNavigate()
  const logOut = () => {
    setTodo([])
    localStorage.clear()
    alert('登出成功')
    navToLogin('/')
    location.reload()
  }
  return (
    <div className='container mt-4 flex justify-between items-center mb-4 lg:mb-10'>
      <img className='max-w-[242.51px]' src={TodoLogo} alt='Logo' />
      <div className='flex  items-center lg:space-x-6'>
        <span className='font-bold hidden lg:block'>User Name</span>
        <button
          type='button'
          onClick={logOut}
          className='border border-black rounded-lg p-2'
        >
          登出
        </button>
      </div>
    </div>
  )
}
export default Header
