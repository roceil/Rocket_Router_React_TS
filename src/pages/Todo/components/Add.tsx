import { useContext } from "react"
import { AddTodoItem,GetTodoData } from "../../../helpers/API"
import { TodoContext } from "../../../helpers/context/todoData"

export const Add = async() => {
  return  ((async() => {
    console.log(123)
    await AddTodoItem()
    const res = await GetTodoData();
    console.log(res)
   
  })())
}
