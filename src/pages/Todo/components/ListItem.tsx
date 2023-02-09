import deleteItem_icon from '../../../image/deleteItem.svg'
import { ChangeStatus, DeleteItem, GetTodoData } from '../../../helpers/API'
import { useTodoContext } from '../../../helpers/context/todoData'

interface ListProps {
  key: string
  content: string
  id: string
  completed_at: null | string
}

export function ListItem({ content, id, completed_at }: ListProps) {
  const checkCompleted = (completed_at ? true : false)
  const { todo, setTodo } = useTodoContext()

  const deleteItem = async () => {
    await DeleteItem(id)
    const res = await GetTodoData()
    setTodo(res)
  }

  const changeStatus = async () => {
    await ChangeStatus(id)
    const res = await GetTodoData()
    setTodo(res)
  }
  return (
    <li className='flex justify-between py-6 px-4 relative list_after'>
      <div className='flex space-x-4 items-center'>
        <input
          type='checkbox'
          className='w-5 h-5'
          defaultChecked={checkCompleted}
          onClick={changeStatus}
        />
        <p>{content}</p>
      </div>
      <button onClick={deleteItem}>
        <img src={deleteItem_icon} alt='deleteItem' />
      </button>
    </li>
  )
}
