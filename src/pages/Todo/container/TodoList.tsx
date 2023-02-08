import { useTodoContext } from '../../../helpers/context/todoData'
import { ListItem } from '../components/ListItem'

interface TodoAPIProps {
  id: string
  content: string
  completed_at: null | string
}

export function TodoList() {
  const { todo } = useTodoContext()
  return (
    <div className='container lg:max-w-[500px]'>
      <ul className='flex bg-white rounded-t-[10px] font-bold text-center'>
        <li className='w-1/3 py-4 border-b-2 border-black'>
          <button>全部</button>
        </li>
        <li className='w-1/3 py-4 border-b-2 border-[#EFEFEF]'>
          <button>待完成</button>
        </li>
        <li className='w-1/3 py-4 border-b-2 border-[#EFEFEF]'>
          <button>已完成</button>
        </li>
      </ul>

      <ul className='bg-white'>
        {todo.map((todoItem: TodoAPIProps, index: number) => {
          return (
            <ListItem
              key={index}
              content={todoItem.content}
              id={todoItem.id}
              completed_at={todoItem.completed_at}
            />
          )
        })}
      </ul>

      <ul className='bg-white flex justify-between px-4 py-6 rounded-b-[10px]'>
        <li>
          <span>{todo.length}</span> 個待完成項目
        </li>
        <li>
          <button className='opacity-50 lg:hover:opacity-100'>
            清除已完成項目
          </button>
        </li>
      </ul>
    </div>
  )
}
