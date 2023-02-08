import { SetStateAction, useEffect, useState } from 'react'
import Header from './components/Header'
import add from '../../image/add.svg'
import { AddTodoItem, GetTodoData, DeleteAll } from '../../helpers/API'
import { TodoContext } from '../../helpers/context/todoData'
import { useQuery, useMutation } from 'react-query'
import { TodoList } from './container/TodoList'

interface TodoAPIProps {
  id: string
  content: string
  completed_at: null | string
}

function Todo() {
  const [todo, setTodo] = useState<TodoAPIProps[]>([])
  const [text, setText] = useState('')
  const { data } = useQuery('getTodo', GetTodoData, {
    refetchOnWindowFocus: false
  })

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setText(e.target.value)
  }
  const handleAdd = async () => {
    await AddTodoItem(text)
    const res = await GetTodoData()
    setTodo(res)
    setText('')
  }
  const handleDeleteAll = async () => {
    await DeleteAll(data)
    const res = await GetTodoData()
    setTodo(res)
  }

  useEffect(() => {
    data !== undefined ? setTodo(data) : null
  }, [data])
  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      <Header />

      {/* add item */}

      <div className='container lg:max-w-[500px] mb-4'>
        <div className='flex items-center'>
          <input
            type='text'
            value={text}
            onChange={handleChange}
            className='w-full rounded-[10px] py-3 pl-4 mr-[-44px]'
            placeholder='新增待辦事項'
            onKeyDown={(e) => {
              if (e.key !== 'Enter') return
              handleAdd()
            }}
          />
          <button type='button' onClick={handleAdd}>
            <img src={add} alt='add_items' />
          </button>
        </div>
        <button
          type='button'
          className='border p-2 mt-2 bg-white'
          onClick={handleDeleteAll}
        >
          刪除全部
        </button>
      </div>

      <TodoList />
    </TodoContext.Provider>
  )
}

export default Todo
