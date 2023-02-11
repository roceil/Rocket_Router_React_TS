import React, {
  type SetStateAction,
  useEffect,
  useState,
  useReducer
} from 'react'
import Header from './components/Header'
import { AddTodoItem, GetTodoData } from '../../helpers/API/APIs'
import { TodoContext } from '../../helpers/context/todoData'
import { useQuery } from 'react-query'
import { TodoList } from './container/TodoList'
import { AddItem } from './components/AddItem'
interface TodoAPIProps {
  id: string
  content: string
  completed_at: null | string
}

function Todo() {
  const [todo, setTodo] = useState<TodoAPIProps[]>([])
  const [text, setText] = useState('')
  const { data, refetch } = useQuery('getTodo', GetTodoData, {
    refetchOnWindowFocus: false
  })
  const [tabPosition, dispatchFn] = useReducer(reducerFn, '全部')
  function reducerFn(state: any, action: { type: string }) {
    switch (action.type) {
      case '全部':
        setTodo(data)
        return '全部'

      case '待完成':
        const unFinishData = data.filter(
          (todo: { completed_at: null }) => todo.completed_at === null
        )
        setTodo(unFinishData)
        return '待完成'

      case '已完成':
        const finishedData = data.filter(
          (todo: { completed_at: null }) => todo.completed_at !== null
        )
        setTodo(finishedData)

        return '已完成'
      default:
        return state
    }
  }
  const handleChange = (e: {
    target: { value: SetStateAction<string> }
  }): void => {
    setText(e.target.value)
  }
  const handleAdd = async () => {
    await AddTodoItem(text)
    const res = await GetTodoData()
    setTodo(res)
    setText('')
    refetch()
  }

  const handleEnterAdd = async (e: { key: string }) => {
    if (e.key !== 'Enter') return
    await AddTodoItem(text)
    const res = await GetTodoData()
    setTodo(res)
    setText('')
    refetch()
  }

  useEffect(() => {
    data !== undefined ? setTodo(data) : null
    switch (tabPosition) {
      case '已完成':
        dispatchFn({ type: '已完成' })
        break

      default:
        break
    }
  }, [data])

  return (
    <TodoContext.Provider
      value={{ todo, setTodo, dispatchFn, tabPosition, refetch }}
    >
      <Header />
      <AddItem
        text={text}
        handleChange={handleChange}
        handleAdd={handleAdd}
        handleEnterAdd={handleEnterAdd}
      />
      <TodoList />
    </TodoContext.Provider>
  )
}

export default Todo
