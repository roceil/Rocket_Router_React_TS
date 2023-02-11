import { useEffect } from 'react'
import { DeleteAll, GetTodoData } from '../../../helpers/API/APIs'
import { useTodoContext } from '../../../helpers/context/todoData'
import { ListItem } from '../components/ListItem'
interface TodoAPIProps {
  id: string
  content: string
  completed_at: null | string
}

export function TodoList() {
  const { todo, setTodo, dispatchFn, tabPosition } = useTodoContext()

  const handleDeleteAll = async () => {
    await DeleteAll(todo)
    const res = await GetTodoData()
    setTodo(res)
  }
  return (
    <div className='container lg:max-w-[500px]'>
      <ul className='flex bg-white rounded-t-[10px] font-bold text-center'>
        <li
          onClick={() => {
            dispatchFn({ type: '全部' })
          }}
          className={`w-1/3 py-4 border-b-2 cursor-pointer ${
            tabPosition === '全部' ? 'border-black' : 'border-[#EFEFEF]'
          }`}
        >
          <button>全部</button>
        </li>
        <li
          onClick={() => {
            dispatchFn({ type: '待完成' })
          }}
          className={`w-1/3 py-4 border-b-2 cursor-pointer ${
            tabPosition === '待完成' ? 'border-black' : 'border-[#EFEFEF]'
          }`}
        >
          <button>待完成</button>
        </li>
        <li
          onClick={() => {
            dispatchFn({ type: '已完成' })
          }}
          className={`w-1/3 py-4 border-b-2 cursor-pointer ${
            tabPosition === '已完成' ? 'border-black' : 'border-[#EFEFEF]'
          }`}
        >
          <button>已完成</button>
        </li>
      </ul>

      <ul className='bg-white'>
        {todo?.map((todoItem: TodoAPIProps) => {
          return (
            <ListItem
              key={todoItem.id}
              content={todoItem.content}
              id={todoItem.id}
              completed_at={todoItem.completed_at}
            />
          )
        })}
      </ul>

      <div className='bg-white flex justify-between px-4 py-6 rounded-b-[10px]'>
        <span>{todo.length} 個待完成項目</span>
        <button
          onClick={handleDeleteAll}
          className='opacity-50 lg:hover:opacity-100'
        >
          清除已完成項目
        </button>
      </div>
    </div>
  )
}
