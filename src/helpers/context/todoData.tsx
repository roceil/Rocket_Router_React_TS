import { createContext, Dispatch, SetStateAction, useContext } from 'react'

interface TodoAPIProps {
  id: string
  content: string
  completed_at: null | string
}

interface TodoProps {
  todo: TodoAPIProps[]
  setTodo: Dispatch<SetStateAction<TodoAPIProps[]>>
  dispatchFn: React.Dispatch<{ type: string }>
  tabPosition: string
  refetch: Function
}

export const TodoContext = createContext([] as unknown as TodoProps)

export const useTodoContext = () => useContext(TodoContext)
