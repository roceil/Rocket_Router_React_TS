import React, { type SetStateAction, useEffect, useState } from 'react'
import Header from './components/Header'
import { AddTodoItem, GetTodoData } from '../../helpers/API/API'
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
  const [text, setText] = useState('')
  const { data, refetch } = useQuery('getTodo', GetTodoData, {
    refetchOnWindowFocus: false
  })
  const [todo, setTodo] = useState<TodoAPIProps[]>([])
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
  }, [data])

  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
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
