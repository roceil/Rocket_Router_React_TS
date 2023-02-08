import { useEffect, useState } from 'react'
import Header from './components/Header'
import add from '../../image/add.svg'
import deleteItem from '../../image/deleteItem.svg'
import { AddTodoItem, GetTodoData, DeleteAll } from '../../helpers/API'
import { TodoContext } from '../../helpers/context/todoData'
import { useQuery } from 'react-query'
import { set } from 'react-hook-form'

interface TodoAPIProps {
  id: string
  content: string
  completed_at: null | string
}

const fakeData = [1, 2, 3, 4]

function ListItem({ content }: any) {
  return (
    <li className='flex justify-between py-6 px-4 relative after:absolute after:bottom-0 after:left-1/2 after:bg-[#E5E5E5] after:h-[1px] after:w-[calc(100%-24px)] after:translate-x-[-50%]'>
      <div className='flex space-x-4 items-center'>
        <input type='checkbox' className='w-5 h-5' />
        <p>{content}</p>
      </div>
      <button>
        <img src={deleteItem} alt='deleteItem' />
      </button>
    </li>
  )
}
function Todo() {
  const [todo, setTodo] = useState<TodoAPIProps[]>([])
  const { data, isLoading, refetch } = useQuery('getTodo', GetTodoData, {
    refetchOnWindowFocus: false
  })

  console.log('isLoading', isLoading)

  useEffect(() => {
    data !== undefined ? setTodo(data) : ''
  }, [data])
  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      <Header />

      {/* add item */}
      <div className='container lg:max-w-[500px] mb-4'>
        <div className='flex items-center'>
          <input
            type='text'
            className='w-full rounded-[10px] py-3 pl-4 mr-[-44px]'
            placeholder='新增待辦事項'
          />
          <button
            type='button'
            onClick={async () => {
              await AddTodoItem()
              const res = await GetTodoData()
              setTodo(res)
            }}
          >
            <img src={add} alt='add_items' />
          </button>
        </div>
        <button
          type='button'
          className='border p-2 mt-2 bg-white'
          onClick={async () => {
            await DeleteAll(data)
            const res = await GetTodoData()
            setTodo(res)
          }}
        >
          刪除全部
        </button>
      </div>

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
          {todo.map((todoItem, index) => {
            return (
              <ListItem
                key={index}
                content={todoItem.content}
                id={todoItem.id}
              />
            )
          })}
        </ul>

        <ul className='bg-white flex justify-between px-4 py-6 rounded-b-[10px]'>
          <li>
            <span>5</span> 個待完成項目
          </li>
          <li>
            <button className='opacity-50 lg:hover:opacity-100'>
              清除已完成項目
            </button>
          </li>
        </ul>
      </div>
    </TodoContext.Provider>
  )
}

export default Todo
